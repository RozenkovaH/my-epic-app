import React, { Fragment } from 'react'
import styles from './GreetingStyles.css'
import planner from './Planner.png'

const Greeting = () => {
  return (
    <Fragment>
      <div className={styles.greeting}>
        <div className={styles.ImageContainer}>
          <img src={planner} className={styles.grImage}/>
        </div>
        <p>Hi, User</p>
        <p>You have a lot of tasks to do!</p>
      </div>
    </Fragment>
  )
}
export default Greeting
