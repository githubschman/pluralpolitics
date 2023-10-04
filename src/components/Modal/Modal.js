import { Button, Typography } from 'antd'
import './modal.scss'

const { Title, Paragraph } = Typography

export const Modal = ({ setIsModalOpen }) => (
  <div className="modal">
    <div className="modalMask" />
    <div className="modalContent">
      <Title level={2}>Instructions</Title>
      <Paragraph>
        Choose ‘Lean Yes’ if you sympathize with a statement. Choose ‘Lean No’
        if you disagree with a statement, you don’t vibe with it, or you think
        its basic premise is wrongheaded. Choose ‘Skip’ if you don’t know or
        don’t have an opinion.
      </Paragraph>
      <div className="modalButton">
        <Button type="primary" onClick={() => setIsModalOpen(false)}>
          Ok
        </Button>
      </div>
    </div>
  </div>
)
