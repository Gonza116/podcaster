import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './screens/mainPage';
import { Podcast } from './screens/podcast';
import { Episode } from './screens/episode';
import { Header } from './components/header';
import { Provider } from 'react-redux';
import { store, persistor } from './reducers/store';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <div className="main">
            <Routes>
              <Route path="/" Component={MainPage} />
              <Route path="/podcast/:podcastId" Component={Podcast} />
              <Route path="/podcast/:podcastId/episode/:episodeId" Component={Episode} />
            </Routes>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

