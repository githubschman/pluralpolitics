import React, {useState, useEffect} from 'react'
import cloneDeep from 'lodash/cloneDeep'
import { CaretLeftOutlined } from '@ant-design/icons';
import { Button, Progress, Checkbox, Typography } from 'antd';
import { useHistory } from 'react-router-dom'
import {metricsSections} from '../../pages/results';
import database from '../../utils/database'

import {sendEvent, EVENT_TYPES} from '../../utils/analytics'

import styles from './testcomponent.module.scss'

const {Title, Paragraph} = Typography

const TestComponent = ({ testData, questionIndex, version }) => {
  const history = useHistory()
  const [percent, setPercent] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(questionIndex || 0);
  const [allAnswers, setAllAnswers] = useState(Array(testData.length));
  const [checkedList, setCheckedList] = useState([]);
  const [skipLimitHit, setSkippedLimit] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false)

  useEffect(() => {
    // // redirect to results if test is complete
    // const testComplete = localStorage.getItem("plural_politics_version")
    // if (testComplete) {
    //   history.push({pathname: "/results"})
    //   return;
    // }
    // set setCurrentQuestionIndex by localstorage
    const storedIndex = localStorage.getItem("plural_politics_cqi");
    const storedAnswers = localStorage.getItem("plural_politics_answers");
    const storedIndexInt = parseInt(storedIndex, 10);
    const storedAnswersArr = JSON.parse(storedAnswers);

    if (storedIndexInt >= 0) {
      setCurrentQuestionIndex(storedIndexInt)
    }
    if (storedAnswersArr) {
      setAllAnswers(storedAnswersArr)
    }
  }, [])

  const saveDataToLocalStorage = (newAllAnswers) => {
    localStorage.setItem("plural_politics_answers", JSON.stringify(newAllAnswers));
  }


  useEffect(() => {
    // set setCurrentQuestionIndex by localstorage
    setCheckedList(allAnswers[currentQuestionIndex] || [])
    setPercent(Math.floor(currentQuestionIndex/testData.length * 100))
    // set whether the question has been skipped or not
    if (allAnswers[currentQuestionIndex] && !allAnswers[currentQuestionIndex].length) {
      setIsSkipped(true)
    } else {
      setIsSkipped(false)
    }
  }, [currentQuestionIndex])

  const goToNextQuestion = () => {
    if (currentQuestionIndex < testData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      localStorage.setItem("plural_politics_cqi", currentQuestionIndex + 1);
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const undoSkip = () => {
    setSkippedLimit(false);
  }

  const getAbsoluteDifference = (data) => {
    const rightEcon = data.find(d => d.text === "right-economics").value;
    const leftEcon = data.find(d => d.text === "left-economics").value;
    const authority = data.find(d => d.text === "authority-respecting").value;
    const liberty = data.find(d => d.text === "liberty-loving").value;
    return Math.abs(((rightEcon - leftEcon) + (leftEcon - liberty) + (liberty - authority) + (authority - rightEcon) + (rightEcon - liberty) + (authority - leftEcon)) / 6)
  }

  const getExpansiveness = (data) => {
    const rightEcon = data.find(d => d.text === "right-economics").value;
    const leftEcon = data.find(d => d.text === "left-economics").value;
    const authority = data.find(d => d.text === "authority-respecting").value;
    const liberty = data.find(d => d.text === "liberty-loving").value;
    const allPossibleAnswers = testData.reduce((answers, question) => answers + question.answers.length, 0);
    return (rightEcon + leftEcon + authority + liberty) / allPossibleAnswers;
  }

  const goToResults = async (e) => {
    e.preventDefault()
    const quadrantMetrics = [...metricsSections]
    const diversitySections = cloneDeep(metricsSections)
    const lowAwareness = {};
    let skipped = 0;
    allAnswers.forEach((list, testIndex) => {
      if (list.length) { // list of answers
        const answers = testData[testIndex].answers.filter(ans => list.includes(ans.label));
        answers.forEach(ans => {
          const index = quadrantMetrics.findIndex(sec => sec.text === ans.weight.result);
          if (index >= 0) {
            // we are not assigning the weight any specific values (for now)
            quadrantMetrics[index].value += 1;
            diversitySections[index].value += 1;
          }
        })
      } else {
        // “Low awareness” of a topic is displayed when a user selects “Don’t know / Skip” for 3 or more questions in that topic, e.g. national security.
        skipped += 1;
        if (lowAwareness[testData[testIndex].category]) {
          lowAwareness[testData[testIndex].category] += 1;
        } else {
          lowAwareness[testData[testIndex].category] = 1;
        }
      }
    })

    if (skipped >= testData.length / 2) {
      setSkippedLimit(true)
      return;
    }

    const diversity = getAbsoluteDifference(diversitySections)
    const expansiveness = getExpansiveness(diversitySections)

    // eslint-disable-next-line no-param-reassign
    quadrantMetrics.forEach(metric => metric.value /= testData.length);

    sendEvent(EVENT_TYPES.SUBMIT_TEST, {
      results: allAnswers,
      metrics: quadrantMetrics,
      diversity,
      expansiveness,
      version,
    })

    await localStorage.setItem("plural_politics_version", version); // sets test to complete
    await localStorage.setItem("plural_politics_diversity", diversity);
    await localStorage.setItem("plural_politics_metrics", JSON.stringify(quadrantMetrics));
    await localStorage.setItem("plural_politics_low_awareness", JSON.stringify(lowAwareness));
    await localStorage.setItem("plural_politics_expansiveness", expansiveness);

    await database.saveResults(version, diversity, expansiveness, quadrantMetrics, allAnswers)
    history.push({pathname: "/results", metrics: quadrantMetrics})
  }

  const onCheck = (list) => {
    setIsSkipped(false)
    const newAllAnswers = [...allAnswers]
    setCheckedList(list.sort())
    newAllAnswers[currentQuestionIndex] = list.sort();
    setAllAnswers(newAllAnswers);
    saveDataToLocalStorage(newAllAnswers);
  }

  const onCheckDontKnow = () => {
    setIsSkipped(true);
    // uncheck current list
    const newAllAnswers = [...allAnswers]
    setCheckedList([])
    newAllAnswers[currentQuestionIndex] = [];
    setAllAnswers(newAllAnswers);
    saveDataToLocalStorage(newAllAnswers);
  }

  return (
    <div className={styles.root}>
        {!skipLimitHit && <Title className={styles["question-count"]}>Question {currentQuestionIndex + 1} of {testData.length}</Title>}
        {skipLimitHit && 
          <div>
            <Paragraph>You have skipped too many questions to get accurate results!</Paragraph>
            <Button onClick={undoSkip} icon={<CaretLeftOutlined />}>Go Back</Button>
          </div>
        }
        {!skipLimitHit && testData[currentQuestionIndex] && 
          <>        
          <Paragraph>
          {testData[currentQuestionIndex].text}
          </Paragraph>
          <Paragraph className={styles["choose-i-dont-know"]}>You can choose none if you don&rsquo;t know</Paragraph>
          
          <Checkbox.Group
              id={`Checkbox-Group-${currentQuestionIndex}`}
              options={testData[currentQuestionIndex].answers}
              value={checkedList}
              onChange={onCheck}
          />
          <Checkbox
            id={`Checkbox-Group-${currentQuestionIndex}-dont-know`}
            checked={isSkipped}
            onChange={onCheckDontKnow}
          >Skip</Checkbox>
          <Button.Group className={styles["nav-btn-group"]}>
              <Button type="primary" className="round nav-btn" disabled={!currentQuestionIndex} onClick={goToPreviousQuestion}>Previous</Button>
              <Progress style={{padding: "0 40px"}} trailColor="white" percent={percent} showInfo={false} />
              {currentQuestionIndex < testData.length - 1 &&
                <Button type="primary" className="round nav-btn" disabled={!checkedList.length && !isSkipped} onClick={goToNextQuestion}>
                  Next
                </Button>}
              {currentQuestionIndex === testData.length - 1 && <Button disabled={!checkedList.length && !isSkipped} type="primary" className="round nav-btn" onClick={goToResults}>See Results</Button>}
          </Button.Group>
          </>
        }
    </div>
  )
}

TestComponent.propTypes = {}
TestComponent.defaultProps = {}

export default TestComponent
