import React from 'react'
import styles from './Resources.module.css'
import Resource from './Resource'

const Resources = () => {
  return (
    <section className={`${styles.container}`}>
     <h2 className={`${styles.header}`}>List of Resources</h2>
     <div className={`${styles.ResourcesContainer}`}>
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
     </div>
    </section>
  )
}

export default Resources