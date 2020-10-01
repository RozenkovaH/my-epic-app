import { hot } from 'react-hot-loader/root'
import React from 'react'
import Header from './Components/Header/Header'
import SideHeader from './Components/GridComponents/SideHeader'
import SideMain from './Components/GridComponents/SideMain'
import SideBar from './Components/SideBar/SideBar'
import Workspace from './Components/Workspace/Workspace'
import styles from './AppStyles.module.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      tasksCount: 0
    }
    this.incrementTasksCount = this.incrementTasksCount.bind(this)
    this.decrementTasksCount = this.decrementTasksCount.bind(this)
  }

  componentDidMount() {
    fetch(`https://garage-best-team-ever.tk/task`).then(data => data.json()).then(json => { this.setState({ tasks: json, tasksCount: json.length }) })
  }

  incrementTasksCount() {
    this.setState({
      tasksCount: this.state.tasksCount + 1
    })
  }

  decrementTasksCount() {
    this.setState({
      tasksCount: this.state.tasksCount - 1
    })
  }

  render() {

    return (
      <div className={styles.page}>
        <SideHeader />
        <Header />
        <SideHeader />

        <SideMain />
        <SideBar tasksCount={this.state.tasksCount} />
        <Workspace tasks={this.state.tasks} incrementTasksCount={this.incrementTasksCount} decrementTasksCount={this.decrementTasksCount}/>
        <SideMain />
      </div>
    )
  }
}
export default hot(App)
