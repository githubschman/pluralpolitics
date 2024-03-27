import { Layout, Typography } from 'antd'
import { RoughNotation } from 'react-rough-notation'
import { useEffect } from 'react'
import styles from './privacy.module.scss'

const { Content } = Layout
const { Title, Paragraph } = Typography

const PrivacyContent = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef, no-restricted-globals
    scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Title>
        <RoughNotation
          animate
          animationDelay="1000"
          show
          type="underline"
          color="#c4742d"
          strokeWidth={3}
        >
          Privacy Notice
        </RoughNotation>
      </Title>
      <Paragraph style={{ marginTop: '4rem' }} className={styles.paragraph}>
        PluralPolitics.com is an independent, non-partisan educational website
        that is self-funded or minimally funded by Patreon patrons.
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        In brief, Plural Politics (“the Site”) <b>does not</b> collect
        personally identifying information. The Site <b>does not</b> sell
        personal information about you to third parties. The Site <b>may</b>{' '}
        provide anonymized, non-identifying, aggregated data about user results
        to researchers. The Site <b>does not</b> use cookies. Your test progress
        is tracked using local storage. The Site <b>does</b> use a third party
        service, Google Analytics, to help improve your experience using the
        website. Please see the Google Analytics privacy notice for information
        about how Google may use the limited data provided to them.
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        The Site collects some information from you in order to provide you with
        a personalized, useful, and efficient experience. Below is the complete
        Plural Politics Privacy Notice with respect to several kinds of data. If
        you have any questions or comments, please contact me by sending a
        message via X (formerly Twitter) to{' '}
        <a
          href="https://twitter.com/PluralPol"
          target="_blank"
          rel="noreferrer"
        >
          @PluralPol
        </a>
        .
      </Paragraph>
      <Title className={styles.header} level={2}>
        Personal Data
      </Title>
      <Paragraph className={styles.paragraph}>
        Plural Politics collects no Personal Data from you. The category
        “Personal Data” does not include aggregate information, which is data
        collected about the use of the site or about a group or category of
        services or users from which individual identifiers have been removed.
      </Paragraph>
      <Title className={styles.header} level={2}>
        Anonymous Data
      </Title>
      <Paragraph className={styles.paragraph}>
        Anonymous Data means data that is not associated with or linked to your
        Personal Data. Anonymous Data does not, by itself, permit the
        identification of individual persons. This includes answers to the test
        or aggregate information, which is data collected about the use of the
        site or about a group or category of services or users, from which
        individual identities or other personal information have been removed.
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        When you use Plural Politics, your Internet Protocol (IP) address is
        automatically collected as is your activity on the site. That data is
        never treated as Personal Information and is used only as an aggregate
        without personal identifiers.
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        The Site does not use cookies or web beacons. Your test progress and
        completion status are tracked on your local storage.
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        The Site contains links to other websites. Plural Politics is not
        responsible for the privacy practices of other websites. I encourage you
        to be aware when you leave the site and to read the privacy statements
        of each and every website that collects personally identifiable
        information. This Privacy Notice applies solely to information collected
        by the Site.
      </Paragraph>
      <Title className={styles.header} level={2}>
        What Plural Politics Does With Your Information
      </Title>
      <Paragraph className={styles.paragraph}>
        The Site uses your data to give you relevant information. For example,
        the Site uses your test responses to match you with appropriate
        political labels and to create your unique circular bar graph. The Site
        also uses your results to perform research about general trends and to
        make your experience using the Site better.
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        Plural Politics does not sell, rent, or otherwise share your Personal
        Information with any third parties because the Site collects no such
        information in the first place.
      </Paragraph>
      <Title className={styles.header} level={2}>
        Sharing Your Information
      </Title>
      <Paragraph className={styles.paragraph}>
        Plural Politics may share anonymous, non-identifying, aggregated data
        with collaborating researchers. Your data may compose part of those
        collections but cannot, in any way, be traced to you. If and when such
        disclosures take place, not even your IP address will remain linked to
        your data.
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        Please remember that if you choose to make your test results public to
        other people in any way, including on social media, that information
        will be available publicly to others and some of it may be searchable by
        search engines. If you choose to make your information public, the Site
        and its social media accounts may repost, comment on, or otherwise
        interact with it.
      </Paragraph>
      <Title className={styles.header} level={2}>
        Advertising
      </Title>
      <Paragraph className={styles.paragraph}>
        The Site includes no advertisements. I do not work with ad networks or
        any other third parties to serve you online advertisements.
      </Paragraph>
      <Title className={styles.header} level={2}>
        Security
      </Title>
      <Paragraph className={styles.paragraph}>
        Your IP address and other Anonymous Data are kept in a password-secured
        database and will never be accessible to anyone except Plural Politics
        administrators.
      </Paragraph>
      <Title className={styles.header} level={2}>
        Enforcement
      </Title>
      <Paragraph className={styles.paragraph}>
        Plural Politics is based in the United States and the privacy laws of
        the United States govern the use of the Site.
      </Paragraph>
      <Title className={styles.header} level={2}>
        Changes To This Notice
      </Title>
      <Paragraph className={styles.paragraph}>
        I reserve the right to change the provisions of this Notice at any time.
        I will make clear that changes have been made by indicating on the
        Notice the date it was last updated. Unless otherwise stated in the
        amendment, the amended Notice will automatically be effective seven days
        after it is initially posted on the Site. I encourage you to review this
        Notice from time to time to make sure that you understand how any data
        you provide will be used.
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        Questions or comments regarding your privacy or this Notice specifically
        should be sent via X (formerly Twitter) to{' '}
        <a
          href="https://twitter.com/PluralPol"
          target="_blank"
          rel="noreferrer"
        >
          @PluralPol
        </a>
        .
      </Paragraph>
      <Paragraph
        style={{ marginTop: '4rem' }}
        strong
        className={styles.paragraph}
      >
        Signed: Nathan Coffman <br /> Effective date of this version: March 20,
        2024
      </Paragraph>
    </div>
  )
}

const Privacy = () => (
  <Layout className={styles.privacy}>
    <Content>
      <PrivacyContent />
    </Content>
  </Layout>
)

export default Privacy
