import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { blogdata } from './blogdata'

function NestedRoutesPage() {
  return (
    <>
      <h1>BlogPage - Nested ROutes</h1>
      
      <Outlet/>

      <ul>
        {blogdata.map(post => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/nested-routes/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { NestedRoutesPage };
