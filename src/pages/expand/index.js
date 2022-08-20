import React from 'react'
import {RoughNotation} from 'react-rough-notation'
import {Typography, Layout, Collapse} from 'antd'

import styles from '../faq/faq.module.scss'

const { Content } = Layout
const { Panel } = Collapse
const {Title, Paragraph} = Typography

const LeftEconomics = <div className={styles.section}>
  <ul>
      <li>
        <Paragraph>Karl Marx and Friedrich Engels, <a target="_blank" rel="noreferrer" href="https://thecharnelhouse.org/wp-content/uploads/2019/02/Marx-Engels-Reader.pdf">The Marx-Engels Reader</a></Paragraph>
        <Paragraph className={styles["expand-info"]}>1867 - The foundational critique of capitalism from the POV of “dialectical materialism”</Paragraph>
      </li>
      <li>
        <Paragraph>Henry George, <a target="_blank" rel="noreferrer" href="https://cdn.mises.org/Progress%2520and%2520Poverty_3.pdf">Progress and Poverty</a></Paragraph>
        <Paragraph className={styles["expand-info"]}>1879 - An analysis of poverty and ways to eradicate it</Paragraph>
      </li>
      <li>
        <Paragraph>John Maynard Keynes, The General Theory of Employment, <a target="_blank" rel="noreferrer" href="https://www.files.ethz.ch/isn/125515/1366_KeynesTheoryofEmployment.pdf">Interest and Money</a></Paragraph>
        <Paragraph className={styles["expand-info"]}>1936 - The book that emboldened governments to intervene in the economy after the Great Depression</Paragraph>
      </li>
      <li>
        <Paragraph>Ha-Joon Chang, <a target="_blank" rel="noreferrer" href="https://analepsis.files.wordpress.com/2011/08/ha-joon-chang-bad-samaritans.pdf">Bad Samaritans</a></Paragraph>
        <Paragraph className={styles["expand-info"]}>2007 - A critique of free-market policies in development economics</Paragraph>
      </li>
      <li>
        <Paragraph>Richard Wolff, <a target="_blank" rel="noreferrer" href="https://www.simonandschuster.com/books/Capitalism-Hits-the-Fan/Richard-D-Wolff/9781566569361">Capitalism Hits the Fan</a></Paragraph>
        <Paragraph className={styles["expand-info"]}>2009 - A critique of capitalist practices leading to the Great Recession of 2007-9</Paragraph>
      </li>
      <li>
        <Paragraph>David Graeber, Debt, <a target="_blank" rel="noreferrer" href="https://warwick.ac.uk/fac/arts/english/currentstudents/undergraduate/modules/fulllist/special/statesofdamage/syllabus201516/graeber-debt_the_first_5000_years.pdf">The First 5,000 Years</a></Paragraph>
        <Paragraph className={styles["expand-info"]}>2011 - An anthropological study of debt and society</Paragraph>
      </li>
      <li>
        <Paragraph>Robert Reich, <a target="_blank" rel="noreferrer" href="https://www.penguinrandomhouse.com/books/564303/the-common-good-by-robert-b-reich/">The Common Good</a></Paragraph>
        <Paragraph className={styles["expand-info"]}>2019 - A call to renew collective morality from the former U.S. Secretary of Labor</Paragraph>
      </li>
      <li>
        <Paragraph>Stephanie Kelton, <a target="_blank" rel="noreferrer" href="https://www.publicaffairsbooks.com/titles/stephanie-kelton/the-deficit-myth/9781541736207/">The Deficit Myth</a></Paragraph>
        <Paragraph className={styles["expand-info"]}>2020 - The definitive defense of a radical new approach called Modern Monetary Theory</Paragraph>
      </li>
    </ul>
</div>

const RightEconoics = <div className={styles.section}>
  <ul>
    <li>
      <Paragraph>Fridriech Hayek, <a target="_blank" rel="noreferrer" href="https://ctheory.sitehost.iu.edu/img/Hayek_The_Road_to_Serfdom.pdf">The Road to Serfdom</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1944 - A seminal work arguing that central economic planning is undemocratic</Paragraph>
    </li>
    <li>
      <Paragraph>Henry Hazzlitt, <a target="_blank" rel="noreferrer" href="https://www.hacer.org/pdf/Hazlitt00.pdf">Economics in One Lesson</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1946 - A defense of free markets and a refutation of Keynesian ideas (see Keynes in Left Economics)</Paragraph>
    </li>
    <li>
      <Paragraph>Ludwig von Mises, <a target="_blank" rel="noreferrer" href="https://cdn.mises.org/Human%20Action_3.pdf">Human Action</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1949 - A defense of free markets based on a study of human decision-making</Paragraph>
    </li>
    <li>
      <Paragraph>Milton Friedman, <a target="_blank" rel="noreferrer" href="http://pombo.free.fr/friedman2002.pdf">Capitalism and Freedom</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1962 - An argument for capitalism as a check against tyrannical overreach by governments</Paragraph>
    </li>
    <li>
      <Paragraph>Thomas Sowell, <a target="_blank" rel="noreferrer" href="https://www.basicbooks.com/titles/thomas-sowell/the-thomas-sowell-reader/9780465022502/">The Thomas Sowell Reader</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>2011 - A collection of writings from the celebrated libertarian economist and commentator</Paragraph>
    </li>
    <li>
      <Paragraph>Robert Murphy, <a target="_blank" rel="noreferrer" href="https://vdoc.pub/documents/choice-cooperation-enterprise-and-human-action-5vd28ik55e10">Choice</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>2015 - A modern treatment of the ideas of Ludwig von Mises</Paragraph>
    </li>
  </ul>
</div>


const AuthorityRespecting = <div className={styles.section}>
  <ul>
  <li>
    <Paragraph>Aristotle, <a target="_blank" rel="noreferrer" href="https://historyofeconomicthought.mcmaster.ca/aristotle/Politics.pdf">Politics</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>4th century B.C.E. - A classical interpretation of politics aiming toward the highest good</Paragraph>
  </li>
  <li>
    <Paragraph>Thomas Hobbes, <a target="_blank" rel="noreferrer" href="https://www.gutenberg.org/files/3207/3207-h/3207-h.htm">Leviathan</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>1651 - The most compelling arguments for absolute monarchy ever published</Paragraph>
  </li>
  <li>
    <Paragraph>Joseph de Maistre, <a target="_blank" rel="noreferrer" href="https://babel.hathitrust.org/cgi/pt?id=umn.31951002310742q&view=1up&seq=15">“Essay on the Generative Principle of Political Constitutions”</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>1814 - An argument against rationalism in favor of a theological foundation of sovereignty</Paragraph>
  </li>
  <li>
    <Paragraph>C.S. Lewis, <a target="_blank" rel="noreferrer" href="http://www.tlchrist.info/cs_lewis.htm">“Equality”</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>1943 - A defense of authority as such, calling the idealization of equality a “prosaic barbarism”</Paragraph>
  </li>
  <li>
    <Paragraph>Hannah Arendt, <a target="_blank" rel="noreferrer" href="https://www.cambridge.org/core/journals/review-of-politics">“Authority in the 20th Century”</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>1956 - A claim that totalitarian regimes result from the loss of legitimacy of authority</Paragraph>
  </li>
  <li>
    <Paragraph>Hans-Hermann Hoppe, <a target="_blank" rel="noreferrer" href="https://portalconservador.com/livros/Hans-Hermann-Hoppe-Democracy-The-God-That-Failed.pdf">Democracy: The God That Failed</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>2001 - A Hobbes-flavored defense of hierarchy as the natural order</Paragraph>
  </li>
  <li>
    <Paragraph>Paul Gottfried, <a target="_blank" rel="noreferrer" href="https://www.goodreads.com/en/book/show/25779931-fascism">Facsism: The Career of a Concept</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>2016 - A historical overview of the idea of facsism</Paragraph>
  </li>
  </ul>
</div>

const LibertyLoving = <div className={styles.section}>
  <ul>
    <li>
      <Paragraph>John Locke, <a target="_blank" rel="noreferrer" href="https://www.yorku.ca/comninel/courses/3025pdf/Locke.pdf">Two Treatises of Government</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1689 - The original proposal for a society based on natural rights and a social contract</Paragraph>
    </li>
    <li>
      <Paragraph>Jean-Jacques Rousseau, <a target="_blank" rel="noreferrer" href="https://discoversocialsciences.com/wp-content/uploads/2018/07/Rousseau-Social-Contract.pdf">The Social Contract</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1762 - The OG modern argument for the will of the people as the only legitimate sovereign</Paragraph>
    </li>
    <li>
      <Paragraph>John Stuart Mill, <a target="_blank" rel="noreferrer" href="https://socialsciences.mcmaster.ca/econ/ugcm/3ll3/mill/liberty.pdf">“On Liberty”</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1859 - A defense of liberty from a utilitarian POV</Paragraph>
    </li>
    <li>
      <Paragraph>Simone de Beauvior, <a target="_blank" rel="noreferrer" href="https://newuniversityinexileconsortium.org/wp-content/uploads/2021/07/Simone-de-Beauvoir-The-Second-Sex-Jonathan-Cape-1956.pdf">The Second Sex</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1949 - A notable work of existentialism that launched the second wave of feminism</Paragraph>
    </li>
    <li>
      <Paragraph>John Rawls, <a target="_blank" rel="noreferrer" href="https://giuseppecapograssi.files.wordpress.com/2014/08/rawls99.pdf">A Theory of Justice</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1971 - A philosophical treatment of justice introducing the idea of the “original position”</Paragraph>
    </li>
    <li>
      <Paragraph>Martin Luther King, Jr., <a target="_blank" rel="noreferrer" href="https://www.csuchico.edu/iege/_assets/documents/susi-letter-from-birmingham-jail.pdf">“Letter from Birmingham Jail”</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1963 - King’s open letter defending civil disobedience against injustice</Paragraph>
    </li>
    <li>
      <Paragraph>Martha Nussbaum, <a target="_blank" rel="noreferrer" href="academia.edu/28662520/Creating_Capabilities_The_Human_Development_Approach">Creating Capabilities: The Human Development Approach</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>2013 - A reformulation of liberalism toward positive rights</Paragraph>
    </li>
  </ul>
</div>

const Economics = <div className={styles.section}>
  <ul>
  <li>
    <Paragraph>Charles Wheelan, <a target="_blank" rel="noreferrer" href="https://kupdf.net/download/naked-economics-wheelan-charles_5af61037e2b6f5567e9aa761_pdf">Naked Economics: Undressing the Dismal Science</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>2010 - A plain-language intro to economics (with a neoclassical bent)</Paragraph>
  </li>
  <li>
    <Paragraph>Fischer, Hasell, Proctor, Uwakwe, Perkins, & Watson, <a target="_blank" rel="noreferrer" href="https://www.routledge.com/Rethinking-Economics-An-Introduction-to-Pluralist-Economics/Fischer-Hasell-Proctor-Uwakwe-Perkins-Watson/p/book/9781138222687">Rethinking Economics: An Introduction to Pluralist Economics</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>2017 - An overview of the many different schools in economics</Paragraph>
  </li>
  </ul>
</div>


const RaceAndEthnicity = <div className={styles.section}>
  <ul>
    <li>
      <Paragraph>Michael Omi & Howard Winant, <a target="_blank" rel="noreferrer" href="https://www.routledge.com/Racial-Formation-in-the-United-States/Omi-Winant/p/book/9780415520317">Racial Formation in the United States</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1986 - An anthropological overview of racial formation processes</Paragraph>
    </li>
    <li>
      <Paragraph>Claude Steele, <a target="_blank" rel="noreferrer" href="https://eddierockerz.files.wordpress.com/2020/11/whistling-vivaldi-and-other-clues-to-how-stereotypes-affect-us-pdfdrive-.pdf">Whistling Vivaldi: How Stereotypes Affect Us and What We Can Do</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>2010 - An introduction to the idea of stereotype threat</Paragraph>
    </li>
    <li>
      <Paragraph>Peter Wade, <a target="_blank" rel="noreferrer" href="https://assets.cambridge.org/97811070/34112/frontmatter/9781107034112_frontmatter.pdf">Race: An Introduction</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>2015 - A comparative study of the concept of race going back to the ancient world</Paragraph>
    </li>
  </ul>
</div>

const HealthCare = <div className={styles.section}>
  <ul>
    <li>
      <Paragraph>Paul Starr, <a target="_blank" rel="noreferrer" href="https://www.semanticscholar.org/paper/The-social-transformation-of-american-medicine.-Msmw/5abb6cf9f4402a4d8d63104e7de8dbb4f62b3bc6">The Social Transformation of American Medicine</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>1982 - A general overview of the development of the U.S. healthcare system</Paragraph>
    </li>
    <li>
      <Paragraph><a target="_blank" rel="noreferrer" href="https://www.ted.com/playlists/23/the_future_of_medicine">The Future of Medicine playlist</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>A collection of TED Talks relating to the future of medicine</Paragraph>
    </li>
  </ul>
</div>

const Education = <div className={styles.section}>
  <ul>
    <li>
      <Paragraph>Russ Walsh, <a target="_blank" rel="noreferrer" href="https://www.garnpress.com/news/author-russ-walsh-interview-a-parents-guide-to-public-education-in-the-21st-century">A Parent’s Guide to Public Education in the 21st Century</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>2016 - An overview of the public education system</Paragraph>
    </li>
    <li>
      <Paragraph>Andrea Gabor, <a target="_blank" rel="noreferrer" href="https://thenewpress.com/books/after-education-wars">After the Education Wars</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>2018 - A critique of efforts at top-down education reform</Paragraph>
    </li>
    <li>
      <Paragraph>Brad Kershner, <a target="_blank" rel="noreferrer" href="https://www.goodreads.com/book/show/57770853-understanding-educational-complexity-integrating-practices-and-perspecti">Understanding Educational Complexity</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>2020 - An application of complexity science to educational leadership</Paragraph>
    </li>
  </ul>
</div>

const NationalSecurity = <div className={styles.section}>
  <ul>
    <li>
      <Paragraph>Andrew Dorman & Joyce Kaufman, <a target="_blank" rel="noreferrer" href="https://vdoc.pub/documents/providing-for-national-security-a-comparative-analysis-njmg5aeq3640">Providing for National Security</a></Paragraph>
      <Paragraph className={styles["expand-info"]}>2014 - A comparative study of national security in 13 different countries</Paragraph>
    </li>
  </ul>
</div>

const InternationalRelations = <div className={styles.section} style={{"paddingBottom": "100px"}}>
  <ul>
  <li>
    <Paragraph>Thucydides, <a target="_blank" rel="noreferrer" href="http://academics.wellesley.edu/ClassicalStudies/CLCV102/Thucydides--MelianDialogue.html">“The Melian Dialogue”</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>5th century B.C.E. - A fictional take on negotiations between Athens and Melos and a foundational text of the realist school</Paragraph>
  </li>
  <li>
    <Paragraph>Joseph Nye, <a target="_blank" rel="noreferrer" href="https://www.jstor.org/stable/1148580">“Soft Power”</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>1990 - An argument for likability over coercion in international affairs</Paragraph>
  </li>
  <li>
    <Paragraph>Henry Kissinger, <a target="_blank" rel="noreferrer" href="http://ijevanlib.ysu.am/wp-content/uploads/2020/05/1f6300e67784b164a9857efd25ed325b.pdf">Diplomacy</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>1994 - The former Secretary of State’s treaties one diplomacy</Paragraph>
  </li>
  <li>
    <Paragraph>Stephen Walt, <a target="_blank" rel="noreferrer" href="https://edisciplinas.usp.br/pluginfile.php/4886653/mod_resource/content/1/Stephen%20Walt%201998.pdf">“International Relations: One World, Many Theories”</a></Paragraph>
    <Paragraph className={styles["expand-info"]}>1998 - A short overview of the major schools of thought in international relations</Paragraph>
  </li>
  </ul>
</div>

const Expand = () =>  (
    <Layout className={styles.faq}>
      <Content>
        <Title><RoughNotation animate animationDelay="1000" show type="underline" color="#c4742d" strokeWidth={3}>Expand</RoughNotation></Title>
        <div className={styles.header}>
          <div className={styles["expand-opening"]} style={{'marginBottom': '80px'}}>
            <Paragraph>
              This is where you’ll find informational material covering the &nbsp;<RoughNotation className={styles["annotate-title-desktop"]} animate animationDelay="2000" show type="highlight" color="#2ddfd4" strokeWidth={1}>four “ideologies”</RoughNotation>&nbsp; that make up your results. You’ll also find links to resources for the &nbsp;<RoughNotation className={styles["annotate-title-desktop"]} animate animationDelay="2000" show type="highlight" color="#2ddfd4" strokeWidth={1}>six topic areas</RoughNotation>&nbsp; that are currently covered in the test. Below that, I link my own &nbsp;<RoughNotation className={styles["annotate-title-desktop"]} animate animationDelay="2000" show type="highlight" color="#2ddfd4" strokeWidth={1}>research,</RoughNotation>&nbsp; which I produce using data collected from everyone’s results.
            </Paragraph>
          </div>
        </div>

        <Title level={2} className={styles["expand-sub-header"]}><RoughNotation animate animationDelay="1000" show type="underline" color="#c4742d" strokeWidth={3}>The Ideologies</RoughNotation></Title>

        <div className={styles["mobile-content"]}>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Left Economics</Title>} key="1">
              {LeftEconomics}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Right Economics</Title>} key="1">
              {RightEconoics}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Authority-Respecting</Title>} key="1">
              {AuthorityRespecting}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Liberty-Loving</Title>} key="1">
              {LibertyLoving}
            </Panel>
          </Collapse>
        </div>

        <div className={styles["desktop-content"]}>
          <Title className={styles.header} level={2}>Left Economics</Title>
          {LeftEconomics}
          <Title className={styles.header} level={2}>Right Economics</Title>
          {RightEconoics}
          <Title className={styles.header} level={2}>Authority-Respecting</Title>
          {AuthorityRespecting}
          <Title className={styles.header} level={2}>Liberty-Loving</Title>
          {LibertyLoving}
        </div>

        <Title className={styles["expand-sub-header"]} style={{"marginTop": "50px", "marginBottom": "80px"}} level={2}><RoughNotation animate animationDelay="1000" show type="underline" color="#c4742d" strokeWidth={3}>The Topic Areas</RoughNotation></Title>
        <div className={styles["desktop-content"]}>
          <Title className={styles.header} level={2}>Economics</Title>
          {Economics}
          <Title className={styles.header} level={2}>Race and Ethnicity</Title>
          {RaceAndEthnicity}
          <Title className={styles.header} level={2}>Healthcare</Title>
          {HealthCare}
          <Title className={styles.header} level={2}>Education</Title>
          {Education}
          <Title className={styles.header} level={2}>National Security</Title>
          {NationalSecurity}
          <Title className={styles.header} level={2}>International Relations</Title>
          {InternationalRelations}
        </div>  
        
        <div className={styles["mobile-content"]}>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Economics</Title>} key="1">
              {Economics}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Race and Ethnicity</Title>} key="1">
              {RaceAndEthnicity}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Healthcare</Title>} key="1">
              {HealthCare}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>Education</Title>} key="1">
              {Education}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>National Security</Title>} key="1">
              {NationalSecurity}
            </Panel>
          </Collapse>
          <Collapse ghost>
            <Panel className={styles.header} header={<Title level={4}>International Relations</Title>} key="1">
              {InternationalRelations}
            </Panel>
          </Collapse>
        </div>
      </Content>
    </Layout>
  )

Expand.propTypes = {}
Expand.defaultProps = {}

export default Expand
