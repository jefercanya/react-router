import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { blogdata } from './blogdata'
import { useAuth } from './Hooks/auth';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();


  const auth = useAuth();
  const blogpost = blogdata.find(post => post.slug === slug);
  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;
  
  //console.log(auth.user);


  // const returnToBlog = () => {
  //   navigate('/blog');
  // };

  const returnToBlog = (page) => {
    navigate(page);
    //navigate(-1);
  };


  return (
    <>
      {/* <button onClick={returnToBlog}>Volver al blog</button> */}
      <button onClick={() => returnToBlog('/blog')}>Volver al blog</button>

      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete && (
        <button>Eliminar blogpost</button>
      )}
    </>
  );
}

export { BlogPost };