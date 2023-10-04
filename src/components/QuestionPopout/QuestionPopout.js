import { Button } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import styles from './questionPopout.module.scss'

const QuestionPopout = ({ allAnswers, setCurrentQuestionIndex }) => {
  const [collasped, setCollasped] = useState(true)
  const screenWidth = window.innerWidth

  const toggleCollasp = () => {
    setCollasped(!collasped)
  }

  useEffect(() => {
    if (screenWidth > 1300) {
      setCollasped(false)
    }
  }, [])

  return (
    <div className={styles.root}>
      <div>
        <Button type="secondary" onClick={toggleCollasp}>
          {collasped ? (
            <span>
              My Answers
              <ArrowRightOutlined />
            </span>
          ) : (
            <ArrowLeftOutlined />
          )}
        </Button>
      </div>
      <div
        style={collasped ? { width: '0' } : { width: '15rem' }}
        className={styles['question-container']}
      >
        {allAnswers.length > 0 ? (
          allAnswers.map(({ answer }, i) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={i + 1}
              tabIndex="-1"
              role="button"
              onKeyPress={(e) =>
                e.key === 'Enter' && setCurrentQuestionIndex(i)
              }
              onClick={() => setCurrentQuestionIndex(i)}
              className={styles['question-links']}
            >
              <h6>Question {i + 1}</h6>
              <p>{answer}</p>
            </div>
          ))
        ) : (
          <p className={styles['answers-placeholder']}>No Answers Yet</p>
        )}
      </div>
      {screenWidth < 768 && collasped === false && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          onClick={() => setCollasped(true)}
          className={styles['mobil-mask']}
        />
      )}
    </div>
  )
}

export default QuestionPopout
