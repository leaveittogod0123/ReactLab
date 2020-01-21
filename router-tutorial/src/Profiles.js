import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './components/WithRouterSample';

export default function Profiles() {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/0">noyo0123</Link>
        </li>
        <li>
          <Link to="/profiles/1">henry</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:id" component={Profile} />
      <WithRouterSample />
    </div>
  );
}
