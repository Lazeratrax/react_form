import React from 'react';
// import logo from './logo.svg';
// import { Redirect, Route, Router, Switch, Link } from 'react-router-dom'
import {Route, Router, Switch} from 'react-router-dom'
import history from './utils/history'
import NotFound from './views/404'
import './App.css';
import { AuthContext } from './auth/AuthContext'
// import AuthRoute from './auth/AuthRoute'
// import AuthRoute, { useCurrentUser } from './auth/AuthRoute'
// import Login from './auth/Login'
// import Logout from './ auth/Logout'
import Registration from './auth/Registration'
// import { AuthContext } from './auth/AuthContext'
import { NAV } from './nav';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <AuthContext>
        <Switch>
          <Route path={NAV.Registration} component={Registration} />
          <Route component={NotFound} />
        </Switch>
      </AuthContext>
    </Router>
  );
}

export default App;


// <AuthRoute path={NAV.Registration} component={Registration}/>
// <Route exact path="/">
// <Redirect to={NAV.Posts} />
// </Route>
// <div className="App">
//       <header className="App-header">
//         {/*<img src={logo} className="App-logo" alt="logo" />*/}
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>













// import React, { createContext, useContext } from 'react'
// import { Required } from 'utility-types'
// import { RouteProps } from 'react-router'
// import { Redirect, Route } from 'react-router-dom'
// import { useAuthContext } from './AuthContext'
// // import { rememberReturnTo } from './returnToAfterLogin'
// import { NAV } from '../nav'
// import {AuthQ_me} from './authQ'


// export type AuthenticatedUser = AuthQ_me

// const AuthenticationContext = createContext<AuthenticatedUser>({} as AuthenticatedUser)

// const AuthRoute: React.FC<Required<RouteProps, 'component'>> = ({ component, ...rest }) => {
//     const Component = component
  
//     const { user } = useAuthContext()
//     // if (!user) {
//     //   if (rest.location) {
//     //     rememberReturnTo(rest.location.pathname + rest.location.search)
//     //   }
//     //   return <Redirect to={NAV.Login}/>
//     // }
  
//     return (
//       <Route {...rest} render={(props) => (
//         <AuthenticationContext.Provider value={user}>
//           <Component {...props} />
//         </AuthenticationContext.Provider>
//       )}/>
//     )
//   }
  
//   export default AuthRoute
  
// //   export function useCurrentUser() {
// //     return useContext(AuthenticationContext)
// //   }
