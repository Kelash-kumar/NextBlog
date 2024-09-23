import Header from "./components/Header";
import BlogList from "./components/BlogPostList";
const posts = [
  {
    title: "The Future of Web Development",
    description:
      "Explore the emerging trends and technologies shaping the future of web development in 2024 and beyond.",
    imageUrl: "https://via.placeholder.com/400x200?text=Web+Development",
    author: "Alice Johnson",
    date: "September 21, 2024",
  },
  {
    title: "Mastering CSS Grid and Flexbox",
    description:
      "A deep dive into the CSS layout models: Grid and Flexbox, and when to use them in modern web design.",
    imageUrl: "https://via.placeholder.com/400x200?text=CSS+Grid+&+Flexbox",
    author: "Robert Williams",
    date: "September 10, 2024",
  },
  {
    title: "JavaScript ES2024 Features You Need to Know",
    description:
      "Learn about the latest ECMAScript 2024 features, including new syntax and performance improvements.",
    imageUrl: "https://via.placeholder.com/400x200?text=JavaScript+ES2024",
    author: "Emily Davis",
    date: "August 29, 2024",
  },
  {
    title: "Building Scalable Microservices with Node.js",
    description:
      "Discover how to build and deploy scalable microservices using Node.js and best practices for architecture.",
    imageUrl: "https://via.placeholder.com/400x200?text=Node.js+Microservices",
    author: "Michael Brown",
    date: "July 15, 2024",
  },
  {
    title: "React 18: New Features and Improvements",
    description:
      "React 18 is here with exciting new features like concurrent rendering, automatic batching, and more.",
    imageUrl: "https://via.placeholder.com/400x200?text=React+18",
    author: "Sarah Johnson",
    date: "June 5, 2024",
  },
  {
    title: "Getting Started with TypeScript in 2024",
    description:
      "An introduction to TypeScript for developers looking to add type safety to their JavaScript projects.",
    imageUrl: "https://via.placeholder.com/400x200?text=TypeScript",
    author: "David Lee",
    date: "May 22, 2024",
  },
  {
    title: "Web Accessibility: Why It Matters",
    description:
      "Learn about web accessibility standards and how to make your website more inclusive for all users.",
    imageUrl: "https://via.placeholder.com/400x200?text=Web+Accessibility",
    author: "Laura Smith",
    date: "April 18, 2024",
  },
  {
    title: "A Guide to Serverless Architecture",
    description:
      "Understand the pros and cons of serverless architecture and how it can benefit your applications.",
    imageUrl: "https://via.placeholder.com/400x200?text=Serverless+Architecture",
    author: "Kevin White",
    date: "March 10, 2024",
  },
  {
    title: "Introduction to Machine Learning with JavaScript",
    description:
      "Learn how to get started with machine learning in JavaScript using popular libraries like TensorFlow.js.",
    imageUrl: "https://via.placeholder.com/400x200?text=Machine+Learning",
    author: "Sophia Martinez",
    date: "February 20, 2024",
  },
  {
    title: "GraphQL vs REST: Which API Style is Right for You?",
    description:
      "A detailed comparison between GraphQL and REST, helping you choose the best API design for your projects.",
    imageUrl: "https://via.placeholder.com/400x200?text=GraphQL+vs+REST",
    author: "James Anderson",
    date: "January 15, 2024",
  },
];
export default function Home() {
  return (
   <>
  <Header/>
  <BlogList posts={posts}/>
   </>
  );
}
