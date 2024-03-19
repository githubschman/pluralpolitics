import React, { Suspense } from 'react'
import { Layout } from 'antd'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Fallback from 'components/Fallback'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Privacy from './pages/privacy'
import './theme/core.scss'
// import { UnderConstruction } from './pages/UnderConstruction/UnderConstruction'

const Author = React.lazy(() => import('./pages/author'))
const Home = React.lazy(() => import('./pages/home'))
const Test = React.lazy(() => import('./pages/test'))
const Results = React.lazy(() => import('./pages/results'))
const FAQ = React.lazy(() => import('./pages/faq'))
const About = React.lazy(() => import('./pages/about'))
const Expand = React.lazy(() => import('./pages/expand'))

const { Content } = Layout

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Layout className="layout">
            <Menu />
            <Route exact path="/">
              <Content>
                <Home />
                {/* <UnderConstruction /> */}
                <Footer />
              </Content>
            </Route>
            <Route exact path="/test">
              <Content>
                <Test />
              </Content>
            </Route>
            <Route exact path="/results">
              <Content>
                <Results />
              </Content>
            </Route>
            <Route exact path="/author">
              <Content>
                <Author />
              </Content>
            </Route>
            <Route exact path="/about">
              <Content>
                <About />
              </Content>
            </Route>
            <Route exact path="/expand">
              <Content>
                <Expand />
              </Content>
            </Route>
            <Route exact path="/faq">
              <Content>
                <FAQ />
              </Content>
            </Route>
            <Route exact path="/privacy">
              <Content>
                <Privacy />
              </Content>
            </Route>
          </Layout>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
