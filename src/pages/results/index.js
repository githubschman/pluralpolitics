import React, { useEffect, useState } from 'react'
import { Typography, Layout, Button, Collapse } from 'antd'
import { RedoOutlined } from '@ant-design/icons'
import { RoughNotation } from 'react-rough-notation'
import { Redirect, useHistory } from 'react-router-dom'
import PieChart from '../../components/PieChart'
import ShareModal from '../../components/Share'
import {
  expansivenessLevels,
  expansivenessInfo,
  viewpointDiversityLevels,
  viewpointDiversityInfo,
  labels,
  labelInfo,
} from './resultsData'
import styles from './results.module.scss'
import resultStyles from '../expand/readingMaterial.module.scss'
import {
  infoContentTitle,
  infoContent,
} from '../../components/PieChart/PieChartInfo'

const { Panel } = Collapse
const { Paragraph, Title } = Typography
const { Content } = Layout

const Results = () => {
  const history = useHistory()
  const retakeTest = async () => {
    await localStorage.removeItem('plural_politics_version')
    await localStorage.removeItem('plural_politics_cqi')
    await localStorage.removeItem('plural_politics_answers')
    await localStorage.removeItem('plural_politics_metrics')
    await localStorage.removeItem('plural_politics_low_awareness')
    await localStorage.removeItem('plural_politics_expansiveness')
    await localStorage.removeItem('plural_politics_diversity')
    await localStorage.removeItem('plural_politics_test')
    await localStorage.removeItem('recommended_reading_material')
    history.push('/test')
    history.go(0) // TODO: fix this...
  }

  const [data, setData] = useState([])
  const [diversityLevel, setViewpointDiversityLevel] = useState('')
  const [expansiveness, setExpansiveness] = useState('')
  const [label, setLabel] = useState('')
  const [readingMaterialState, setReadingMaterialState] = useState()

  useEffect(() => {
    const readingMaterial = JSON.parse(
      localStorage.getItem('recommended_reading_material'),
    )
    setReadingMaterialState(readingMaterial)
    const storedMetrics = localStorage.getItem('plural_politics_metrics')

    const storedExpansiveness = localStorage.getItem(
      'plural_politics_expansiveness',
    )
    const storedDiversity = localStorage.getItem('plural_politics_diversity')

    if (storedMetrics) {
      const metricsData = JSON.parse(storedMetrics)
      setData(metricsData)
    } else {
      // will redirect
      setData(null)
      return
    }

    // set diversity
    if (storedDiversity) {
      if (storedDiversity <= 1.5) {
        setViewpointDiversityLevel(viewpointDiversityLevels[0])
      } else if (storedDiversity <= 3) {
        setViewpointDiversityLevel(viewpointDiversityLevels[1])
      } else if (storedDiversity <= 4.5) {
        setViewpointDiversityLevel(viewpointDiversityLevels[2])
      } else if (storedDiversity >= 6) {
        setViewpointDiversityLevel(viewpointDiversityLevels[3])
      }
    }

    // See if the user has "strong" politics towards one area individually
    // if so, update the expansiveness terminology
    const expansivenessStrength = JSON.parse(storedMetrics).filter(
      (d) => d.value >= 0.7,
    )

    if (storedExpansiveness >= 0.83) {
      setExpansiveness(expansivenessLevels[3]) // very strong
    } else if (expansivenessStrength.length > 0) {
      const maxVal = Math.max(...expansivenessStrength.map((d) => d.value))
      if (maxVal >= 0.7) {
        setExpansiveness('Strong')
      }
    } else if (storedExpansiveness <= 0.33) {
      setExpansiveness(expansivenessLevels[0]) // very moderate
    } else if (storedExpansiveness <= 0.66) {
      setExpansiveness(expansivenessLevels[1]) // moderate
    } else if (storedExpansiveness <= 0.82) {
      setExpansiveness(expansivenessLevels[2]) // strong
    }

    if (storedExpansiveness && storedDiversity) {
      const exLabel =
        // eslint-disable-next-line no-nested-ternary
        expansivenessStrength.length > 0
          ? 'Strong'
          : storedExpansiveness > 0.7
          ? 'Strong'
          : 'Moderate'
      const divLabel = storedDiversity >= 3 ? 'Exclusive' : 'Eclectic'
      setLabel(labels[`${exLabel} ${divLabel}`])
    }
  }, [])

  const goToDiscord = () => {
    window.open('https://discord.com/invite/e2JuZYZmyF')
  }

  if (!data) {
    return <Redirect to="/test" />
  }

  return (
    <Layout className={styles.root}>
      {data.length > 0 && (
        <Content className={styles['chart-data']}>
          <div className={styles['button-container-mobile']}>
            <div className={styles['button-container']}>
              <ShareModal
                diversityLevel={diversityLevel}
                expansiveness={expansiveness}
                label={label}
              />
              <Button
                type="primary"
                className={styles['results-btn']}
                style={{ marginLeft: '10px' }}
                onClick={goToDiscord}
              >
                Join the Discord
              </Button>
              <Button
                className={styles['results-btn']}
                style={{ marginLeft: '10px' }}
                icon={<RedoOutlined />}
                onClick={retakeTest}
              >
                Retake Test
              </Button>
            </div>
          </div>
          <div className={styles['chart-content-mobile']}>
            <div className={styles['chart-container-mobile']}>
              <div className={styles['chart-mobile']}>
                <PieChart
                  data={data}
                  width={175}
                  height={175}
                  innerRadius={0}
                  outerRadius={100}
                  translateX={70}
                  translateY={87}
                />
              </div>
            </div>
          </div>
          <Paragraph
            style={{ marginTop: '3rem' }}
            className={styles['results-header']}
          >
            You are
            {['a', 'e', 'i', 'o', 'u'].map(
              (val) => val === label.charAt(0).toLowerCase(),
            )
              ? ' an'
              : ' a'}
            :{' '}
            <span className={styles['annotate-title-mobile']}>
              <span className={styles['results-bold']}>{label}</span>
            </span>
            &nbsp;&nbsp;&nbsp;
            <RoughNotation
              className={styles['annotate-title-desktop']}
              animate
              animationDelay="1000"
              show
              type="box"
              color="#0d5089"
              strokeWidth={3}
            >
              <span className={styles['results-bold']}>{label}</span>
            </RoughNotation>
          </Paragraph>
          <Paragraph className={styles['hover-explanation-desktop']}>
            {labelInfo[label]}
          </Paragraph>
          <Collapse defaultActiveKey={['1']} ghost>
            <Panel
              className={styles['hover-explanation-mobile']}
              header={
                <Title level={4}>
                  You are{' '}
                  {label
                    .charAt(0)
                    .toLowerCase()
                    .includes(['a', 'e', 'i', 'o', 'u'])
                    ? 'an'
                    : 'a'}{' '}
                  {label}
                </Title>
              }
              key="1"
            >
              <Paragraph className={styles['hover-explanation-mobile']}>
                {labelInfo[label]}
              </Paragraph>
            </Panel>
          </Collapse>

          <Paragraph className={styles['results-header']}>
            Your politics are:{' '}
            <span className={styles['annotate-title-mobile']}>
              <span className={styles['results-bold']}>{expansiveness}</span>
            </span>
            &nbsp;&nbsp;
            <RoughNotation
              className={styles['annotate-title-desktop']}
              animate
              animationDelay="1000"
              show
              type="box"
              color="#0d5089"
              strokeWidth={3}
            >
              <span className={styles['results-bold']}>{expansiveness}</span>
            </RoughNotation>
          </Paragraph>
          <Paragraph className={styles['hover-explanation-desktop']}>
            {expansivenessInfo[expansiveness]}
          </Paragraph>
          <Collapse defaultActiveKey={['1']} ghost>
            <Panel
              className={styles['hover-explanation-mobile']}
              header={
                <Title level={4}>Your politics are: {expansiveness}</Title>
              }
              key="1"
            >
              <Paragraph className={styles['hover-explanation-mobile']}>
                {expansivenessInfo[expansiveness]}
              </Paragraph>
            </Panel>
          </Collapse>

          <Paragraph className={styles['results-header']}>
            Your viewpoint diversity is:{' '}
            <span className={styles['annotate-title-mobile']}>
              <span className={styles['results-bold']}>{diversityLevel}</span>
            </span>
            &nbsp;&nbsp;&nbsp;
            <RoughNotation
              className={styles['annotate-title-desktop']}
              animate
              animationDelay="1000"
              show
              type="box"
              color="#0d5089"
              strokeWidth={3}
            >
              <span className={styles['results-bold']}>{diversityLevel}</span>
            </RoughNotation>
          </Paragraph>
          <Paragraph className={styles['hover-explanation-desktop']}>
            {viewpointDiversityInfo[diversityLevel]}
          </Paragraph>
          <Collapse defaultActiveKey={['1']} ghost>
            <Panel
              className={styles['hover-explanation-mobile']}
              header={
                <Title level={4}>
                  Your viewpoint diversity is: {diversityLevel}
                </Title>
              }
              key="1"
            >
              <Paragraph className={styles['hover-explanation-mobile']}>
                {viewpointDiversityInfo[diversityLevel]}
              </Paragraph>
            </Panel>
          </Collapse>

          <div className={styles['quadrant-explanation-mobile']}>
            <Collapse ghost>
              {infoContent.map((info, i) => (
                <Panel
                  className={styles['hover-explanation-mobile']}
                  header={
                    <Title level={4}>
                      What does {infoContentTitle[i]} mean?
                    </Title>
                  }
                  key={infoContentTitle[i]}
                >
                  <Paragraph className={styles['hover-explanation-mobile']}>
                    {info}
                  </Paragraph>
                </Panel>
              ))}
            </Collapse>
          </div>
          {readingMaterialState.length > 0 && (
            <div className={styles['reading-material-mobile']}>
              <div className={styles['material-text']}>
                <span>
                  Here’s some recommended reading material based on the areas
                  you may want to learn more about.
                </span>
              </div>
              <div className={styles['material-container-mobile']}>
                {readingMaterialState.map(({ bucket, material }) => (
                  <div
                    key={bucket}
                    className={styles['material-expanded-mobile']}
                  >
                    <Collapse ghost>
                      <Panel
                        className={styles.header}
                        header={<Title level={4}>{bucket}</Title>}
                      >
                        {material.map(
                          ({ author, title, description, href }) => (
                            <ul key={title}>
                              <li>
                                <Paragraph>
                                  {author === '' ? '' : `${author} - `}
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={href}
                                  >
                                    {title}
                                  </a>
                                </Paragraph>
                                <Paragraph
                                  className={resultStyles['expand-info']}
                                >
                                  {description}
                                </Paragraph>
                              </li>
                            </ul>
                          ),
                        )}
                      </Panel>
                    </Collapse>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Content>
      )}
      {data.length > 0 && (
        <Content className={[styles['chart-content']]}>
          <div className={styles['button-container-desktop']}>
            <div className={styles['button-container']}>
              <ShareModal
                diversityLevel={diversityLevel}
                expansiveness={expansiveness}
                label={label}
              />
              <Button
                type="primary"
                className={styles['results-btn']}
                style={{ marginLeft: '10px' }}
                onClick={goToDiscord}
              >
                Join the Discord
              </Button>
              <Button
                className={styles['results-btn']}
                style={{ marginLeft: '10px' }}
                icon={<RedoOutlined />}
                onClick={retakeTest}
              >
                Retake Test
              </Button>
            </div>
          </div>
          <div className={styles['chart-container-desktop']}>
            <div className={styles['chart-desktop']}>
              <PieChart
                data={data}
                width={300}
                height={300}
                innerRadius={0}
                outerRadius={175}
                translateX={130}
                translateY={150}
              />
              <Paragraph className={styles['hover-subtitle']}>
                Hover over your chart for more details
              </Paragraph>
            </div>
          </div>
          {readingMaterialState.length > 0 && (
            <div className={styles['reading-material']}>
              <Title level={5}>
                Here’s some recommended reading material based on the areas you
                may want to learn more about.
              </Title>
              {readingMaterialState.map(({ bucket, material }) => (
                <div key={bucket} className={styles['material-expanded']}>
                  <Collapse ghost>
                    <Panel
                      className={styles.header}
                      header={<Title level={4}>{bucket}</Title>}
                    >
                      {material.map(({ author, title, description, href }) => (
                        <ul key={title}>
                          <li>
                            <Paragraph>
                              {author === '' ? '' : `${author} - `}
                              <a target="_blank" rel="noreferrer" href={href}>
                                {title}
                              </a>
                            </Paragraph>
                            <Paragraph className={resultStyles['expand-info']}>
                              {description}
                            </Paragraph>
                          </li>
                        </ul>
                      ))}
                    </Panel>
                  </Collapse>
                </div>
              ))}
            </div>
          )}
        </Content>
      )}
    </Layout>
  )
}

export default Results
