// import { Route,  } from 'react-router-dom'
// import React from 'react'
// import Menu from './Navbar';
// // Một hàm fetch data từ server về đây?

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isAuth = true;
//   return (
//     <div className="App">
//       <Menu />
//       <Route {...rest} render={(props) => {
//         if (isAuth) {
//           return <Component />
//         }
//         else {
//           return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//         }
//       }} />
//     </div>

//   );
// }

// export default ProtectedRoute;