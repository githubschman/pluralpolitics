/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import cloneDeep from 'lodash/cloneDeep'
import { CaretLeftOutlined } from '@ant-design/icons'
import { Button, Typography, Radio } from 'antd'
import { useHistory } from 'react-router-dom'
import ProgressBar from '../ProgressBar/ProgressBar'
import database from '../../utils/database'
import { sendEvent, EVENT_TYPES } from '../../utils/analytics'
import styles from './testcomponent.module.scss'
import { Modal } from '../Modal/Modal'
import {
  LeftEconomicsRM,
  RightEconomicsRM,
  AuthorityRespectingRM,
  LibertyLovingRM,
  ProgressiveRM,
  TraditionalRM,
  EconomicsRM,
  RaceAndEthnicityRM,
  HealthCareRM,
  EducationRM,
  NationalSecurityRM,
  InternationalRelationsRM,
} from '../../pages/expand/readingMaterialDirectory'
import '../../theme/core.scss'
import QuestionPopout from '../QuestionPopout/QuestionPopout'

export const categoryData = [
  {
    value: 0,
    text: 'economics',
    label: 'Economics',
    skipped: 0,
  },
  {
    value: 0,
    text: 'health',
    label: 'Health Care',
    skipped: 0,
  },
  {
    value: 0,
    text: 'international relations',
    label: 'International Relations',
    skipped: 0,
  },
  {
    value: 0,
    text: 'national security',
    label: 'National Security',
    skipped: 0,
  },
  {
    value: 0,
    text: 'education',
    label: 'Education',
    skipped: 0,
  },
  {
    value: 0,
    text: 'race',
    label: 'Race and Ethnicity',
    skipped: 0,
  },
]

export const metricsSections = [
  {
    value: 0,
    text: 'authority-respecting',
    label: 'Authority-Respecting',
    skipped: 0,
  },
  {
    value: 0,
    text: 'right-economics',
    label: 'Right Economics',
    skipped: 0,
  },
  {
    value: 0,
    text: 'left-economics',
    label: 'Left Economics',
    skipped: 0,
  },
  {
    value: 0,
    text: 'liberty-loving',
    label: 'Liberty-Loving',
    skipped: 0,
  },
  {
    value: 0,
    text: 'progressive',
    label: 'Progressive',
    skipped: 0,
  },
  {
    value: 0,
    text: 'traditional',
    label: 'Traditional',
    skipped: 0,
  },
]

const { Title, Paragraph } = Typography

const TestComponent = ({ testData, questionIndex, version }) => {
  const history = useHistory()
  const [percent, setPercent] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    questionIndex || 0,
  )
  const [currentAnswer, setCurrentAnswer] = useState()
  const [allAnswers, setAllAnswers] = useState([])
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [skipLimitHit, setSkippedLimit] = useState(false)
  const [isSkipped, setIsSkipped] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const quadrantMetrics = [...metricsSections]
  const categoryMetrics = [...categoryData]
  const diversitySections = cloneDeep(metricsSections)
  let skipped = 0
  const skippedIndex = []

  useEffect(() => {
    const storedIndex = localStorage.getItem('plural_politics_cqi')
    const storedAnswers = localStorage.getItem('plural_politics_answers')
    const storedIndexInt = parseInt(storedIndex, 10)
    const storedAnswersArr = JSON.parse(storedAnswers)

    if (storedIndexInt >= 0) {
      setCurrentQuestionIndex(storedIndexInt)
    }
    if (storedAnswersArr) {
      setAllAnswers(storedAnswersArr)
    }
  }, [])

  const saveDataToLocalStorage = (newAllAnswers) => {
    localStorage.setItem(
      'plural_politics_answers',
      JSON.stringify(newAllAnswers),
    )
  }

  useEffect(() => {
    // set setCurrentQuestionIndex by local storage
    setSelectedAnswers(allAnswers[currentQuestionIndex] || [])
    setPercent(Math.floor((allAnswers.length / testData.length) * 100))
    // set whether too many questions have been skipped
    if (skipped >= testData.length / 2) {
      setSkippedLimit(true)
    }
  }, [allAnswers, currentQuestionIndex])

  // sets number of questions skipped
  allAnswers.forEach((answer, i) => {
    if (answer?.answer === 'skipped') {
      skipped += 1
      skippedIndex.push(i)
    }
  })

  const goToNextQuestion = () => {
    if (currentQuestionIndex < testData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      localStorage.setItem('plural_politics_cqi', currentQuestionIndex + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const undoSkip = () => {
    allAnswers[allAnswers.length - 1].answer = ''
    setCurrentQuestionIndex(allAnswers.length - 1)
    setSkippedLimit(false)
  }

  const getAbsoluteDifference = (data) => {
    const dataArray = data.map((val) => val.value)
    const n = dataArray.length
    const mean = dataArray.reduce((a, b) => a + b) / n

    return Math.sqrt(
      dataArray.map((x) => (x - mean) ** 2).reduce((a, b) => a + b) / n,
    )
  }

  const getExpansiveness = (data) => {
    const rightEcon = data.find((d) => d.text === 'right-economics').value
    const leftEcon = data.find((d) => d.text === 'left-economics').value
    const authority = data.find((d) => d.text === 'authority-respecting').value
    const liberty = data.find((d) => d.text === 'liberty-loving').value
    const progressive = data.find((d) => d.text === 'progressive').value
    const traditional = data.find((d) => d.text === 'traditional').value
    return (
      (rightEcon + leftEcon + authority + liberty + progressive + traditional) /
      72
    )
  }

  const goToResults = async (e) => {
    e.preventDefault()
    const lowAwareness = {}
    const readingMaterial = []

    allAnswers.forEach((answer, testIndex) => {
      const questionBucket = testData[testIndex].bucket
      const questionCategory = testData[testIndex].category

      if (answer?.answer === 'skipped') {
        const categoryIndex = categoryMetrics.findIndex(
          (sec) => sec.text === questionCategory,
        )
        const quadrantIndex = quadrantMetrics.findIndex(
          (sec) => sec.text === questionBucket,
        )
        skipped += 1
        quadrantMetrics[quadrantIndex].skipped += 1
        categoryData[categoryIndex].skipped += 1

        if (lowAwareness[testData[testIndex].category]) {
          lowAwareness[testData[testIndex].category] += 1
        } else {
          lowAwareness[testData[testIndex].category] = 1
        }
      } else if (answer?.answer === 'Lean Yes') {
        const index = quadrantMetrics.findIndex(
          (sec) => sec.text === questionBucket,
        )

        if (index >= 0) {
          // we are not assigning the weight any specific values (for now)
          quadrantMetrics[index].value += 1
          diversitySections[index].value += 1
        }
      }
    })

    if (metricsSections[0].skipped >= 3) {
      readingMaterial.push({
        bucket: metricsSections[0].label,
        material: AuthorityRespectingRM,
      })
    }

    if (metricsSections[1].skipped >= 3) {
      readingMaterial.push({
        bucket: metricsSections[1].label,
        material: RightEconomicsRM,
      })
    }

    if (metricsSections[2].skipped >= 3) {
      readingMaterial.push({
        bucket: metricsSections[2].label,
        material: LeftEconomicsRM,
      })
    }

    if (metricsSections[3].skipped >= 3) {
      readingMaterial.push({
        bucket: metricsSections[3].label,
        material: LibertyLovingRM,
      })
    }

    if (metricsSections[4].skipped >= 3) {
      readingMaterial.push({
        bucket: metricsSections[4].label,
        material: ProgressiveRM,
      })
    }

    if (metricsSections[5].skipped >= 3) {
      readingMaterial.push({
        bucket: metricsSections[5].label,
        material: TraditionalRM,
      })
    }

    if (categoryData[0].skipped >= 3) {
      readingMaterial.push({
        bucket: categoryData[0].label,
        material: EconomicsRM,
      })
    }

    if (categoryData[1].skipped >= 3) {
      readingMaterial.push({
        bucket: categoryData[1].label,
        material: HealthCareRM,
      })
    }

    if (categoryData[2].skipped >= 3) {
      readingMaterial.push({
        bucket: categoryData[2].label,
        material: InternationalRelationsRM,
      })
    }

    if (categoryData[3].skipped >= 3) {
      readingMaterial.push({
        bucket: categoryData[3].label,
        material: NationalSecurityRM,
      })
    }

    if (categoryData[4].skipped >= 3) {
      readingMaterial.push({
        bucket: categoryData[4].label,
        material: EducationRM,
      })
    }

    if (categoryData[5].skipped >= 3) {
      readingMaterial.push({
        bucket: categoryData[5].label,
        material: RaceAndEthnicityRM,
      })
    }

    localStorage.setItem(
      'recommended_reading_material',
      JSON.stringify(readingMaterial),
    )

    const diversity = getAbsoluteDifference(diversitySections)
    const expansiveness = getExpansiveness(diversitySections)

    // eslint-disable-next-line no-param-reassign
    quadrantMetrics.forEach((metric) => (metric.value /= 12))

    sendEvent(EVENT_TYPES.SUBMIT_TEST, {
      results: allAnswers,
      metrics: quadrantMetrics,
      diversity,
      expansiveness,
      version,
    })

    localStorage.setItem('plural_politics_version', version) // sets test to complete
    // sets test to complete
    localStorage.setItem('plural_politics_diversity', diversity)
    localStorage.setItem(
      'plural_politics_metrics',
      JSON.stringify(quadrantMetrics),
    )
    localStorage.setItem(
      'plural_politics_low_awareness',
      JSON.stringify(lowAwareness),
    )
    localStorage.setItem('plural_politics_expansiveness', expansiveness)

    database.saveResults(
      version,
      diversity,
      expansiveness,
      quadrantMetrics,
      allAnswers,
    )
    history.push({ pathname: '/results', metrics: quadrantMetrics })
  }

  const onCheck = (answer, category, bucket) => {
    setIsSkipped(false)
    const newAllAnswers = [...allAnswers]
    setCurrentAnswer(answer)
    newAllAnswers[currentQuestionIndex] = { answer, category, bucket }
    setAllAnswers(newAllAnswers)
    saveDataToLocalStorage(newAllAnswers)
  }

  const onCheckDontKnow = (answer, category, bucket) => {
    setIsSkipped(true)
    const newAllAnswers = [...allAnswers]
    setCurrentAnswer(answer)
    newAllAnswers[currentQuestionIndex] = { answer, category, bucket }
    setAllAnswers(newAllAnswers)
    saveDataToLocalStorage(newAllAnswers)
  }

  const radioButtonStyles = {
    margin: '.5rem 1rem',
    borderRadius: '.5rem',
  }

  return (
    <>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <div className={styles.root}>
        {!skipLimitHit && (
          <>
            <div className={styles['question-menu']}>
              <QuestionPopout
                allAnswers={allAnswers}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
              />
            </div>
            <div className={styles['question-header']}>
              <ProgressBar
                style={{ border: '1px solid black', margin: '0 2rem' }}
                width={percent}
              />
              <Title className={styles['question-count']}>
                Question {currentQuestionIndex + 1}
              </Title>
            </div>
          </>
        )}
        {skipLimitHit && (
          <div className={styles['skip-limit-page']}>
            <Paragraph>
              You have skipped too many questions to get accurate results!
            </Paragraph>
            <Button onClick={undoSkip} icon={<CaretLeftOutlined />}>
              Go Back
            </Button>
            <Paragraph>Or revisit a previously skipped question.</Paragraph>
            <div className={styles['skip-page-skipped-questions']}>
              {skippedIndex.map((val) => (
                <Button
                  onClick={() => {
                    allAnswers[allAnswers.length - 1].answer = ''
                    setCurrentQuestionIndex(val)
                    setSkippedLimit(false)
                  }}
                  key={val}
                >
                  Question {val + 1}
                </Button>
              ))}
            </div>
          </div>
        )}
        {!skipLimitHit && testData[currentQuestionIndex] && (
          <>
            <Paragraph>
              <div className={styles['question-container']}>
                {testData[currentQuestionIndex].text}
              </div>
            </Paragraph>
            <Radio.Group
              value={selectedAnswers.answer}
              size="large"
              buttonStyle="solid"
            >
              <Radio.Button
                id={`radio-group-${currentQuestionIndex}`}
                value={testData[currentQuestionIndex].answers[1].value}
                onChange={(e) => {
                  onCheck(
                    e.target.value,
                    testData[currentQuestionIndex].category,
                    testData[currentQuestionIndex].bucket,
                  )
                }}
                onClick={
                  currentQuestionIndex === testData.length - 1
                    ? null
                    : goToNextQuestion
                }
                style={radioButtonStyles}
              >
                {testData[currentQuestionIndex].answers[1].label}
              </Radio.Button>
              <Radio.Button
                id={`radio-group-${currentQuestionIndex}`}
                value={testData[currentQuestionIndex].answers[0].value}
                onChange={(e) => {
                  onCheck(
                    e.target.value,
                    testData[currentQuestionIndex].category,
                    testData[currentQuestionIndex].bucket,
                  )
                }}
                onClick={
                  currentQuestionIndex === testData.length - 1
                    ? null
                    : goToNextQuestion
                }
                style={radioButtonStyles}
              >
                {testData[currentQuestionIndex].answers[0].label}
              </Radio.Button>
              <Radio.Button
                id={`radio-group-${currentQuestionIndex}-dont-know`}
                checked={isSkipped}
                value="skipped"
                onChange={(e) => {
                  onCheckDontKnow(
                    e.target.value,
                    testData[currentQuestionIndex].category,
                    testData[currentQuestionIndex].bucket,
                  )
                }}
                onClick={
                  currentQuestionIndex === testData.length - 1
                    ? null
                    : goToNextQuestion
                }
                style={radioButtonStyles}
              >
                Skip
              </Radio.Button>
            </Radio.Group>
            <Button.Group className={styles['nav-btn-group']}>
              <Button
                type="primary"
                className="round nav-btn"
                disabled={!currentQuestionIndex}
                onClick={goToPreviousQuestion}
                style={{
                  visibility: currentQuestionIndex > 0 ? 'visible' : 'hidden',
                }}
              >
                Previous
              </Button>
              {currentQuestionIndex < allAnswers.length - 2 && (
                <Button
                  type="primary"
                  className="round nav-btn"
                  onClick={() => setCurrentQuestionIndex(allAnswers.length - 1)}
                >
                  Last
                </Button>
              )}
              {currentQuestionIndex === testData.length - 1 && (
                <Button
                  disabled={allAnswers.length !== testData.length && !isSkipped}
                  type="primary"
                  className="round nav-btn"
                  onClick={goToResults}
                >
                  See Results
                </Button>
              )}
            </Button.Group>
          </>
        )}
      </div>
    </>
  )
}

export default TestComponent
