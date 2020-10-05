import React, { useEffect } from 'react'
import styles from './CalendarAndGreetingStyles.module.css'
import CalendarReact from './CalendarReact'
import Greeting from './Greeting'

const CalendarAndGreeting = props => {

  return (
    <div className={styles.CalendarAndGreeting}>
      <Greeting tasksCount={props.tasksCount}/>
      <CalendarReact/>
    </div>
  )
}
export default CalendarAndGreeting
