/* eslint-disable no-unreachable */
import cloneDeep from 'lodash/cloneDeep'
import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'
import { useHistory } from 'react-router-dom'
import TestComponent from '../../components/TestComponent'
import database from '../../utils/database'
import styles from './test.module.scss'

const Test = () => {
  const history = useHistory()
  const [captchaComplete, setCaptchaComplete] = useState(false)
  const [testData, setTestData] = useState(null)
  const [testVersion, setTestVersion] = useState(null)
  const [alreadyTookTest, setAlreadyTookTest] = useState(false)
  const [testInProgress, setTestInProgress] = useState(false)

  const scrambleAndSetTest = (data) => {
    const newData = cloneDeep(data)
    const scrambledQuestions = newData.sort(() =>
      Math.random() > 0.5 ? 1 : -1,
    )
    setTestData(scrambledQuestions)
    localStorage.setItem(
      'plural_politics_test',
      JSON.stringify(scrambledQuestions),
    )
  }

  const setupTestVersion = async () => {
    await database.getTestVersion(setTestVersion)
  }

  useEffect(() => {
    const answersInProgress = localStorage.getItem('plural_politics_answers')
    const testInProgressStorage = answersInProgress
      ? JSON.parse(answersInProgress)
      : []

    setupTestVersion()

    if (testData && testInProgressStorage.length < testData.length) {
      setTestInProgress(true)
    }
  }, [])

  useEffect(() => {
    const savedTest = localStorage.getItem('plural_politics_test')
    if (savedTest) {
      const savedTestData = JSON.parse(savedTest)
      setTestData(savedTestData)
    } else {
      database.getTestData(scrambleAndSetTest)
    }
  }, [captchaComplete, testInProgress])

  useEffect(() => {
    // version not set in local storage until test is submitted
    const lastTestVersion = localStorage.getItem('plural_politics_version')
    if (lastTestVersion && lastTestVersion === testVersion) {
      setAlreadyTookTest(true)
    } else if (lastTestVersion) {
      setCaptchaComplete(true)
    }
  }, [testVersion])

  if (!testData) {
    return (
      <div className={styles['center-container']}>
        <Spin size="large" />
      </div>
    )
  }

  if (alreadyTookTest) {
    history.push('/results')
  }

  return (
    <div className={styles.root}>
      {(testInProgress || !alreadyTookTest) && testData && (
        <TestComponent testData={testData} version={testVersion} />
      )}
    </div>
  )
}

export default Test
