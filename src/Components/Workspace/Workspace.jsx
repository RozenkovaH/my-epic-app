import React, { useState } from 'react'
import styles from './WorkspaceStyles.module.css'
import WorkspaceHeader from './Children/WorkspaceHeader'
import Task from './Children/Task'
import SearchBar from './Children/SearchBar'

const Workspace = ({ tasks, getTasks }) => {
  const [isOpen, setOpen] = useState(false)

  const task = () => {
    if (isOpen) { return <Task tags={[]} open={isOpen} setOpen={setOpen} isNew={true} getTasks={getTasks}/> }
  }

  const renderTask = () => {
    setOpen(true)
  }

  return (
    <div className={styles.workspace}>
      <WorkspaceHeader onClick={renderTask} />
      <SearchBar />
      {task()}
      {tasks.map(task => (
        <Task key={task.id} id={task.id} title={task.title} bodyTask={task.text_content} tags={task.tags} dateTarget={task.date_target} 
          isNew={false} getTasks={getTasks} isImportant={task.is_important}/>
      ))}
    </div>
  )
}
export default Workspace
