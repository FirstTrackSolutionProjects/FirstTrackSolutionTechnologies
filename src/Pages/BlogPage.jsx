// BlogsPage.js
import React, { useState } from 'react';
import { useEffect } from "react";
import BlogPost from '../Components/BlogPost'

const BlogPage = () => {
    useEffect(() => {
        document.title = "Blogs - First Track Solution Technologies";
    }, []); 
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'The Art and Science of Web Designing',
      content: 'Web designing is both an art and a science. It requires a creative eye to design visually appealing layouts and a technical mind to ensure these designs are functional and accessible. Whether you are building a personal blog, an e-commerce site, or a corporate website, understanding the principles of web design is essential..',
      imgUrl:'images/blog1.jpg',
      email: 'firsttracksolutiontechnologies@gmail.com',
      date: '2024-07-18',
      comments: []
    },
    {
      id: 2,
      title: 'The Ever-Evolving World of Information Technology',
      content: 'Information Technology (IT) is a dynamic field that continually evolves, driving innovation and transforming how we live and work. From the early days of computing to the current era of artificial intelligence and cloud computing, IT has been at the forefront of technological advancement. This blog explores the key aspects of IT, its current trends, and its future prospects',
      imgUrl:'images/career.jpg',
      email: 'firsttracksolutiontechnologies@gmail.com',
      date: '2024-07-17',
      comments: []
    }
  ]);

  const addComment = (blogId, comment) => {
    setBlogs(blogs.map(blog => 
      blog.id === blogId ? { ...blog, comments: [...blog.comments, comment] } : blog
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-inter">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      {blogs.map(blog => (
        <BlogPost key={blog.id} blog={blog} addComment={addComment} />
      ))}
    </div>
  );
};

export default BlogPage;
