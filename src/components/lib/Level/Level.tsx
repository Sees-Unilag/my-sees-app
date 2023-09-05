import React from 'react'
import styles from './Level.module.css'
import { Course } from './Course'

export const Level = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`d-flex justify-content-between align-items-center  ${styles.levelHeader}`}>
       <h3>List of Courses</h3>
       <h3>Units</h3>
      </div>
      <div>
       <Course />
       <Course />
       <Course />
       <Course />
       <Course />
       <Course />
       <Course />
       <Course />
      </div>
    </section>
  )
}
