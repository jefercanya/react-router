import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useAuth } from './Hooks/auth';

// function Menu() {
//   return (
//     <nav>
//       <ul>
//         {routes.map(route => (
//           <li>
//             <NavLink
//               style={({ isActive }) => ({
//                 color: isActive ? 'red' : 'blue',
//               })}
//               to={route.to}
//             >
//               {route.text}
//             </NavLink>
//           </li>
//         ))}

//         {/* <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/blog">Blog</Link>
//         </li>
//         <li>
//           <Link to="/profile">Profile</Link>
//         </li> */}

//         {/* <li>
//           <NavLink
//             style={({ isActive }) => ({
//               color: isActive ? 'red' : 'blue',
//             })}
//             to="/"
//           >Home</NavLink>
//         </li>
//         <li>
//           <NavLink
//             style={({ isActive }) => ({
//               color: isActive ? 'red' : 'blue',
//             })}
//             to="/blog"
//           >Blog</NavLink>
//         </li>
//         <li>
//           <NavLink
//             style={({ isActive }) => ({
//               color: isActive ? 'red' : 'blue',
//             })}
//             to="/profile"
//           >Profile</NavLink>
//         </li> */}
//       </ul>
//     </nav>
//   );
// }

function Menu() {

  const auth = useAuth();

  /* return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {routes.map(route => {
              if (route.publicOnly && auth.user) return null;
              if (route.private && !auth.user) return null;
              
              return (
                <Nav.Item key={route.to}>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? 'red' : 'blue',
                    })}
                    className="nav-link"
                    to={route.to}
                  >
                    {route.text}
                  </NavLink>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  ); */

  return (
    
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {routes.map(route => {
              if (route.publicOnly && auth.user) return null;
              if (route.private && !auth.user) return null;
              
              return (
                <Nav.Item key={route.to}>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? 'red' : 'blue',
                    })}
                    className="nav-link"
                    to={route.to}
                  >
                    {route.text}
                  </NavLink>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
   
  );
}


const routes = [];
routes.push({
  to: '/',
  text: 'Home',
  private: false,
});
routes.push({
  to: '/blog',
  text: 'Blog',
  private: false,
});
routes.push({
  to: '/profile',
  text: 'Profile',
  private: true,
});
routes.push({
  to: '/nested-routes',
  text: 'Nested Routes',
  private: false,
});
routes.push({
  to: '/login',
  text: 'Login',
  private: false,
  publicOnly: true,
});
routes.push({
  to: '/logout',
  text: 'Logout',
  private: true,
});




export { Menu };
