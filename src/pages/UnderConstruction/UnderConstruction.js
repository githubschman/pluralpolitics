import { Typography } from 'antd'
import construction from '../../assets/images/construction.png'
import './underConstruction.scss'

const { Paragraph } = Typography

export const UnderConstruction = () => (
  <div className="construction-body">
    <img src={construction} alt="Construction" />
    <Paragraph>
      Sorry, the Plural Politics Test is currently under maintenance. We are
      excited to announce we will be releasing version two the test soon with
      some updated metrics. Please check back later for updates.
    </Paragraph>
  </div>
)
