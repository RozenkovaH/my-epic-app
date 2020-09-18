import React from 'react'
import ReactDOM, { render } from 'react-dom'
import styles from './WorkspaceStyles.module.css'
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader'
import Task from '../Task/Task'
import SearchBar from '../SearchBar/SearchBar'

const Workspace = () => {

  const renderTask = () => {
    const container = document.getElementsByClassName(styles.tasks)[0];
    console.log(container)
    render(
      <Task/>,
      container
    )
  }

  return (
    <div>
      <div className={styles.workspace}>
        <WorkspaceHeader onClick={renderTask}/>
        <SearchBar/>
        <div className={styles.tasks}>
        </div>
      </div>
    </div>
  )
}
export default Workspace
