import React from 'react';
import './App.css';

import PrimaryAppBar from './components/PrimaryAppBar';

const App = () => {
  return (
    <div>
      <PrimaryAppBar messagesCount={10} notificationsCount={0} friendshipRequestsCount={5} />
    </div>
  )
}

export default App;
