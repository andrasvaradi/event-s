import './App.css';
import React, { useEffect, useState} from 'react';
import EventsApiService from './services/EventsApiService';
import Spinner from "./components/Handling/Spinner";
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from './components/Handling/Error';

function App() {
  const [status, setStatus] = useState(false);
  const [events, setEvents] = useState([])

  useEffect(() => {
    EventsApiService.getEvents()
      .then(event => setEvents(event))
      .then(() => setStatus(true));
  },[])

  return (
    <div className="App">
      {
        !status ?
        <Spinner />
        :
        <main>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route component={Error} />
          </Switch>
        </main>
      }
    </div>
  );
}

export default App;
