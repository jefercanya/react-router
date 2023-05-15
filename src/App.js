import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Menu } from './Menu';
import { AuthProvider, AuthRoute } from './Hooks/auth'
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { BlogPost } from './BlogPost';
import { ProfilePage } from './ProfilePage';
import { NestedRoutesPage } from './NestedRoutesPage';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';

// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalalala -> Not Found
// /blog, /lalala -> Home

// function App() {
//   return (
//     <>
//       <HashRouter>
//         <Menu />

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/blog" element={<BlogPage />} />
//           <Route path="/blog/:slug" element={<BlogPost />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="*" element={<p>Not found</p>} />
//         </Routes>
//       </HashRouter>
//     </>
//   );
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="/nested-routes" element={<NestedRoutesPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              } 
            />


            <Route path="/login" element={<LoginPage />} />

            {/* <Route path="/logout" element={<LogoutPage />} /> */}

            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              } 
            />



            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
