import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './settings.scss';

import MainLayout from './components/Layout/MainLayout/MainLayout';

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
