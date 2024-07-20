// Blog.js
import React, { useState } from 'react';
import CommentSection from './CommentSection';

const BlogPost = ({ blog, addComment }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <div className='flex'>
        <div className='w-[60%]'>
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          <p className="text-gray-700 mb-4">{blog.content}</p>
          <div className="text-sm text-gray-500 mb-4">
            <p>Posted by: {blog.email}</p>
            <p>Date: {blog.date}</p>
          </div>
          <CommentSection blogId={blog.id} comments={blog.comments} addComment={addComment} />
        </div>
        <div className='w-[40%]'>
          <img src={blog.imgUrl} className='w-96 h-60'></img>
        </div>
      
      </div>
    </div>
  );
};

export default BlogPost;
