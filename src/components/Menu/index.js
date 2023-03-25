/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import { Menu as AntMenu, Typography, Button, Modal } from 'antd'
import {useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  MenuOutlined,
} from '@ant-design/icons'
import {images} from '../../assets'
import './menu.scss'

const { ItemGroup, Item } = AntMenu
const {Title} = Typography


const navigationGroup = [
  {
    title: 'FAQs',
    label: 'FAQs',
    key: 'faq',
  },
  {
    title: 'EXPAND',
    label: 'Expand',
    key: 'expand',
  },
]

const Menu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [showDiscord, setShowDiscord] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const {pathname} = location
    if (pathname === "/") {
      setShowDiscord(true)
    } else {
      setShowDiscord(false)
    }
  }, [location])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const goToPage = (page) => {
    history.push(`/${page}`)
  }

  const goToDiscord = () => {
    window.open("https://discord.com/invite/e2JuZYZmyF");
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
    <div>
      <AntMenu className="desktop-menu" mode="horizontal">
        <img className="logo-img" src={images.logo} alt="The alt text will go here" />
        <a href="/" className="logo-text">
          <Title className="plural">Plural</Title>
          <Title>Politics</Title>
        </a>
        <ItemGroup className="menu-group nav">
          <Item className="nav-button" key="about">
            <Button type="link" onClick={showModal}>ABOUT</Button>
          </Item>
          {navigationGroup.map((item) => (
            <Item className="nav-button" key={item.key} icon={item.icon}>
              <Button type="link" onClick={() => goToPage(item.key)}>{item.title}</Button>
            </Item>
          ))}
          <Item className="nav-button" key="discord-button">
            <Button type="link" onClick={goToDiscord}>DISCORD</Button>
          </Item>
        </ItemGroup>
      </AntMenu>
      <div className="mobile-menu">
        <img className="logo-img" src={images.logo} alt="The alt text will go here" />
        <a href="/" className="logo-text">
          <Title className="plural">Plural</Title>
          <Title>Politics</Title>
        </a>
        <Button onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          <MenuOutlined />
        </Button>
        {collapsed ? "" : 
          <AntMenu
            className="mobile-ant-menu"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            inlineCollapsed={collapsed}
          >
            {navigationGroup.map((item) => (
              <Item className="nav-button" key={item.key} icon={item.icon}>
                <Button type="link" onClick={() => goToPage(item.key)}>{item.title}</Button>
              </Item>
            ))}
            <Item className="nav-button" key="discord-button">
              <Button type="link" onClick={goToDiscord}>DISCORD</Button>
            </Item>
          </AntMenu>
        }
      </div>
      {/* TODO: move to own component */}
      <Modal centered destroyOnClose visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <video className="about-video" src="https://firebasestorage.googleapis.com/v0/b/plural-politics.appspot.com/o/Plural%20Politics%20%E2%80%9CAbout%E2%80%9D%20Video%20-%20Final%20Horizontal.mp4?alt=media&token=cb15702d-d659-4d10-be6c-b33fe4996ca5" controls>
        Your browser does not support the video tag.
      </video>
    </Modal>
    </div>
  )
}

export default Menu
