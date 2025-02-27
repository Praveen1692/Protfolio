import React from "react";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import Gym from "./Images/Gym.jpg";
import Prav from "./Images/Prav.jpeg";
import Three from "./Images/Three.avif";
import Shop from "./Images/Shop.avif";
import { Tranquiluxe } from "uvcanvas";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "reviews",
        "contact",
      ];
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
    <div
      className={`min-h-screen scroll-smooth transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Tranquiluxe Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0, // Lowered z-index to ensure it stays behind content
          pointerEvents: "none",
        }}
      >
        <Tranquiluxe />
      </div>

      {/* Navigation */}
      <nav
        className={`shadow-md fixed w-full top-0 z-50 transition-all duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold animate-fade-in ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Praveen Sharma
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "reviews",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`hover:text-blue-500 hover:scale-105 transition-all duration-200 ${
                    activeSection === item
                      ? "text-blue-500 font-semibold"
                      : isDarkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {isDarkMode ? (
                  <Sun size={24} className="text-yellow-400" />
                ) : (
                  <Moon size={24} className="text-gray-700" />
                )}
              </button>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className={`transition-colors duration-200 ${
                    isDarkMode
                      ? "text-gray-300 hover:text-blue-500"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
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
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            {["home", "about", "skills", "projects", "reviews", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    activeSection === item
                      ? "text-blue-500 font-semibold bg-blue-900/20"
                      : isDarkMode
                      ? "text-gray-300 hover:text-blue-500 hover:bg-gray-700"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 animate-fade-in-up">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Hi, I'm Praveen Sharma
                <span className="block text-blue-600 mt-2">
                  Full Stack Developer
                </span>
              </h1>
              <p
                className={`text-xl mb-8 max-w-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Crafting innovative web and mobile solutions with over 3 years
                of experience in full-stack development.
              </p>
              <div
                className={`border-l-4 border-blue-600 p-6 rounded-r-lg mb-8 transform transition-all duration-300 hover:shadow-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-blue-50"
                }`}
              >
                <h2
                  className={`text-2xl font-semibold mb-3 ${
                    isDarkMode ? "text-blue-400" : "text-blue-900"
                  }`}
                >
                  Ready to Grow?
                </h2>
                <p className={isDarkMode ? "text-gray-300" : "text-blue-800"}>
                  Specializing in:
                </p>
                <ul
                  className={`mt-3 space-y-2 ${
                    isDarkMode ? "text-blue-300" : "text-blue-700"
                  }`}
                >
                  <li>✓ Custom Websites</li>
                  <li>✓ Mobile Apps</li>
                  <li>✓ E-commerce Solutions</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact"
                  className={`${
                    isDarkMode
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  } px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-200`}
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className={`${
                    isDarkMode
                      ? "border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10"
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  } px-6 py-3 rounded-lg hover:scale-105 transition-all duration-200`}
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 animate-fade-in-right">
              <img
                src={Prav}
                alt="Praveen Sharma"
                className="rounded-full shadow-xl w-1/2 mx-auto lg:w-4/5 transform hover:scale-[1.02] transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 relative z-10 ${
          isDarkMode ? "bg-gray-800/90" : "bg-white/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <div className="prose prose-lg mx-auto max-w-3xl animate-fade-in-up">
            <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
              I'm a passionate Full Stack Developer with over 3 years of
              experience, based in India. I specialize in building high-quality
              web and mobile applications using modern technologies like
              React.js, React Native, and Node.js.
            </p>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-600 mt-4"}>
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
      <section
        id="skills"
        className={`py-20 relative z-10 ${
          isDarkMode ? "bg-gray-900/90" : "bg-gray-50/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
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
                className={`p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className={`${
                        isDarkMode
                          ? "text-gray-300 hover:text-blue-400"
                          : "text-gray-600 hover:text-blue-600"
                      } transition-colors duration-200`}
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
      <section
        id="projects"
        className={`py-20 relative z-10 ${
          isDarkMode ? "bg-gray-800/90" : "bg-white/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
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
                className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                  isDarkMode ? "bg-gray-900" : "bg-gray-50"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transform hover:scale-105 transition-all duration-300"
                />
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        className={`py-20 relative z-10 ${
          isDarkMode ? "bg-gray-900/90" : "bg-gray-50/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Client Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Vishal Singh",
                role: "E-commerce Business Owner",
                review:
                  "Praveen delivered an outstanding e-commerce platform for my business. His professionalism and attention to detail made the entire process smooth and efficient. Highly recommended!",
                rating: 5,
              },
              {
                name: "Kunal Gupta",
                role: "Startup Founder",
                review:
                  "Working with Praveen on our 3D visualization app was a game-changer. His technical expertise and creative problem-solving skills exceeded our expectations.",
                rating: 5,
              },
              {
                name: "Deepika Sharma",
                role: "Fitness Coach",
                review:
                  "The fitness app Praveen built for me is fantastic! It's user-friendly, fast, and exactly what my clients needed. His communication throughout the project was top-notch.",
                rating: 4,
              },
            ].map((review, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {review.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {review.role}
                    </p>
                  </div>
                </div>
                <p
                  className={`mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  "{review.review}"
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < review.rating
                          ? "text-yellow-400"
                          : isDarkMode
                          ? "text-gray-600"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 relative z-10 ${
          isDarkMode ? "bg-gray-900/90" : "bg-gray-50/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Get In Touch
          </h2>
          <div className="flex flex-col items-center space-y-4 mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                📞
              </span>
              <a
                href="tel:+917310736712"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                } transition-colors duration-200`}
              >
                +91-7310736712
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail
                size={20}
                className={isDarkMode ? "text-gray-300" : "text-gray-600"}
              />
              <a
                href="mailto:praying.sharma@gmail.com"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                } transition-colors duration-200`}
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
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                } transform hover:scale-110 transition-all duration-200`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section
        className={`py-8 shadow-inner relative z-10 ${
          isDarkMode ? "bg-gray-800/90" : "bg-white/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className={`text-center animate-fade-in ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            © {new Date().getFullYear()} Praveen Sharma. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;