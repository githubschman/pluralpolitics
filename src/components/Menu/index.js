import { Menu as AntMenu, Typography, Button } from 'antd'
import {useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  FacebookOutlined,
  TwitterOutlined,
  VideoCameraOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import {images} from '../../assets'
import './menu.scss'

const { ItemGroup, Item } = AntMenu
const {Title} = Typography


const navigationGroup = [
  {
    title: 'ABOUT',
    label: 'About',
    key: 'about',
  },
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

export const socialGroup = [
  {
    key: 'facebook',
    label: 'Facebook',
    icon: <FacebookOutlined />,
  },
  {
    key: 'twitter',
    label: 'Twitter',
    icon: <TwitterOutlined />,
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    icon: <VideoCameraOutlined />,
  },
]

const Menu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [showDiscord, setShowDiscord] = useState(false);

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

  return (
    <div>
      <AntMenu className="desktop-menu" mode="horizontal">
        <img className="logo-img" src={images.logo} alt="The alt text will go here" />
        <a href="/" className="logo-text">
          <Title className="plural">Plural</Title>
          <Title>Politics</Title>
        </a>
        <ItemGroup className="menu-group nav">
          {navigationGroup.map((item) => (
            <Item className="nav-button" key={item.key} icon={item.icon}>
              <Button type="link" onClick={() => goToPage(item.key)}>{item.title}</Button>
            </Item>
          ))}
          {showDiscord &&
            <Item className="nav-button" key="discord-button">
              <Button type="link" onClick={goToDiscord}>DISCORD</Button>
            </Item>
          }
        </ItemGroup>
        {/* <ItemGroup className="menu-group social">
          {socialGroup.map((item) => (
            <Item key={item.key} icon={item.icon}>
              {item.title}
            </Item>
          ))}
          </ItemGroup> */}
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
    </div>
  )
}

export default Menu
