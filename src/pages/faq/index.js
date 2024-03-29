import React, { useState } from 'react'
import { RoughNotation } from 'react-rough-notation'
import { Typography, Layout, Collapse, Modal, Image } from 'antd'
import { Link } from 'react-router-dom'
import { images } from '../../assets'

import styles from './faq.module.scss'

const { Content } = Layout
const { Panel } = Collapse
const { Title, Paragraph } = Typography

const WhoMadeTheTest = (
  <div>
    <Paragraph className={styles.paragraph}>
      I’m Nate Coffman. I’m an American from Pennsylvania living in Washington,
      D.C. where I work for the U.S. government. This test is a personal
      project. It’s not affiliated with any shareholders, investors, political
      parties, or interest groups.
    </Paragraph>
    <Paragraph className={styles.paragraph}>
      You can follow me on Twitter{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/nate_coffman"
      >
        here
      </a>{' '}
      & consider becoming a patron{' '}
      <a target="_blank" rel="noreferrer" href="http://patreon.com/natecoffman">
        here
      </a>
      .
    </Paragraph>
    <Paragraph className={styles.paragraph}>
      I have a bachelors of science in political science & psychology & I owe my
      ability to make this test to my thesis advisor, the excellent Dr. Lydia
      Eckstein. If I did it right, it’s her doing. If I did it wrong, it’s mine.
    </Paragraph>
    <Paragraph className={styles.paragraph}>
      In one way or another this project was contributed to also by the
      following: Sarah Hubschman, Ari Allen, Nick Roush, Ryan Nakade, Brett
      Zicari, Nick Coffman, & the members of the{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://discord.com/invite/e2JuZYZmyF"
      >
        Plural Politics Discord group
      </a>
      .
    </Paragraph>
  </div>
)

const WhatMakesYouAnAuthority = (
  <div>
    <Paragraph className={styles.paragraph}>
      I’m a pragmatist so if the test works, that’s authoritative enough.
      Furthermore, I made a pretty concerted effort to be as empirically
      rigorous as possible & demonstrate the internal consistency of test items
      (unlike other tests of this ilk). Take a look at the{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://firebasestorage.googleapis.com/v0/b/plural-politics.appspot.com/o/Whitepaper%20-%20Plural%20Politics.pdf?alt=media&token=e3278e92-d0a4-4af3-9545-570a287d9148"
      >
        whitepaper
      </a>{' '}
      for some empiricism.
    </Paragraph>
    <Paragraph className={styles.paragraph}>
      By the way, if you’re doing a project and want to check whether your
      scales are internally consistent, I recommend using{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/watch?v=ANxZRi_achQ"
      >
        this as a guide
      </a>
      . This guy gives a good explanation about alpha scores and how to do what
      I did without needing statistical analysis software. You can use Excel or
      Google Sheets.
    </Paragraph>
    <Paragraph className={styles.paragraph}>
      Also, I remain super open to criticism, suggestions, complaints, loose
      thoughts, etc. Please get in touch if you think I can improve this thing
      somehow.
    </Paragraph>
  </div>
)

const HowIsThisDifferent = (
  <div>
    <Paragraph className={styles.paragraph}>
      I’ll refer you to the{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://firebasestorage.googleapis.com/v0/b/plural-politics.appspot.com/o/Whitepaper%20-%20Plural%20Politics.pdf?alt=media&token=e3278e92-d0a4-4af3-9545-570a287d9148"
      >
        whitepaper
      </a>{' '}
      for the story there. I go into some depth about the why of this project &
      how exactly it differs from the Political Compass. Note: the test is
      really quite different from and isn’t an adoption or adaptation of the
      Political Compass. (Please don’t sue me, copyright lawyers.)
    </Paragraph>
  </div>
)

const DoYouCollectAnyInfo = (
  <div>
    <Paragraph className={styles.paragraph}>
      Only a little bit, and nothing personally identifying. Please see the
      <Link to="/privacy"> Privacy Notice</Link> for further information.
    </Paragraph>
  </div>
)

const Bias = (
  <div>
    <Paragraph className={styles.paragraph}>
      Yeah there is. These categories are uniquely salient to Westerners &
      specifically Americans. You can’t really escape some degree of
      particularism.
    </Paragraph>
    <Paragraph className={styles.paragraph}>
      I did my best to be objective, though. Especially with the
      authority-respecting scale, I tried to avoid strawmanning systems that are
      more authoritarian than the U.S.’s liberal-democratic system. The
      Political Compass most definitely strawmans authoritarians.
    </Paragraph>
    <Paragraph className={styles.paragraph}>
      Granted, I expect a fair degree of relevance in other contexts but one can
      never make simple translations between different cultures & national
      situations. This is a limitation of the test.
    </Paragraph>
  </div>
)

const TestChanges = (
  <div>
    <Paragraph className={styles.paragraph}>
      Yeah, some probably will. When I update it, I’ll check the construct
      validity of the new or altered statements just like I did with the
      original ones. You can check when I last updated the test at the bottom of
      the site.
    </Paragraph>
  </div>
)

const Language = (
  <div>
    <Paragraph className={styles.paragraph}>
      Not yet but I want to translate it into as many languages as possible. If
      you can do that (as in, you’re a bonafide translator) or you know someone
      who can, please contact me.
    </Paragraph>
  </div>
)

const CanIUse = (
  <div>
    <Paragraph className={styles.paragraph}>
      In the sense of using the test on this website as part of your class, your
      team meeting, your high school reunion, your bar mitzvah, your
      intervention, your funeral ceremony, etc. etc., yeah of course.
    </Paragraph>
    <Paragraph className={styles.paragraph}>
      In the sense of adopting or adapting the test without getting
      authorization from me, nope you can’t because it’s copyrighted.
    </Paragraph>
  </div>
)

const ArtWork = (
  <div>
    <Paragraph className={styles.paragraph}>
      The Plural Politics logo was made by my brother, Nick Coffman, a brilliant
      graphic designer & brand marketing specialist. Here’s his{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/nickcoffman-/"
      >
        LinkedIn
      </a>
      .
    </Paragraph>
  </div>
)

const Website = (
  <div>
    <Paragraph className={styles.paragraph}>
      The design elements were made by Kiana Azimi, a very capable & responsive
      graphic designer. Here’s her{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://dribbble.com/KianaAz&sa=D"
      >
        Dribble
      </a>{' '}
      &{' '}
      <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/kianaaz">
        Fiverr page
      </a>
      . The programming elements were done by Sarah Hubschman, who’s a top-tier
      software engineer & game developer as well as a terrifically generous
      human being. Here is{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.sarahhubschman.com/"
      >
        her website
      </a>
      . Version 2 was programmed by Nick Roush, an excellent programmer who
      adeptly grasped the thrust of the project and carried it to the next
      level. Here’s his{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://nicholasroush.github.io/portfolio/"
      >
        website.
      </a>
    </Paragraph>
  </div>
)

const TooModerate = (
  <div>
    <Paragraph className={styles.paragraph}>
      Version 2 contains a few more extreme statements than version 1 did. But
      from a scoring point of view, it’s a delicate balance. If too many extreme
      statements are added, then it becomes about “how extreme are you?” rather
      than “what are your dispositions?” The idea is really to determine which
      ways & how thoroughly you lean regardless of how far you lean. I’ve tried
      to write statements that can be projected toward the extremes. In other
      words, I hope that none are exclusively centrist. So, for example, a
      card-carrying communist should score very high in left economics (as one
      would expect) even though only a couple of the statements go that far.
    </Paragraph>
  </div>
)

const BiasedOrPartisan = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div>
      <Paragraph
        style={{ paddingBottom: '100px' }}
        className={styles.paragraph}
      >
        I’m a person with my own views of course.{' '}
        <span
          onClick={showModal}
          onKeyDown={showModal}
          role="button"
          tabIndex={0}
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
        >
          Here are my results.
        </span>{' '}
        I’ve tried to be objective. People on the left sometimes say the test
        has a right-wing bias. Right-wingers sometimes say it has a left-wing
        bias. This tells me it’s relatively well calibrated & folks tend to{' '}
        exaggerate the ubiquity of what they oppose.
      </Paragraph>
      <Modal
        centered
        destroyOnClose
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Image src={images.testResults} alt="test results">
          Sorry, This image is currently unavailable.
        </Image>
      </Modal>
    </div>
  )
}

const FAQ = () => (
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
          Frequently Asked Questions
        </RoughNotation>
      </Title>
      <div className={styles['mobile-content']}>
        <Collapse defaultActiveKey={['1']} ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Who made the test?</Title>}
            key="1"
          >
            {WhoMadeTheTest}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>What makes you an authority?</Title>}
            key="1"
          >
            {WhatMakesYouAnAuthority}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={
              <Title level={4}>
                How is this different from the Political Compass?
              </Title>
            }
            key="1"
          >
            {HowIsThisDifferent}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Do you collect any information?</Title>}
            key="1"
          >
            {DoYouCollectAnyInfo}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={
              <Title level={4}>
                Isn’t there a bias toward Western frames and U.S. concerns?
              </Title>
            }
            key="1"
          >
            {Bias}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={
              <Title level={4}>
                Will the statements in the test change with the times?
              </Title>
            }
            key="1"
          >
            {TestChanges}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={
              <Title level={4}>Can I take the test in another language?</Title>
            }
            key="1"
          >
            {Language}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Can I use this for [x, y, z]?</Title>}
            key="1"
          >
            {CanIUse}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Who made the artwork?</Title>}
            key="1"
          >
            {ArtWork}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={<Title level={4}>Who built the website?</Title>}
            key="1"
          >
            {Website}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={
              <Title level={4}>
                Why aren’t there more radical views? This test is too moderate!
              </Title>
            }
            key="1"
          >
            {TooModerate}
          </Panel>
        </Collapse>
        <Collapse ghost>
          <Panel
            className={styles.header}
            header={
              <Title level={4}>Is the testmaker biased or partisan?</Title>
            }
            key="1"
          >
            <BiasedOrPartisan />
          </Panel>
        </Collapse>
      </div>

      <div className={styles['desktop-content']}>
        <Title className={styles.header} level={2}>
          Who made the test?
        </Title>
        {WhoMadeTheTest}
        <Title className={styles.header} level={2}>
          What makes you an authority?
        </Title>
        {WhatMakesYouAnAuthority}
        <Title className={styles.header} level={2}>
          How is this different from the Political Compass?
        </Title>
        {HowIsThisDifferent}
        <Title className={styles.header} level={2}>
          Do you collect any information?
        </Title>
        {DoYouCollectAnyInfo}
        <Title className={styles.header} level={2}>
          Isn’t there a bias toward Western frames and U.S. concerns?
        </Title>
        {Bias}
        <Title className={styles.header} level={2}>
          Will the statements in the test change with the times?
        </Title>
        {TestChanges}
        <Title className={styles.header} level={2}>
          Can I take the test in another language?
        </Title>
        {Language}
        <Title className={styles.header} level={2}>
          Can I use this for [x, y, z]?
        </Title>
        {CanIUse}
        <Title className={styles.header} level={2}>
          Who made the artwork?
        </Title>
        {ArtWork}
        <Title className={styles.header} level={2}>
          Who built the website?
        </Title>
        {Website}
        <Title className={styles.header} level={2}>
          Why aren’t there more radical views? This test is too moderate!
        </Title>
        {TooModerate}
        <Title className={styles.header} level={2}>
          Is the testmaker biased or partisan?
        </Title>
        <BiasedOrPartisan />
      </div>
    </Content>
  </Layout>
)

export default FAQ
