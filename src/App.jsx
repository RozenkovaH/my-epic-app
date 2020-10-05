import { hot } from 'react-hot-loader/root'
import React from 'react'
import Header from './Components/Header/Header'
import SideHeader from './Components/GridComponents/SideHeader'
import SideMain from './Components/GridComponents/SideMain'
import SideBar from './Components/SideBar/SideBar'
import Workspace from './Components/Workspace/Workspace'
import styles from './AppStyles.module.css'
import Signin from './Components/Signin/Signin'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      tasks: [],
      tasksCount: 0,
      isSignedIn: false
    }
    this.getTasks = this.getTasks.bind(this)
  }

  componentDidMount () {
    this.getTasks()
  }

  getTasks () {
    fetch('https://garage-best-team-ever.tk/task')
      .then(data => data.json())
      .then(json => {
        this.setState({
          tasks: json.sort(
            (obj2, obj1) => {
              if (obj1.id > obj2.id) {
                return 1
              }
              if (obj1.id < obj2.id) {
                return -1
              }
              return 0
            }), // сортировка задач по id, новые вверху, старые внизу
          tasksCount: json.length
        })
      })
  }

  render () {
    return (
      <Router>
        { !this.state.isSignedIn ? <Redirect to="/signin" /> : <Redirect to="/" />}
        <Route exact path="/signin">
          <Signin isSignedIn={this.state.isSignedIn} />
        </Route>
        <Route exact path="/">
          <div className={styles.page}>
            <SideHeader />
            <Header />
            <SideHeader />

            <SideMain />
            <SideBar tasksCount={this.state.tasksCount} />
            <Workspace tasks={this.state.tasks} getTasks={this.getTasks}/>
            <SideMain />
          </div>
        </Route>
      </Router>
    )
  }
}
export default hot(App)
