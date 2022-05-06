import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './Home';
import ErrorBoundary from './ErrorBoundary';
import AccelerometerListPage from './AccelerometerListPage';
import DrawbarListPage from './DrawbarListPage';
import SpringListPage from './SpringListPage';
import SteerListPage from './SteerListPage';
import Contact from './contact_us';
import AccelerometerDetail from './AccelerometerDetail';
import DrawbarDetail from './DrawbarDetail';
import SpringDetail from './SpringDetail';
import SteerDetail from './SteerDetail';
import AccelerometerS1111 from './AccelerometerS1111';
import DrawbarS1115 from './DrawbarS1115';


export default function Dashboard() {

  return (
       <ErrorBoundary>
        <Switch>
          
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/accelerometers1111">
           <AccelerometerS1111 />
           </Route>

          <Route path="/accelerometerdetail">
           <AccelerometerDetail />
           </Route>

          <Route path="/accelerometer">
            <AccelerometerListPage />
          </Route>

          <Route path="/drawbars1115">
           <DrawbarS1115 />
           </Route>

          <Route path="/drawbardetail">
            <DrawbarDetail/>
          </Route>

          <Route path="/instrumented-drawbar">
            <DrawbarListPage/>
          </Route>

          <Route path="/springdetail">
            <SpringDetail/>
          </Route>

          <Route path="/suspension-string">
            <SpringListPage/>
          </Route>

          <Route path="/steerdetail">
            <SteerDetail/>
          </Route>

          <Route path="/steer-sensor">
            <SteerListPage/>
          </Route>

          <Route path="/contact-us">
            <Contact/>
          </Route>

          <Redirect path="/" to="/home" />

        </Switch>
       </ErrorBoundary>
  );
}

