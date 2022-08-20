import React, {useEffect, useState} from 'react'
import styles from './author.module.scss'
import auth from '../../utils/auth'

import EditTest from '../../components/EditTest'

const Author = () => {

  const [env] = useState(process.env.NODE_ENV)
  const [user, setUser] = useState(null)

  useEffect(() => {
    
  }, [])

  const launchLogin = () => {
    auth.loginWithGoogle(setUser)
  }

  // add captcha here too
  return (
    <div className={styles.root}>
      <h1>Author Page</h1>
      {(!user && env !== 'development') && <button type="button" onClick={launchLogin}>Login</button>}
      {(user || env === 'development') && <EditTest />}
    </div>
  )
}

Author.propTypes = {}
Author.defaultProps = {}

export default Author
