import React from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Gym from "./Images/Gym.jpg";
import Prav from "./Images/Prav.jpeg";
import Three from "./Images/Three.avif";
import Shop from "./Images/Shop.avif";

import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  console.log("image", Gym);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 animate-fade-in">
                Praveen Sharma
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-200 ${
                      activeSection === item
                        ? "text-blue-600 font-semibold"
                        : ""
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                )
              )}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 ${
                  activeSection === item
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center"
      >
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm Praveen Sharma
                <span className="block text-blue-600 mt-2">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Crafting innovative web and mobile solutions with over 3 years
                of experience in full-stack development.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8 transform transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                  Ready to Grow?
                </h2>
                <p className="text-blue-800">Specializing in:</p>
                <ul className="mt-3 space-y-2 text-blue-700">
                  <li>✓ Custom Websites</li>
                  <li>✓ Mobile Apps</li>
                  <li>✓ E-commerce Solutions</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-200"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 animate-fade-in-right">
              <img
                src={Prav}
                alt="Praveen Sharma"
                className="rounded-full shadow-xl w-3/4 mx-auto lg:w-full transform hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            About Me
          </h2>
          <div className="prose prose-lg mx-auto max-w-3xl animate-fade-in-up">
            <p className="text-gray-600">
              I'm a passionate Full Stack Developer with over 3 years of
              experience, based in India. I specialize in building high-quality
              web and mobile applications using modern technologies like
              React.js, React Native, and Node.js.
            </p>
            <p className="text-gray-600 mt-4">
              My journey began with a curiosity for coding, leading me to master
              both frontend and backend development. I've worked on diverse
              projects—from e-commerce platforms to interactive 3D
              visualizations—delivering solutions that are not only functional
              but also visually appealing. When I'm not coding, you can find me
              exploring new tech trends or contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                skills: [
                  "React.js",
                  "React Native",
                  "Three.js",
                  "HTML/CSS",
                  "JavaScript",
                ],
              },
              {
                title: "Backend",
                skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
              },
              {
                title: "Tools & Others",
                skills: ["Git", "Docker", "AWS", "Agile/Scrum"],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ShopNow E-commerce",
                description:
                  "A responsive e-commerce platform with real-time cart updates, payment integration, and admin dashboard built using React, Node.js, and MongoDB.",
                image: Shop,
              },
              {
                title: "3D Furniture Viewer",
                description:
                  "An interactive web app allowing users to visualize furniture in 3D, with customizable colors and angles, developed using Three.js and React.",
                image: Three,
              },
              {
                title: "FitTrack Mobile App",
                description:
                  "A React Native fitness app with workout tracking, nutrition logging, and progress analytics, integrated with a Node.js backend.",
                image: Gym,
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-all duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Get In Touch
          </h2>
          <div className="flex flex-col items-center space-y-4 mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">📞</span>
              <a
                href="tel:+917310736712"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                +91-7310736712
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-gray-600" />
              <a
                href="mailto:praying.sharma@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                praying.sharma@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            {[
              { href: "https://github.com/Praveen1692", Icon: Github },
              {
                href: "https://www.linkedin.com/in/praveen-sharma-1171061aa/",
                Icon: Linkedin,
              },
              { href: "mailto:praying.sharma@gmail.com", Icon: Mail },
            ].map(({ href, Icon }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 animate-fade-in">
            © {new Date().getFullYear()} Praveen Sharma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
