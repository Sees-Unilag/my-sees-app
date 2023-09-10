import React from 'react'
import styles from './Resources.module.css'

// interface props {
//  name: string
// }

const Resource = () => {
  return (
    <div className={`${styles.ResourceContainer}`}>
     <div className={`${styles.ResourceNameDiv}`}>
      <h3 className={`${styles.ResourceName}`}>K.A Stroud Engineering Maths</h3>
     </div>
    </div>
  )
}

export default Resource