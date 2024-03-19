import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import database from '../../utils/database'

const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState(null)

  const copyrightYear = lastUpdated?.split(' ')[3]

  useEffect(() => {
    database.getLastUpdated(setLastUpdated)
  }, [])

  return (
    <div
      className="comp-footer"
      style={{
        textAlign: 'center',
        marginTop: '2rem',
      }}
    >
      <span>© {copyrightYear} Nathan Coffman</span>
      <br />
      <span>
        Last updated: {lastUpdated} | <Link to="/privacy">Privacy Notice</Link>
      </span>
    </div>
  )
}

export default Footer
