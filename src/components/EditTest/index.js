/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/no-array-index-key */
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

import debounce from 'lodash/debounce';
import {
    Form,
    Input,
    Button,
    Spin,
  } from 'antd';
import TestComponent from '../TestComponent'
import {questionTemplate, answerTemplate} from '../../utils/template'

import database from '../../utils/database'

  const EditTest = () => {
    const [form] = Form.useForm();
    const [testVersion, setTestVersion] = useState(null)
    const [testData, setTestData] = useState(null)
    const history = useHistory()

    const updateTestData = (updatedTestData) => {
      setTestData(updatedTestData)
    }

    const updateAnswerText = (e) => {
      if (!e.target) {
        return;
      }
      const questionIndex = e.target.getAttribute("data-question-index");
      const answerIndex = e.target.getAttribute("data-answer-index");
      const field = e.target.getAttribute("data-field");
      const subfield = e.target.getAttribute("data-sub-field");
      const {value} = e.target;
      const updatedTestData = [...testData]
      if (!subfield) {
        updatedTestData[questionIndex].answers[answerIndex][field] = value
        // update the value as well
        if (field === "label") {
          updatedTestData[questionIndex].answers[answerIndex].value = value
        }
      } else {
        updatedTestData[questionIndex].answers[answerIndex][field][subfield] = value
      }
      updateTestData(updatedTestData)
    }

    const debounceUpdateAnswerData = debounce(updateAnswerText, 300)

    const updateQuestionField = (e) => {
      const questionIndex = e.target.getAttribute("data-question-index");
      const field = e.target.getAttribute("data-field");
      const {value} = e.target;
      const updatedTestData = [...testData]
      updatedTestData[questionIndex][`${field}`] = value
      updateTestData(updatedTestData)
    }

    const debounceUpdateQuestionData = debounce(updateQuestionField, 300)
  
    const addQuestion = () => {
      const updatedTestData = [...testData]
      updatedTestData.push(questionTemplate)
      updateTestData(updatedTestData)
    }

    const addAnswer = (questionIndex) => {
      const updatedTestData = [...testData]
      if (updatedTestData[questionIndex].answers) {
        updatedTestData[questionIndex].answers.push(answerTemplate)
      } else {
        updatedTestData[questionIndex].answers = [answerTemplate]
      }
      updateTestData(updatedTestData)
    }

    const goToTest = () => {
      history.push('/test')
    }

    const updateTestInDb = () => {
      database.updateTestData(testData, goToTest);
    }

    useEffect(() => {
      database.getTestData(setTestData)
      // TODO: loading
    }, [])

    useEffect(() => {
      database.getTestVersion(setTestVersion)
    }, [])

    useEffect(() => {
      // TODO: loading
      form.resetFields()
  }, [testData])

  const updateTestVersion= (e) => {
    e.preventDefault();
    const {value} = e.target;
    setTestVersion(value);
  }
  const debounceUpdateTestVersion = debounce(updateTestVersion, 300)

  const updateTestVersionInDb = () => database.updateTestVersion(testVersion)
    if (!testData) {
      return <Spin size="large" />
    }

    return (
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={testData}
          form={form}
        >
        <Input
            name="test-version"
            data-field="test-version"
            label="test-version"
            defaultValue={testVersion || ""} 
            onChange={debounceUpdateTestVersion} 
          />
          <Button onClick={updateTestVersionInDb}>Update Test Version</Button>
          {testData && testData.length > 0 && testData.map((question, i) => (
            <Form.Item key={`editing-question-${i}`}>
              <h1>Question #{i + 1}</h1>
              <Form.Item shouldUpdate label="Version" >
                <Input
                  name={`question-version-${i}`}
                  data-field="version"
                  data-question-index={i}
                  label="version"
                  required
                  defaultValue={question.version || ""} 
                  onChange={debounceUpdateQuestionData} 
                />
              </Form.Item>
              <Form.Item shouldUpdate label="Question Text">
                <Input
                  name={`question-text-${i}`}
                  data-field="text"
                  data-question-index={i}
                  required
                  defaultValue={question.text || ""} 
                  onChange={debounceUpdateQuestionData} 
                />
              </Form.Item>
              <Form.Item shouldUpdate label="Question Category">
                <Input
                  name={`question-category-${i}`}
                  data-field="category"
                  data-question-index={i}
                  required
                  defaultValue={question.category || ""} 
                  onChange={debounceUpdateQuestionData} 
                />
              </Form.Item>
              <Form.Item>
               {question.answers.map((answer, j) => (
                 <Form.Item key={`question-${i}-answer-${j}`} label={`Answer #${j + 1}`}>
                 <Form.Item shouldUpdate label="Answer Text" >
                   <Input
                      name={`question-label-${i}-${j}`}
                      data-question-index={i}
                      data-answer-index={j}
                      data-field="label"
                      onChange={debounceUpdateAnswerData}
                      required
                      defaultValue={answer.label || ""}
                    />
                 </Form.Item>
                 <Form.Item shouldUpdate label="Version" >
                    <Input
                      name={`question-version-${i}-${j}`}
                      data-question-index={i}
                      data-answer-index={j}
                      data-field="version"
                      onChange={debounceUpdateAnswerData} 
                      label="version" 
                      required 
                      defaultValue={answer.version || ""} 
                    />
                 </Form.Item>
                 <Form.Item shouldUpdate label="weight">
                    <Input
                     name={`question-weight-result-${i}-${j}`}
                      data-question-index={i}
                      data-answer-index={j}
                      data-field="weight"
                      data-sub-field="result"
                      onChange={debounceUpdateAnswerData} 
                      label="Answer result" 
                      required 
                      defaultValue={answer.weight.result || ""} 
                    />
                    <Input
                      name={`question-weight-number-${i}-${j}`}
                      data-question-index={i}
                      data-answer-index={j}
                      data-field="weight"
                      data-sub-field="number"
                      onChange={debounceUpdateAnswerData} 
                      label="Weight" 
                      defaultValue={answer.weight.number || 1} 
                    />
                  </Form.Item>
                 </Form.Item>
               ))}
               <Button onClick={() => addAnswer(i)}>Add an answer</Button>
              </Form.Item>
            </Form.Item>
          ))}
          <Form.Item>
            <Button onClick={addQuestion}>Add a question</Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={updateTestInDb} type="primary">Submit</Button>
          </Form.Item>
        </Form>
        <h1>Preview</h1>
        {testData && <TestComponent testData={testData} />}
      </div>
    );
};

export default EditTest
  