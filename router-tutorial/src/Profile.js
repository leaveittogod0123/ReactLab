import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from '../src/components/WithRouterSample';

const data = [
  { name: '노요셉', desc: '소프트웨어 개발자' },
  { name: '헨리 5세', desc: 'england king' },
];

function Profile({ match }) {
  const { id } = match.params;
  const profile = data[id];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {id}({profile.name})
      </h3>
      <p>{profile.desc}</p>
      <WithRouterSample />
    </div>
  );
}

export default withRouter(Profile);
