import React, { useEffect } from 'react'
import styles from './CalendarReactStyles.module.css'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

const CalendarReact = (props) => {
  useEffect(() => {
    const now = document.getElementsByClassName('react-calendar__tile--now')[0];
    now.style.background = '#0073F7';
    now.style.color = 'white';
  })

  return (
    <Calendar className={styles.calendar}/>
  )
}
export default CalendarReact
