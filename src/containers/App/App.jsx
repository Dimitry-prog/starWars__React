import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/Header';
import routesConfig from '../../routes/routesConfig';

import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter basename={`/starWars__React/`}>
      <div className={styles.app}>
        <Header />
        <Routes>
          {routesConfig.map(route =>
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
              exact={route.exact}
            />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
