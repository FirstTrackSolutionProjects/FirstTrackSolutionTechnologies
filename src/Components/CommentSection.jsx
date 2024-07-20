// CommentSection.js
import React, { useState } from 'react';

const CommentSection = ({ blogId, comments, addComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      addComment(blogId, newComment);
      setNewComment('');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded mb-2">
            {comment}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No comments yet.</p>
      )}
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows="3"
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleAddComment}
      >
        Post Comment
      </button>
    </div>
  );
};

export default CommentSection;
