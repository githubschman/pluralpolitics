import { useState, useEffect } from 'react'
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
      © {copyrightYear} Nathan Coffman | Last updated: {lastUpdated}
    </div>
  )
}

export default Footer
