/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useEffect, useState} from 'react';
import EventsApiService from './services/EventsApiService';
import Spinner from "./components/Handling/Spinner";
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Handling/Error';
import NavBar from './components/Navbar';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Logout from './components/User/Logout';
import Profile from './components/User/Profile';
import auth from './utils/auth';


function App() {
  const [status, setStatus] = useState(false);
  const [events, setEvents] = useState([])
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  useEffect(() => {
    EventsApiService.getEvents()
      .then(event => setEvents(event))
      .then(() => setStatus(true))
      .then(console.log(events));
  },[])

  return (
    <div className="App">
      {
        !status ?
        <Spinner />
        :
        <main>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home}/>
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
            <Route path="/profile" component={Profile} />
            <Route
              path="/logout"
              render={(props) => (
                <Logout {...props} setIsAuthenticated={setIsAuthenticated} />
              )}
            />
            <Route component={Error} />
          </Switch>
        </main>
      }
    </div>
  );
}

export default App;
