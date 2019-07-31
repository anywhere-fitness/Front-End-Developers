import React from 'react'
import { Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import '../App.css'
import {Login} from './Login'
import {MemberLogin} from './MemberLogin';
import { ClientDashboard } from './ClientDashboard';
import { TrainerDashboard } from './TrainerDashboard';


export default function AppRouter() {
  return <div>
    <Switch>
      <Route path='/MemberLogin' component={MemberLogin} />
      <Route path='/ClientDashboard' component={ClientDashboard} />
      <Route path='/TrainerDashboard' component={TrainerDashboard} />
      <Route exact path='/' component={Login} />
    </Switch>
  </div>

}