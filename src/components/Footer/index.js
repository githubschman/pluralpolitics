import {useState, useEffect} from 'react'
import database from '../../utils/database'

const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState(null)

  useEffect(() => {
      database.getLastUpdated(setLastUpdated)
  }, [])

  return (
    <div
      className="comp-footer"
      style={{
        textAlign: 'center',
      }}
    >
    © 2022 The Plural Politics | Last updated: {lastUpdated}
  </div>
  )
}


export default Footer
