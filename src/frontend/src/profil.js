import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function CnxProfil() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Profil">
            <Profil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export function Calendrier() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }
    return (
        <>
            <Calendar
                value={dateState}
                onChange={changeDate}
            />
            <p> La date s&eacute;lectionn&eacute;e actuellement est <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
        </>
    )
}


export default CnxProfil;