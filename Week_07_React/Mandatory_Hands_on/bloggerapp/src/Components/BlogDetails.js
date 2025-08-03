import React from "react";

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: "React Conditional Rendering", author: "Chris Evans" },
    { id: 2, title: "Hooks vs Classes", author: "Emily Watson" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title} - {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
