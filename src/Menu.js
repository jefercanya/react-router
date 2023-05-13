import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

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
  return (
    <Container>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {routes.map(route => (
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
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
}


const routes = [];
routes.push({
  to: '/',
  text: 'Home',
});
routes.push({
  to: '/blog',
  text: 'Blog',
});
routes.push({
  to: '/profile',
  text: 'Profile',
});

export { Menu };
