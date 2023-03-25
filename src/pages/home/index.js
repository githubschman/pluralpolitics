/* eslint-disable jsx-a11y/media-has-caption */
import React, {useState} from 'react'
import {RoughNotation} from 'react-rough-notation'
import {PlayCircleFilled} from '@ant-design/icons'
import {Button, Typography, Layout, Modal} from 'antd'
import { useHistory } from 'react-router-dom'
import {images} from '../../assets'

import styles from './home.module.scss'

const { Content } = Layout

const {Title, Paragraph} = Typography

const Home = () => {
  const history = useHistory()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const goToTest = () => {
    history.push('/test')
  }

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
    <Layout className={styles.home}>
      <Content>
        <Title>The Plural Politics <RoughNotation animate animationDelay="1000" show type="box" color="#c4742d" strokeWidth={3}>Test</RoughNotation></Title>
        <div className={styles["home-image-mobile-block"]}>
          <img className={styles["home-image-mobile"]} src={images.homeImage} alt="The alt text will go here" />
        </div>
        <Paragraph className={styles["home-text-block"]}>How expansive are your politics?</Paragraph>
        <ul className={styles["home-ul"]}>
          <li><Button className={styles["home-li-link"]} onClick={showModal} type="link">What Is This Test About? <PlayCircleFilled /></Button></li>
          <li>Scientifically Rigorous: <a target="_blank" rel="noreferrer" href="https://firebasestorage.googleapis.com/v0/b/plural-politics.appspot.com/o/Whitepaper%20-%20Plural%20Politics.pdf?alt=media&token=4fb500d8-2017-4014-a072-d7a0e28785a0">Download the Whitepaper</a></li>
          <li>Partner Projects: <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCIuhGOD1cknRPV3HymQQhpA">Meta-Ideological Politics</a> and <a target="_blank" rel="noreferrer" href="https://thereconstitution.com">The Reconstitution</a></li>
          <li>Takes Only 15 Minutes</li>
        </ul>
        <Button type="primary" className="get-started round" onClick={goToTest}>Get Started</Button>
        </Content>
        <Content className={styles["home-image-block"]}>
          <img className={styles["home-image"]} src={images.homeImage} alt="The alt text will go here" />
        </Content>
        {/* TODO: move to own component */}
        <Modal centered destroyOnClose visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <video className={styles["home-landing-video"]} src="https://firebasestorage.googleapis.com/v0/b/plural-politics.appspot.com/o/Plural%20Politics%20%E2%80%9CAbout%E2%80%9D%20Video%20-%20Final%20Horizontal.mp4?alt=media&token=cb15702d-d659-4d10-be6c-b33fe4996ca5" controls>
            Your browser does not support the video tag.
          </video>
        </Modal>
    </Layout>
  )
}

export default Home
