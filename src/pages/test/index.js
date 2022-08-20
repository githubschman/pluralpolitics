/* eslint-disable no-unreachable */
import React, {useState, useEffect} from 'react'
import { Spin } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import TestComponent from '../../components/TestComponent'
import database from '../../utils/database'
import Results from '../results' // should be component... or add retake 
import styles from './test.module.scss'

const Test = () => {
  const [captchaComplete, setCaptchaComplete] = useState(false);
  const [testData, setTestData] = useState(null)
  const [testVersion, setTestVersion] = useState(null)
  const [alreadyTookTest, setAlreadyTookTest] = useState(false)
  const [testInProgress, setTestInProgress] = useState(false)

  const onCaptcha = () => {
    setCaptchaComplete(true);
  }

  const scrambleAndSetTest = (data) => {
    const newData = [...data]
    newData.forEach(question => {
      // eslint-disable-next-line no-param-reassign
      question.answers = question.answers.sort(() => (Math.random() > .5) ? 1 : -1)
    })
    setTestData(newData)
  }

  const setupTestVersion = async () => {
    await database.getTestVersion(setTestVersion);
  }

  useEffect(() => {
    const answersInProgress = localStorage.getItem("plural_politics_answers");
    const testInProgressStorage = answersInProgress ? JSON.parse(answersInProgress) : []

    setupTestVersion()

    if (testInProgressStorage.length) {
      setTestInProgress(true)
    }
  }, [])

  useEffect(() => {
    if (captchaComplete || testInProgress) {
      database.getTestData(scrambleAndSetTest);
    }
  }, [captchaComplete, testInProgress])

  useEffect(() => {
    // version not set in localstorage until test is submitted
    const lastTestVersion = localStorage.getItem("plural_politics_version");
    if (lastTestVersion && lastTestVersion === testVersion) {
      setAlreadyTookTest(true);
    }

  }, [testVersion])

  const retakeTest = () => {
    localStorage.removeItem("plural_politics_version");
    localStorage.removeItem("plural_politics_cqi");
    localStorage.removeItem("plural_politics_answers");
    localStorage.removeItem("plural_politics_metrics");
    localStorage.removeItem("plural_politics_low_awareness");
    localStorage.removeItem("plural_politics_expansiveness");
    localStorage.removeItem("plural_politics_diversity");
    setAlreadyTookTest(false);
  }

  if (captchaComplete && !testData) {
    return (
      <div className={styles['center-container']}><Spin size="large" /></div>
    )
  }

  if (!captchaComplete && !alreadyTookTest && !testInProgress) {
    return (
      <div className={styles['center-container']}>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onCaptcha}
        />
      </div>
    )
  }

  return (
    <div className={styles.root}>
      {alreadyTookTest &&
        <div>
          <Results retake={retakeTest} />
        </div>}
      {(captchaComplete || testInProgress) && !alreadyTookTest && testData && <TestComponent testData={testData} version={testVersion} />}
    </div>
  )
}

Test.propTypes = {}
Test.defaultProps = {}

export default Test
