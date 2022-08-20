/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import { Typography, Layout, Button, Popover, Collapse } from 'antd'
import { RedoOutlined } from '@ant-design/icons'
import {RoughNotation} from 'react-rough-notation'
import { Redirect } from 'react-router-dom'
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

const { Panel } = Collapse
const {Paragraph, Title} = Typography
const {Content} = Layout

export const metricsSections = [
  {
    value: 0,
    text: "authority-respecting",
    label: "Authority-Respecting",
  },
  {
    value: 0,
    text: "right-economics",
    label: "Right Economics",
  },
  {
    value: 0,
    text: "left-economics",
    label: "Left Economics",
  },
  {
    value: 0,
    text: "liberty-loving",
    label: "Liberty-Loving",
  },
]



const Results = ({retake}) => {

  // const location = useLocation()
  const [data, setData] = useState([])
  const [lowAwareness, setLowAwareness] = useState([])
  const [lowAppreciation, setLowAppreciation] = useState([])
  const [diversityLevel, setViewpointDiversityLevel] = useState('')
  const [expansiveness, setExpansiveness] = useState('')
  const [label, setLabel] = useState('')

  useEffect(() => {
    const storedMetrics = localStorage.getItem("plural_politics_metrics")
    const storedLowAwareness = localStorage.getItem("plural_politics_low_awareness")
    const storedExpansiveness = localStorage.getItem("plural_politics_expansiveness")
    const storedDiversity = localStorage.getItem("plural_politics_diversity")

    if (storedMetrics) {
      const metricsData = JSON.parse(storedMetrics)
      setData(metricsData)
      const lowAppArr = Object.keys(metricsData).filter(key => metricsData[key].value < .3 ).map(key => metricsData[key].label)
      setLowAppreciation(lowAppArr)
    } else {
      // will redirect
      setData(null)
      return
    }

    if (storedLowAwareness) {
      const obj = JSON.parse(storedLowAwareness)
      const awarenessArr = Object.keys(obj).filter(key => obj[key] >= 3 )
      setLowAwareness(awarenessArr)
    }

    // set diversity
    if (storedDiversity) {
      if (storedDiversity <= .25) {
        setViewpointDiversityLevel(viewpointDiversityLevels[0])
      } else if (storedDiversity <= .5) {
        setViewpointDiversityLevel(viewpointDiversityLevels[1])
      } else if (storedDiversity <= .75) {
        setViewpointDiversityLevel(viewpointDiversityLevels[2])
      } else if (storedDiversity >= .76) {
        setViewpointDiversityLevel(viewpointDiversityLevels[3])
      }
    }

    if (storedExpansiveness) {
      if (storedDiversity <= .25) {
        setExpansiveness(expansivenessLevels[0])
      } else if (storedDiversity <= .50) {
        setExpansiveness(expansivenessLevels[1])
      } else if (storedDiversity <= .75) {
        setExpansiveness(expansivenessLevels[2])
      } else if (storedDiversity >= .76) {
        setExpansiveness(expansivenessLevels[3])
      }
    }

    if (storedExpansiveness && storedDiversity) {
      const exLabel = storedExpansiveness >= .5 ? 'Strong' : 'Moderate'
      const divLabel = storedDiversity <= .5 ? 'Exclusive' : 'Eclectic'
      setLabel(labels[`${exLabel} ${divLabel}`])
    }
    // "Moderate Eclectic": "Moderate Centrist",
    // "Strong Eclectic": "Expansive Pluralist",
    // "Moderate Exclusive": "Soft Ideologue",
    // "Strong Exclusive": "Hard Ideologue"
  }, [])

  const placement = ["leftTop", "rightTop", "leftBottom", "rightBottom"]

  const infoContent = [
    <div><span className={styles["bold-text"]}>Liberty-loving</span> refers to the quality of valuing rights, liberties, and the maximization of personal freedom. Liberty-loving people pursue social structures that encourage self-expression and self-authorship. Tolerance for people who hold different beliefs and have different lifestyles is also paramount.</div>,
    <div><span className={styles["bold-text"]}>Authority-respecting</span> refers to the quality of valuing rules and limitations set by governments and other institutions. Authority-respecting people are skeptical of the ability of ungoverned individuals to make good decisions for themselves and the collectives they’re part of. They believe people should be bound by certain external forces in order to be their best selves.</div>,
    <div><span className={styles["bold-text"]}>Left economics</span> refers to economic approaches that focus on achieving equality. These approaches are skeptical of the power of markets to shape equitable patterns of organization. As such, they advocate for alternate forces to counter market forces. These might include government entities, trade unions, workers’ councils, or cooperatives. Those on the economic left are often called “progressives” or, in the United States, “liberals.”</div>,
    <div><span className={styles["bold-text"]}>Right economics</span> refers to economic approaches that are confident about market forces to produce general prosperity. These approaches are skeptical of intervention by governments or other entities in the economy. Those on the right advocate for a hands-off approach by which capitalism is allowed to do its thing. They advocate for property rights, free markets, and free trade. Those on the economic right are often called “conservatives” or “libertarians.</div>,
  ]

  const infoContentTitle = ["Liberty-Loving", "Authority-Respecting", "Left Economics", "Right Economics"]


  const goToDiscord = () => {
    window.open("https://discord.com/invite/e2JuZYZmyF");
  }

  if (!data) {
    return <Redirect to="/test" />
  }

  //   {/* lowAppreciation.length > 0 && 
  //   <div>
  //     {lowAppreciation.map((topic) => <Paragraph key={topic}>Based on your <span className={styles["results-bold"]}>low appreciation</span> of <span className={styles["results-bold"]}>{topic}</span> may want to read up on: <a href="/">{topic}</a></Paragraph>)}
  //   </div>
  // */}
  // {/* lowAwareness.length > 0 && 
  //   <div>
  //     {lowAwareness.map((topic) => <Paragraph key={topic}>Based on your <span className={styles["results-bold"]}>low awareness</span> of <span className={styles["results-bold"]}>{topic}</span>, you may want to read up on: <a href="/">{topic}</a></Paragraph>)}
  //   </div>
  // */}

  return (
    <Layout className={styles.root}>
      {data.length > 0 &&
        <Content className={styles["chart-data"]}>
          <div className={styles["chart-container-mobile"]}>
            <div className={styles["chart-labels"]}>
              {data.map((d, i) => <Paragraph className={styles[`chart-label-${i}`]} key={d.label}>{d.label}</Paragraph>)}
            </div>
            <div className={styles["chart-lines"]}>
              {data.map((d, i) => <div className={styles[`line-${i}`]} key={`${d.label}-line`} />)}
            </div>
            <div className={styles["chart-mobile"]}>
              <PieChart 
                data={data}
                width={250}
                height={250}
                innerRadius={0}
                outerRadius={100}
                translateX={105}
                translateY={120}
                mobile
              />
            </div>
          </div>
          <div className={styles["button-container"]}>
            <ShareModal diversityLevel={diversityLevel} expansiveness={expansiveness} label={label} />
            <Button
              type="primary"
              className={styles["results-btn"]}
              style={{"marginLeft": "10px"}}
              onClick={goToDiscord}
            >
              Join the Discord
            </Button>
            {retake && 
              <Button
                className={styles["results-btn"]}
                style={{"marginLeft": "10px"}}
                icon={<RedoOutlined />}
                onClick={retake}
              >
                Retake Test
              </Button>
            }
          </div>

          <Paragraph className={styles["results-header"]}>You are a{label === 'Expansive Pluralist' ? 'n' : ''}: <span className={styles["annotate-title-mobile"]}><span className={styles["results-bold"]}>{label}</span></span>&nbsp;&nbsp;&nbsp;<RoughNotation className={styles["annotate-title-desktop"]} animate animationDelay="1000" show type="box" color="#0d5089" strokeWidth={3}><span className={styles["results-bold"]}>{label}</span></RoughNotation></Paragraph>
          {/* <Paragraph className={[styles["results-bold"], styles["hover-explanation-desktop"]]}>What does this mean?</Paragraph> */}
          <Paragraph className={styles["hover-explanation-desktop"]}>{labelInfo[label]}</Paragraph>
          <Collapse defaultActiveKey={['1']} ghost>
            <Panel className={styles["hover-explanation-mobile"]} header={<Title level={4}>You are a{label === 'Expansive Pluralist' ? 'n' : ''}: {label}</Title>} key="1">      
              <Paragraph className={styles["hover-explanation-mobile"]}>{labelInfo[label]}</Paragraph>
            </Panel>
          </Collapse>

          <Paragraph className={styles["results-header"]}>Your politics are: <span className={styles["annotate-title-mobile"]}><span className={styles["results-bold"]}>{expansiveness}</span></span>&nbsp;&nbsp;<RoughNotation className={styles["annotate-title-desktop"]} animate animationDelay="1000" show type="box" color="#0d5089" strokeWidth={3}><span className={styles["results-bold"]}>{expansiveness}</span></RoughNotation></Paragraph>
          {/* <Paragraph className={[styles["results-bold"], styles["hover-explanation-desktop"]]}>What does this mean?</Paragraph> */}
          <Paragraph className={styles["hover-explanation-desktop"]}>{expansivenessInfo[expansiveness]}</Paragraph>
          <Collapse ghost>
            <Panel className={styles["hover-explanation-mobile"]} header={<Title level={4}>Your politics are: {expansiveness}</Title>} key="1">      
              <Paragraph className={styles["hover-explanation-mobile"]}>{expansivenessInfo[expansiveness]}</Paragraph>
            </Panel>
          </Collapse>

          <Paragraph className={styles["results-header"]}>Your viewpoint diversity is: <span className={styles["annotate-title-mobile"]}><span className={styles["results-bold"]}>{diversityLevel}</span></span>&nbsp;&nbsp;&nbsp;<RoughNotation  className={styles["annotate-title-desktop"]} animate animationDelay="1000" show type="box" color="#0d5089" strokeWidth={3}><span className={styles["results-bold"]}>{diversityLevel}</span></RoughNotation></Paragraph>
          {/* <Paragraph className={[styles["results-bold"], styles["hover-explanation-desktop"]]}>What does this mean?</Paragraph> */}
          <Paragraph className={styles["hover-explanation-desktop"]}>{viewpointDiversityInfo[diversityLevel]}</Paragraph>
          <Collapse ghost>
            <Panel className={styles["hover-explanation-mobile"]} header={<Title level={4}>Your viewpoint diversity is: {diversityLevel}</Title>} key="1">      
              <Paragraph className={styles["hover-explanation-mobile"]}>{viewpointDiversityInfo[diversityLevel]}</Paragraph>
            </Panel>
          </Collapse>

          <div className={styles["quadrant-explanation-mobile"]}>
            <Collapse ghost>
              {infoContent.map((info, i) => (
                  <Panel className={styles["hover-explanation-mobile"]} header={<Title level={4}>What does {infoContentTitle[i]} mean?</Title>} key="1">      
                  <Paragraph className={styles["hover-explanation-mobile"]}>{info}</Paragraph>
                </Panel>
              ))}
            </Collapse>
          </div>
        </Content>
      }
      {data.length > 0 &&
        <Content className={[styles["chart-content"]]}>
          <div className={styles["chart-container-desktop"]}>
            <div className={styles["chart-labels"]}>
              {data.map((d, i) => <Paragraph className={styles[`chart-label-${i}`]} key={d.label}>{d.label}</Paragraph>)}
            </div>
            <div className={styles["chart-lines"]}>
              {data.map((d, i) =>
                  <Popover placement={placement[i]} content={infoContent[i]} trigger="hover">
                    <div className={styles[`line-${i}`]} key={`${d.label}-line`} />
                  </Popover>
                )
              }
           </div>
            <div className={styles["chart-desktop"]}>
              <PieChart 
                data={data}
                width={450}
                height={450}
                innerRadius={0}
                outerRadius={175}
                translateX={200}
                translateY={210}
              />
              <Paragraph className={styles["hover-subtitle"]}>Hover over your chart for more details</Paragraph>
            </div>
          </div>
        </Content>
      }
    </Layout>
  )
}

Results.propTypes = {}
Results.defaultProps = {}

export default Results
