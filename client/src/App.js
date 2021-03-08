import './App.css'
import React, { useEffect, useState } from 'react'
import EventsApiService from './services/EventsApiService'
import UsersApiService from './services/UsersApiService'
import Spinner from './components/Handling/Spinner'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Handling/Error'
import auth from './utils/auth'
import NavBar from './components/Navbar'
import Login from './components/User/Login'
import Register from './components/User/Register'
import Logout from './components/User/Logout'
import Profile from './components/User/Profile'
import Events from './containers/events/Events'
import EventDetails from './components/Event/EventDetails'
import NewEvent from './containers/events/NewEvent'
import MyEvents from './containers/events/MyEvents'
import UserDetails from './components/User/UserDetails'
import Image from './Image'
import Footer from './components/Footer';

function App () {
  const [status, setStatus] = useState(false)
  const [events, setEvents] = useState([])
  const initialState = auth.isAuthenticated()
  const [isAuthenticated, setIsAuthenticated] = useState(initialState)
  const [user, setUser] = useState({})

  useEffect(() => {
    EventsApiService.getEvents()
      .then(event => setEvents(event))
      .then(() => setStatus(true))
  }, [])

  const createEvent = (body) => {
    EventsApiService.createEvent(body)
      .then(event => setEvents([...events, event]))
  }
  const signUpDown = (dir, id) => {
    if (dir === 'up') {
      EventsApiService.signUp(id)
        .then(updated => setEvents((events) => {
          const index = events.findIndex(event => event._id === updated._id)
          const copy = [...events]
          copy.splice(index, 1, updated)
          return copy
        }))
        .then(() => updateUser())
        .then(console.log(user))
    } else {
      EventsApiService.signDown(id)
        .then(updated => setEvents((events) => {
          const index = events.findIndex(event => event._id === updated._id)
          const copy = [...events]
          copy.splice(index, 1, updated)
          return copy
        }))
        .then(() => updateUser())
        .then(console.log(user))
    }
  }
  function updateUser () {
    UsersApiService.profile()
      .then(updated => setUser(updated))
  }
  return (
    <div className="App">
      {
        !status
          ? <Spinner />
          : <main>
            <NavBar isAuthenticated={isAuthenticated} user={user} />
            {/* <Image /> */}
            <Switch>
              <Route path='/' exact component={Home} />
              <Route
                path="/register"
                render={(props) => (
                  <Register {...props} setIsAuthenticated={setIsAuthenticated} />
                )}
              />
              <Route
                path="/login"
                render={(props) => (
                  <Login {...props} setIsAuthenticated={setIsAuthenticated} />
                )}
              />
              <Route
                path="/logout"
                render={(props) => (
                  <Logout {...props} setIsAuthenticated={setIsAuthenticated} />
                )}
              />
              <Route path='/new-event' render={() => (
                <NewEvent createEvent={createEvent} user={user} />
              )} />
              <Route path="/profile" render={() => (
                <Profile user={user} setUser={setUser} />)} />
              {/* <Route path='/my-events' exact render={() => (
                <MyEvents user={user} />)} /> */}

              <Route path='/events' exact render={() => (
                <Events value={events} />
              )} />
              <Route path='/events/:id' render={() => (
                <EventDetails events={events} signUpDown={signUpDown} user={user} />
              )} />
              {/* <Route path='/users/:id' exact component={UserDetails}/> */}
              <Route component={Error} />
            </Switch>
            <Footer />
          </main>
      }
    </div>
  )
}

export default App
