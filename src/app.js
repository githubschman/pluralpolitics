import 'antd/dist/antd.variable.min.css'
import {ConfigProvider} from 'antd'
import Router from './routes'

ConfigProvider.config({
  theme: {
    primaryColor: "#c4742d",
    secondaryColor: "#215484",
  }
})

function App() {
  return (
    <ConfigProvider>
      <Router />
    </ConfigProvider>
  )
}

export default App
