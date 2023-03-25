import React from 'react'
import {RoughNotation} from 'react-rough-notation'
import {Typography, Layout, Collapse} from 'antd'

import styles from '../faq/faq.module.scss'

const { Content } = Layout
const { Panel } = Collapse
const {Title, Paragraph} = Typography

const WhoMadeTheTest = <div>
  <Paragraph className={styles.paragraph}>I’m Nate Coffman. I’m an American, aged 26, from Pennsylvania, living in Washington, D.C. where I work for the U.S. government. This test is a personal project.</Paragraph>
  <Paragraph className={styles.paragraph}>I’m involved with a few projects re improving the quality of politics and governance in the U.S. and elsewhere, including <a target="_blank" rel="noreferrer" href="https://www.thereconstitution.com/">The Reconstitution</a> & <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCIuhGOD1cknRPV3HymQQhpA">Meta-Ideological Politics</a>. You can follow me on Twitter <a target="_blank" rel="noreferrer" href="https://twitter.com/nate_coffman">here</a> & consider becoming a patron <a target="_blank" rel="noreferrer" href="http://patreon.com/natecoffman">here</a>.</Paragraph>
  <Paragraph className={styles.paragraph}>I have a bachelors of science in political science & psychology & I owe my ability to make this test to my thesis advisor, the excellent Dr. Lydia Eckstein. If I did it right, it’s her doing. If I did it wrong, it’s mine.</Paragraph>
</div>

const WhatMakesYouAnAuthority = <div>
  <Paragraph className={styles.paragraph}>I’m a pragmatist so if the test works, that’s authoritative enough. Furthermore, I made a pretty concerted effort to be as empirically rigorous as possible & demonstrate the internal consistency of test items (unlike other tests of this ilk). Take a look at the <a target="_blank" rel="noreferrer" href="https://firebasestorage.googleapis.com/v0/b/plural-politics.appspot.com/o/Whitepaper%20-%20Plural%20Politics.pdf?alt=media&token=23406b66-17b4-4d06-9a58-2e8c388a3949">whitepaper</a> for some empiricism.</Paragraph>
  <Paragraph className={styles.paragraph}>By the way, if you’re doing a project and want to check whether your scales are internally consistent, I recommend using <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ANxZRi_achQ">this as a guide</a>. This guy gives a good explanation about alpha scores and how to do what I did without needing statistical analysis software. You can use Excel or Google Sheets.</Paragraph>
  <Paragraph className={styles.paragraph}>Also, I remain super open to criticism, suggestions, complaints, loose thoughts, etc. Please get in touch if you think I can improve this thing somehow.</Paragraph>
</div>

const HowIsThisDifferent = <div>
  <Paragraph className={styles.paragraph}>I’ll refer you to the <a target="_blank" rel="noreferrer" href="/about">About page</a> for the story there. I go into some depth about the why of this project & how exactly it differs from the Political Compass. Note: the test is really quite different from and isn’t an adoption or adaptation of the Political Compass. (Please don’t sue me, copyright lawyers.)</Paragraph>
</div>

const DoYouCollectAnyInfo = <div>
  <Paragraph className={styles.paragraph}>Yeah, a little bit. To give accurate secondary information I have to know what everyone is scoring. Your final score is all I’m collecting, though. No individual answers or anything else about you & yours.</Paragraph>
</div>

const WhyDontOptOut = <div>
  <Paragraph className={styles.paragraph}>I wish I could but if I did it would skew the sample pretty significantly because certain sorts of people are more willing to opt in than others. The scores would be drastically less representative. It kinda has to be all or none.</Paragraph>
</div>

const Bias = <div>
  <Paragraph className={styles.paragraph}>Yeah there is. These categories are uniquely salient to Westerners & specifically Americans. You can’t really escape some degree of particularism.</Paragraph>
  <Paragraph className={styles.paragraph}>I did my best to be objective, though. Especially with the authority-respecting scale, I tried to avoid strawmanning systems that are more authoritarian than the U.S.’s liberal-democratic system. The Political Compass most definitely strawmans authoritarians.</Paragraph>
  <Paragraph className={styles.paragraph}>Granted, I expect a fair degree of relevance in other contexts but one can never make simple translations between different cultures & national situations. This is a limitation of the test.</Paragraph>
</div>

const TestChanges = <div>
  <Paragraph className={styles.paragraph}>Yeah, some probably will. When I update it, I’ll check the construct validity of the new or altered statements just like I did with the original ones. You can check when I last updated the test at the bottom of the site. Also, I think I’ll eventually add a fifth & maybe a sixth metric.</Paragraph>
</div>

const Language = <div>
  <Paragraph className={styles.paragraph}>Not yet but I want to translate it into as many languages as possible. If you can do that (as in, you’re a bonafide translator) or you know someone who can, please contact me.</Paragraph>
</div>

const CanIUse = <div>
  <Paragraph className={styles.paragraph}>In the sense of using the test on this website as part of your class, your team meeting, your high school reunion, your bar mitzvah, your intervention, your funeral ceremony, etc. etc., yeah of course.</Paragraph>
  <Paragraph className={styles.paragraph}>In the sense of adopting or adapting the test without getting authorization from me, nope you can’t because it’s copyrighted.</Paragraph>
</div>

const ArtWork = <div>
  <Paragraph className={styles.paragraph}>The artwork on the front page was made by Emmanuel Lafont, a wonderful artist who graciously let me use his work for free. Check out his work on <a target="_blank" rel="noreferrer" href="http://www.emmanuellafont.com/">his website</a> & <a target="_blank" rel="noreferrer" href="https://www.instagram.com/emmanuellafont/?hl=en">Instagram</a>. The Plural Politics logo was made by my brother, Nick Coffman, a brilliant graphic designer & brand marketing specialist. Here’s his <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nickcoffman-/">LinkedIn</a>.</Paragraph>
</div>

const Website = <div>
  <Paragraph style={{"paddingBottom": "100px"}} className={styles.paragraph}>The design elements were made by Kiana Azimi, a very capable & responsive graphic designer. Here’s her <a target="_blank" rel="noreferrer" href="https://dribbble.com/KianaAz&sa=D">Dribble</a> & <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/kianaaz">Fiverr page</a>. The programming elements were done by Sarah Hubschman, who’s a top-tier software engineer & game developer as well as a terrifically generous human being. Here is <a target="_blank" rel="noreferrer" href="https://www.sarahhubschman.com/">her website</a>.</Paragraph>
</div>

const About = () =>  (
    <Layout className={styles.faq}>
      <Content>
        <Title><RoughNotation animate animationDelay="1000" show type="underline" color="#c4742d" strokeWidth={3}>Frequently Asked Questions</RoughNotation></Title>
        <div className={styles["mobile-content"]}>
          <Collapse defaultActiveKey={['1']} ghost>
            <Panel className={styles.header} header={<Title level={4}>Who made the test?</Title>} key="1">
              {WhoMadeTheTest}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>What makes you an authority?</Title>} key="1">
              {WhatMakesYouAnAuthority}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>How is this different from the Political Compass?</Title>} key="1">
              {HowIsThisDifferent}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Do you collect any information?</Title>} key="1">
              {DoYouCollectAnyInfo}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Why don’t you let people opt in or out of information collection?</Title>} key="1">
              {WhyDontOptOut}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Isn’t there a bias toward Western frames and U.S. concerns?</Title>} key="1">
              {Bias}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Will the statements in the test change with the times?</Title>} key="1">
              {TestChanges}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Can I take the test in another language?</Title>} key="1">
              {Language}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Can I use this for [x, y, z]?</Title>} key="1">
              {CanIUse}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Who made the artwork?</Title>} key="1">
              {ArtWork}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Who built the website?</Title>} key="1">
              {Website}
            </Panel>
          </Collapse>
        </div>

        <div className={styles["desktop-content"]}>
          <Title className={styles.header} level={2}>Who made the test?</Title>
          {WhoMadeTheTest}
          <Title className={styles.header} level={2}>What makes you an authority?</Title>
          {WhatMakesYouAnAuthority}
          <Title className={styles.header} level={2}>How is this different from the Political Compass?</Title>
          {HowIsThisDifferent}
          <Title className={styles.header} level={2}>Do you collect any information?</Title>
          {DoYouCollectAnyInfo}
          <Title className={styles.header} level={2}>Why don’t you let people opt in or out of information collection?</Title>
          {WhyDontOptOut}
          <Title className={styles.header} level={2}>Isn’t there a bias toward Western frames and U.S. concerns?</Title>
          {Bias}
          <Title className={styles.header} level={2}>Will the statements in the test change with the times?</Title>
          {TestChanges}
          <Title className={styles.header} level={2}>Can I take the test in another language?</Title>
          {Language}
          <Title className={styles.header} level={2}>Can I use this for [x, y, z]?</Title>
          {CanIUse}
          <Title className={styles.header} level={2}>Who made the artwork?</Title>
          {ArtWork}
          <Title className={styles.header} level={2}>Who built the website?</Title>
          {Website}
        </div>    
      </Content>
    </Layout>
  )

export default About
