import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import { Typography, Layout, Collapse } from 'antd'
import {
  LeftEconomics,
  RightEconomics,
  AuthorityRespecting,
  LibertyLoving,
  Progressive,
  Traditional,
  Economics,
  RaceAndEthnicity,
  HealthCare,
  Education,
  NationalSecurity,
  InternationalRelations,
  PluralPoliticsResearch,
} from './readingMaterial'
import styles from '../faq/faq.module.scss'

const { Content } = Layout
const { Panel } = Collapse
const { Title, Paragraph } = Typography

const Expand = () => (
  <Layout className={styles.faq}>
    <Content>
      <Title>
        <RoughNotation
          animate
          animationDelay="1000"
          show
          type="underline"
          color="#c4742d"
          strokeWidth={3}
        >
          Expand
        </RoughNotation>
      </Title>
      <div className={styles.header}>
        <div
          className={styles['expand-opening']}
          style={{ marginBottom: '80px' }}
        >
          <Paragraph>
            This is where you’ll find informational material covering the &nbsp;
            <RoughNotation
              className={styles['annotate-title-desktop']}
              animate
              animationDelay="2000"
              show
              type="highlight"
              color="#2ddfd4"
              strokeWidth={0.5}
            >
              six “ideologies”
            </RoughNotation>
            &nbsp; that make up your results. You’ll also find links to
            resources for the &nbsp;
            <RoughNotation
              className={styles['annotate-title-desktop']}
              animate
              animationDelay="2000"
              show
              type="highlight"
              color="#2ddfd4"
              strokeWidth={1.2}
            >
              six topic areas
            </RoughNotation>
            &nbsp; that are currently covered in the test. Below that, I link my
            own &nbsp;
            <RoughNotation
              className={styles['annotate-title-desktop']}
              animate
              animationDelay="2000"
              show
              type="highlight"
              color="#2ddfd4"
              strokeWidth={1}
            >
              research,
            </RoughNotation>
            &nbsp; which I produce using data collected from everyone’s results.
          </Paragraph>
        </div>
      </div>

      <Title level={2} className={styles['expand-sub-header']}>
        <RoughNotation
          animate
          animationDelay="1000"
          show
          type="underline"
          color="#c4742d"
          strokeWidth={3}
        >
          The Ideologies
        </RoughNotation>
      </Title>

      <div className={styles['mobile-content']}>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Left Economics</Title>}
            key="1"
          >
            {LeftEconomics}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Right Economics</Title>}
            key="1"
          >
            {RightEconomics}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Authority-Respecting</Title>}
            key="1"
          >
            {AuthorityRespecting}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Liberty-Loving</Title>}
            key="1"
          >
            {LibertyLoving}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Progressive</Title>}
            key="1"
          >
            {Progressive}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Traditional</Title>}
            key="1"
          >
            {Traditional}
          </Panel>
        </Collapse>
      </div>

      <div className={styles['desktop-content']}>
        <Title className={styles.header} level={2}>
          Left Economics
        </Title>
        {LeftEconomics}
        <Title className={styles.header} level={2}>
          Right Economics
        </Title>
        {RightEconomics}
        <Title className={styles.header} level={2}>
          Authority-Respecting
        </Title>
        {AuthorityRespecting}
        <Title className={styles.header} level={2}>
          Liberty-Loving
        </Title>
        {LibertyLoving}
        <Title className={styles.header} level={2}>
          Progressive
        </Title>
        {Progressive}
        <Title className={styles.header} level={2}>
          Traditional
        </Title>
        {Traditional}
      </div>

      <Title
        className={styles['expand-sub-header']}
        style={{ marginTop: '50px', marginBottom: '80px' }}
        level={2}
      >
        <RoughNotation
          animate
          animationDelay="1000"
          show
          type="underline"
          color="#c4742d"
          strokeWidth={3}
        >
          The Topic Areas
        </RoughNotation>
      </Title>
      <div className={styles['desktop-content']}>
        <Title className={styles.header} level={2}>
          Economics
        </Title>
        {Economics}
        <Title className={styles.header} level={2}>
          Race and Ethnicity
        </Title>
        {RaceAndEthnicity}
        <Title className={styles.header} level={2}>
          Healthcare
        </Title>
        {HealthCare}
        <Title className={styles.header} level={2}>
          Education
        </Title>
        {Education}
        <Title className={styles.header} level={2}>
          National Security
        </Title>
        {NationalSecurity}
        <Title className={styles.header} level={2}>
          International Relations
        </Title>
        {InternationalRelations}
      </div>

      <div className={styles['mobile-content']}>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Economics</Title>}
            key="1"
          >
            {Economics}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Race and Ethnicity</Title>}
            key="1"
          >
            {RaceAndEthnicity}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Healthcare</Title>}
            key="1"
          >
            {HealthCare}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Education</Title>}
            key="1"
          >
            {Education}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>National Security</Title>}
            key="1"
          >
            {NationalSecurity}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>International Relations</Title>}
            key="1"
          >
            {InternationalRelations}
          </Panel>
        </Collapse>
      </div>

      <Title level={2} className={styles['expand-sub-header']}>
        <RoughNotation
          animate
          animationDelay="1000"
          show
          type="underline"
          color="#c4742d"
          strokeWidth={3}
        >
          Plural Politics Research
        </RoughNotation>
      </Title>
      <div className={styles['desktop-content']}>{PluralPoliticsResearch}</div>
      <div className={styles['mobile-content']}>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Research Topics</Title>}
            key="1"
          >
            {PluralPoliticsResearch}
          </Panel>
        </Collapse>
      </div>
    </Content>
  </Layout>
)

export default Expand
