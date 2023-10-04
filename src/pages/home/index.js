/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react'
import { RoughNotation } from 'react-rough-notation'
import { PlayCircleFilled } from '@ant-design/icons'
import { Button, Typography, Layout, Modal } from 'antd'
import { useHistory } from 'react-router-dom'

import styles from './home.module.scss'

const { Content } = Layout

const { Title, Paragraph } = Typography

const Home = () => {
  const history = useHistory()
  const [isModalVisible, setIsModalVisible] = useState(false)

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
        <div className={styles['home-content']}>
          <Title>
            The Plural Politics{' '}
            <RoughNotation
              animate
              animationDelay="1000"
              show
              type="box"
              color="#c4742d"
              strokeWidth={3}
            >
              Test
            </RoughNotation>
          </Title>
          <Paragraph className={styles['home-text-block']}>
            What kind of political actor are you?
          </Paragraph>
          <ul className={styles['home-ul']}>
            <li>
              <Button
                className={styles['home-li-link']}
                onClick={showModal}
                type="link"
              >
                What’s this test all about? <PlayCircleFilled />
              </Button>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://firebasestorage.googleapis.com/v0/b/plural-politics.appspot.com/o/Whitepaper%20-%20Plural%20Politics.pdf?alt=media&token=e3278e92-d0a4-4af3-9545-570a287d9148"
              >
                Read the whitepaper
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.com/invite/e2JuZYZmyF"
              >
                Join the Discord
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.patreon.com/natecoffman"
              >
                Support the project
              </a>
            </li>
          </ul>
          <Button
            type="primary"
            className="get-started round"
            onClick={goToTest}
          >
            Get Started
          </Button>
        </div>
      </Content>
      <Modal
        centered
        destroyOnClose
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <video
          className={styles['home-landing-video']}
          src="https://firebasestorage.googleapis.com/v0/b/plural-politics.appspot.com/o/about_video.mp4?alt=media&token=ed1ce7f6-b150-4770-b1a8-32c0ec04faac"
          controls
        >
          Your browser does not support the video tag.
        </video>
      </Modal>
    </Layout>
  )
}

export default Home
