import React from 'react'
import { Switch, Route } from 'react-router-dom';
import {Login} from './Login'
import {MemberLogin} from './MemberLogin';


export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/MemberLogin' component={MemberLogin} />
      <Route exact path='/' component={Login} />
    </Switch>
  </div>

}