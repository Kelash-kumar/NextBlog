import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <p className="text-gray-400">
              We are a blog site sharing knowledge on various topics like web development, data science, and more.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-gray-200">
                <a href="#">Home</a>
              </li>
              <li className="mb-2 hover:text-gray-200">
                <a href="#">Blogs</a>
              </li>
              <li className="mb-2 hover:text-gray-200">
                <a href="#">About</a>
              </li>
              <li className="mb-2 hover:text-gray-200">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-gray-200">
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li className="mb-2 hover:text-gray-200">Phone: +123 456 7890</li>
              <li className="mb-2 hover:text-gray-200">
                Address: 123 Blog Street, Web City
              </li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <ul className="flex space-x-4 text-gray-400">
              <li className="hover:text-gray-200">
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-2v-8h2v8zm-1-9.3c-.77 0-1.4-.63-1.4-1.4s.63-1.4 1.4-1.4 1.4.63 1.4 1.4-.63 1.4-1.4 1.4zm12.5 9.3h-2v-4.4c0-1.1-.9-2-2-2s-2 .9-2 2v4.4h-2v-8h2v1.3c.65-.83 1.67-1.3 2.75-1.3 2.04 0 3.25 1.68 3.25 3.75v4.25zm-4.25-11.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </a>
              </li>
              <li className="hover:text-gray-200">
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 5.924c-.793.354-1.646.593-2.538.7a4.463 4.463 0 0 0 1.961-2.463 9.08 9.08 0 0 1-2.828 1.079 4.48 4.48 0 0 0-7.62 4.09 12.732 12.732 0 0 1-9.26-4.7 4.48 4.48 0 0 0 1.39 5.967c-.69-.022-1.343-.212-1.91-.529v.053a4.486 4.486 0 0 0 3.587 4.396c-.59.161-1.205.247-1.83.247-.45 0-.888-.044-1.316-.126a4.486 4.486 0 0 0 4.188 3.12 9.006 9.006 0 0 1-5.594 1.93 9.055 9.055 0 0 1-1.073-.064 12.743 12.743 0 0 0 6.9 2.024c8.283 0 12.814-6.86 12.814-12.814 0-.196-.003-.392-.011-.586a9.16 9.16 0 0 0 2.256-2.333z" />
                  </svg>
                </a>
              </li>
              <li className="hover:text-gray-200">
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 6.627 5.374 12 12 12s12-5.373 12-12c0-6.627-5.374-12-12-12zm5.297 9.209v.368c0 3.745-2.848 8.065-8.065 8.065-1.602 0-3.09-.464-4.345-1.261.224.027.449.041.678.041 1.329 0 2.554-.453 3.527-1.215-1.239-.022-2.283-.84-2.644-1.962.173.034.35.053.533.053.257 0 .505-.035.74-.097-1.298-.261-2.274-1.406-2.274-2.779v-.035c.383.214.822.343 1.289.358-.763-.51-1.267-1.378-1.267-2.366 0-.52.14-.999.385-1.414 1.406 1.725 3.508 2.857 5.88 2.975-.048-.208-.071-.428-.071-.65 0-1.578 1.28-2.858 2.857-2.858.822 0 1.566.348 2.088.902.652-.127 1.267-.367 1.82-.695-.214.667-.668 1.226-1.259 1.579.58-.07 1.134-.223 1.65-.454-.385.576-.87 1.081-1.432 1.486z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} BlogSite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
