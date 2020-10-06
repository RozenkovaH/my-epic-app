import { hot } from 'react-hot-loader/root'
import React from 'react'
import Header from './Components/Header/Header'
import SideHeader from './Components/GridComponents/SideHeader'
import SideMain from './Components/GridComponents/SideMain'
import SideBar from './Components/SideBar/SideBar'
import Workspace from './Components/Workspace/Workspace'
import styles from './AppStyles.module.css'
import Signin from './Components/Signin/Signin'
import Favicon from 'react-favicon'
import Cookies from 'js-cookie'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      user: [],
      tasks: [],
      tasksCount: 0,
      token: undefined
    }
    this.getUser = this.getUser.bind(this)
    this.getTasks = this.getTasks.bind(this)
  }

  componentDidMount () {
    const token = Cookies.get('accessToken')
    this.setState({ token: token })
    this.getUser()
    this.getTasks()
  }

  getUser () {
    fetch('https://garage-best-team-ever.tk/whoami')
      .then(data => data.json())
      .then(json => this.setState({ user: json }))
      .then(json => console.log(json))
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
        <Favicon url="https://raw.githubusercontent.com/RozenkovaH/xsolla-garage-frontend/master/src/favicon.ico"/>
        { this.state.token === undefined ? <Redirect to="/signin" /> : <Redirect to="/" />}
        <Route exact path="/signin">
          <Signin />
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
