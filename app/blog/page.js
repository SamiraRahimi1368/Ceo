"use client";
import React from "react";
import Link from "next/link";
import RegistrationStepper from "@/Components/Index/RegistrationStepper";

const Blog = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to Next.js",
      slug: "introduction-to-nextjs",
    },
    {
      id: 2,
      title: "Getting Started with React Hooks",
      slug: "getting-started-with-react-hooks",
    },
    {
      id: 3,
      title: "CSS-in-JS with Styled Components",
      slug: "css-in-js-with-styled-components",
    },
  ];
//   return <RegistrationStepper />;

  return (
    <div className="container mx-auto flex">
      <div className="sidebar w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="list-none">
          <li className="mb-2">
            <Link href="/category/react">
              <span className="text-blue-600 hover:text-blue-800">React</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/category/nextjs">
              <span className="text-blue-600 hover:text-blue-800">Next.js</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/category/css">
              <span className="text-blue-600 hover:text-blue-800">CSS</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="content w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Recent Blog Posts</h2>
        <ul className="list-none">
          {blogPosts.map((post) => (
            <li key={post.id} className="mb-2">
              <Link href={`/blog/${post.slug}`}>
                <span className="text-blue-600 hover:text-blue-800">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
