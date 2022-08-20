import React from 'react'
import {RoughNotation} from 'react-rough-notation'
import {Button, Typography, Layout} from 'antd'
import { useHistory } from 'react-router-dom'
import {images} from '../../assets'

import styles from './home.module.scss'

const { Content } = Layout

const {Title, Paragraph} = Typography

const Home = () => {
  const history = useHistory()

  const goToTest = () => {
    history.push('/test')
  }

  // You can compare your results to 4,670,986 others.

  return (
    <Layout className={styles.home}>
      <Content>
        <Title>The Plural Politics <RoughNotation animate animationDelay="1000" show type="box" color="#c4742d" strokeWidth={3}>Test</RoughNotation></Title>
        <div className={styles["home-image-mobile-block"]}>
          <img className={styles["home-image-mobile"]} src={images.homeImage} alt="The alt text will go here" />
        </div>
        <Paragraph className={styles["home-text-block"]}>How expansive are your politics?</Paragraph>
        <ul className={styles["home-ul"]}>
          <li>Scientifically Valid <a target="_blank" rel="noreferrer" href="https://firebasestorage.googleapis.com/v0/b/plural-politics.appspot.com/o/Whitepaper%20-%20Plural%20Politics.pdf?alt=media&token=1026b841-279a-4699-a66d-add2ca500ba7">Download the Whitepaper</a></li>
          <li>Partner Projects: <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCIuhGOD1cknRPV3HymQQhpA">Meta-Ideological Politics</a>, and <a target="_blank" rel="noreferrer" href="https://thereconstitution.com">The Reconstitution</a></li>
          <li>Takes Only 10 Minutes</li>
        </ul>
        <Button type="primary" className="get-started round" onClick={goToTest}>Get Started</Button>
        </Content>
        <Content className={styles["home-image-block"]}>
          <img className={styles["home-image"]} src={images.homeImage} alt="The alt text will go here" />
        </Content>
    </Layout>
  )
}

Home.propTypes = {}
Home.defaultProps = {}

export default Home
