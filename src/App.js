import { HashRouter, Routes, Route , BrowserRouter} from 'react-router-dom';
import { Menu } from './Menu';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { BlogPost } from './BlogPost';
import { ProfilePage } from './ProfilePage';

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
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
