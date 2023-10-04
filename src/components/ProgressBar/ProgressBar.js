import React from 'react'
import styles from './progressBar.module.scss'

const ProgressBar = ({ width }) => {
  const progress = `${width + 1}%`

  return (
    <div className={styles.root}>
      <div className={styles['progress-outer']}>
        <div style={{ width: progress }} className={styles['progress-inner']} />
      </div>
    </div>
  )
}

export default ProgressBar
