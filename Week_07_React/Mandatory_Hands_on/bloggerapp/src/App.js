import React, { useState } from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {
  const [view, setView] = useState("books");
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>

      <button onClick={() => setView("books")}>Show Books</button>
      <button onClick={() => setView("blogs")}>Show Blogs</button>
      <button onClick={() => setView("courses")}>Show Courses</button>

      <hr />

      {/* Method 1: if-else */}
      {view === "books" && <BookDetails />}
      {view === "blogs" && <BlogDetails />}
      {view === "courses" && <CourseDetails />}

      <hr />

      {/* Method 2: Element Variable */}
      <h3>Conditional Rendering using Element Variables</h3>
      {(() => {
        let content;
        if (view === "books") {
          content = <BookDetails />;
        } else if (view === "blogs") {
          content = <BlogDetails />;
        } else {
          content = <CourseDetails />;
        }
        return content;
      })()}

      <hr />

      {/* Method 3: Ternary Operator */}
      <h3>Conditional Rendering using Ternary</h3>
      {showCourses ? <CourseDetails /> : <p>Courses are hidden</p>}
      <button onClick={() => setShowCourses(!showCourses)}>
        {showCourses ? "Hide Courses" : "Show Courses"}
      </button>
    </div>
  );
}

export default App;
