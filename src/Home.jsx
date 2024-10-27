import { useState, useEffect } from "react";
import undraw_dev_focus_re_6iwt from "./assets/icons/undraw_dev_focus_re_6iwt.svg";
import python from "./assets/icons/python.png";
import laravel from "./assets/icons/laravel.png";
import bootstrap from "./assets/icons/bootstrap.png";
import tailwind from "./assets/icons/tailwind.png";
import react from "./assets/icons/react.png";
import mysql from "./assets/icons/mysql.png";
import html from "./assets/icons/html.png";
import javascript from "./assets/icons/javascript.png";
import css from "./assets/icons/css.png";
import php from "./assets/icons/php.png";
import postgresql from "./assets/icons/postgresql.png";
import canva from "./assets/icons/canva.png";
import figma from "./assets/icons/figma.png";
import codeIgniter from "./assets/icons/codeIgniter.png";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the first item

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const buttons = [
    { id: 1, label: "1", href: "#item1" },
    { id: 2, label: "2", href: "#item2" },
    { id: 3, label: "3", href: "#item3" },
    { id: 4, label: "4", href: "#item4" },
  ];

  const buttons_second = [
    { id: 1, label: "1", href: "#2item1" },
    { id: 2, label: "2", href: "#2item2" },
  ];

  const skillIcons = [
    canva,
    figma,
    html,
    javascript,
    css,
    php,
    python,
    mysql,
    postgresql,
    bootstrap,
    tailwind,
    laravel,
    codeIgniter,
    react,
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [" web designer", " web developer", " data analyst"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [phrases]);

  return (
    <div className="bg-base-100">
      <div className="py-18 lg:py-24 content h-screen ">
        <div className="flex flex-col md:flex-row pt-[10vh] md:pt-[20vh] lg:px-[10vw]">
          <div className="w-full md:1/2 h-full">
            <section className="">
              <div className="flex flex-col lg:flex-row">
                <div className="row">
                  <h1>Hi, I'm aiming to be&nbsp;</h1>
                </div>
                <div className="row">
                  <h1>
                    a&nbsp;{" "}
                    {phrases.map((phrase, index) => (
                      <span
                        key={index}
                        className={`scrolling-fade text-accent ${
                          currentIndex === index ? "active" : ""
                        }`}
                      >
                        {phrase}
                      </span>
                    ))}
                  </h1>
                </div>
              </div>
            </section>
            <section className="md:mt-0 lg:mt-0 sm:mt-0 mt-[5vh]">
              <h4>
                Embracing humble learning for Data with a passion for Web
                Development and Design.
              </h4>
            </section>
            <section className="">
              <div className="flex flex-col md:flex-row">
                <a href="" className="md:mr-4 row btn btn-info">
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/endin-rahmanda/"
                  className="mt-4 md:mt-0 row btn btn-default"
                >
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
          <div className="w-full md:1/2 justify-center">
            <section className="relative">
              <object
                className="absolute inset-0 w-full"
                type="image/svg+xml"
                data={undraw_dev_focus_re_6iwt}
                aria-label="Me"
              >
                Your browser does not support SVG
              </object>
            </section>
          </div>
        </div>
      </div>
      <div className="py-6">
        <section className="py-[25vh]">
          <h2 className=""> Education </h2>

          <ul className="text-primary timeline py-24 timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end ">
                <time className="font-mono italic">2019</time>
                <div className="text-lg font-bold">
                  Teknik Komputer dan Jaringan
                </div>
                Pursuing my education in Computer Network Engineering and earned
                a MikroTik certification. I have learned the fundamentals of
                computer networking, server configuration and management,
                network security, troubleshooting, and modern communication
                technologies, equipping myself to create connected and efficient
                solutions.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10 text-start">
                <time className="font-mono italic text">Present</time>
                <div className="text-lg font-black">Informatika</div>
                Currently studying Informatics, I am committed to learn as I
                explore programming, database management, web development, and
                data analysis.
              </div>
              <hr />
            </li>
          </ul>
        </section>
      </div>
      <div className="py-18 lg:py-24">
        <section className="py-24">
          <div className="py-20">
            <h2> Tools, Languages, Libraries, and Frameworks </h2>
          </div>
          <div className="h-full">
            <div className="pb-40 flex h-full flex-wrap p-8 justify-center lg:w-[80vw] lg:m-auto">
              {skillIcons.map((icon, index) => {
                const fileName = icon.split("/").pop().split(".")[0]; // Extract the name without extension
                return (
                  <div key={index} className="shadow-me lg:m-6">
                    <figure>
                      <img
                        src={icon}
                        alt={`${fileName} icon`} // Use the extracted file name
                        className="w-[8vw] object-cover m-4 lg:w-[5vw]"
                      />
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="bg-base-300 w-full">
        <section className="py-[25vh]">
          <h2 className="pb-[8vh]">Projects</h2>
          <div role="tablist" className="tabs tabs-lifted justify-center">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Design"
            />
            <div
              role="tabpanel"
              className="tab-content w-[85vw] bg-base-100 border-base-300 rounded-box p-6"
            >
              <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                  <div className="mockup-browser bg-base-300 border w-full">
                    <div className="mockup-browser-toolbar">
                      <div className="input">
                        <a href="https://www.figma.com/proto/JtPi4h9kVXAbf0sVujErOK/Evangeline?node-id=12-64&node-type=canvas&t=vyKd8Y5hLNbJaDoO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1">
                          evangeline landing page
                        </a>
                      </div>
                    </div>
                    <div className="bg-base-200 flex justify-center h-full">
                      <div className="iframe-container">
                        <iframe src="https://embed.figma.com/proto/JtPi4h9kVXAbf0sVujErOK/Evangeline?node-id=12-64&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                  <div className="mockup-browser bg-base-300 border w-full">
                    <div className="mockup-browser-toolbar">
                      <div className="input">
                        <a href="https://www.figma.com/proto/zWQA4u3faPjKAyvxNHQo33/iPusnas?node-id=78-6003&node-type=canvas&t=r7K0I8lYjLOaeANR-1&scaling=min-zoom&content-scaling=fixed&page-id=16%3A818&starting-point-node-id=78%3A5985">
                          iPusnas
                        </a>
                      </div>
                    </div>
                    <div className="bg-base-200 flex justify-center h-full">
                      <iframe
                        src="https://embed.figma.com/proto/zWQA4u3faPjKAyvxNHQo33/iPusnas?node-id=56-727&node-type=canvas&scaling=min-zoom&content-scaling=fixed&page-id=16%3A817&starting-point-node-id=56%3A727&embed-host=share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                  <div className="mockup-browser bg-base-300 border w-full">
                    <div className="mockup-browser-toolbar">
                      <div className="input">
                        <a href="https://www.figma.com/proto/oNbKJpMzz99Tp7cuvOaMdc/Untitled?node-id=7-5&node-type=canvas&t=T7jcfJFgbVasYcsp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A5">
                          SIAPkerja
                        </a>
                      </div>
                    </div>
                    <div className="bg-base-200 flex justify-center h-full">
                      <div className="iframe-container">
                        <iframe src="https://embed.figma.com/proto/oNbKJpMzz99Tp7cuvOaMdc/Untitled?node-id=15-364&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A5&embed-host=share" />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                  <div className="mockup-browser bg-base-300 border w-full">
                    <div className="mockup-browser-toolbar">
                      <div className="input">
                        <a href="https://www.figma.com/proto/kIAaTUzJrf9Wzy46IzZcch/Buttons?node-id=2-926&node-type=canvas&t=Cazb2mvTQQ7Muu8Q-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
                          Button Somponents
                        </a>
                      </div>
                    </div>
                    <div className="bg-base-200 flex justify-center h-full">
                      <iframe src="https://embed.figma.com/proto/kIAaTUzJrf9Wzy46IzZcch/Buttons?node-id=2-926&node-type=frame&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share"></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full justify-center gap-2 py-2">
                {buttons.map((button) => (
                  <a
                    key={button.id}
                    href={button.href}
                    className={`btn btn-square ${
                      activeIndex === button.id ? "bg-pink-500" : ""
                    }`}
                    onClick={() => handleButtonClick(button.id)}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Web"
            />
            <div
              role="tabpanel"
              className="tab-content w-[85vw] bg-base-100 border-base-300 rounded-box p-6"
            >
              <div className="carousel w-full">
                <div id="2item1" className="carousel-item w-full">
                  <div className="mockup-browser bg-base-300 border w-full">
                    <div className="mockup-browser-toolbar">
                      <div className="input">
                        <a href="https://tanada.vercel.app/">SMK Tanada</a>
                      </div>
                    </div>
                    <div className="bg-base-200 flex justify-center h-full">
                      <div className="iframe-container">
                        <iframe
                          src="https://tanada.vercel.app"
                          title="Tanada Website"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="2item2" className="carousel-item w-full">
                  <div className="mockup-browser bg-base-300 border w-full">
                    <div className="mockup-browser-toolbar">
                      <div className="input">
                        <a href="https://donxuiqote.github.io/planeDash/">
                          Plane Dash
                        </a>
                      </div>
                    </div>
                    <div className="bg-base-200 flex justify-center h-full">
                      <iframe
                        src="https://donxuiqote.github.io/planeDash"
                        title="Plane Dash"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center gap-2 py-2">
                {buttons_second.map((button) => (
                  <a
                    key={button.id}
                    href={button.href}
                    className={`btn btn-square ${
                      activeIndex === button.id ? "bg-pink-500" : ""
                    }`}
                    onClick={() => handleButtonClick(button.id)}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="py-6 bg-base-300 ">
        <section className="py-[25vh]">
          <h2 className="pb-[10vh]"> Certificate </h2>

          <div className="flex justify-center">
            <ul className="menu menu-s bg-base-200 rounded-lg w-full md:w-1/2">
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  resume.pdf
                </a>
              </li>
              <li>
                <details open>
                  <summary>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                    Language Proficiency
                  </summary>
                  <ul>
                    <li>
                      <details open>
                        <summary>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                            />
                          </svg>
                          English
                        </summary>
                        <ul>
                          <li>
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                              </svg>
                              TOEIC
                            </a>
                          </li>
                          <li>
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                              </svg>
                              EFL
                            </a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details open>
                  <summary>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                    BNSP Certificate
                  </summary>
                  <ul>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        Junior Web Developer
                      </a>
                    </li>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        Junior Network Adminstrator
                      </a>
                    </li>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        Local Area Network Engineering
                      </a>
                    </li>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        Junior Graphic Designer
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details open>
                  <summary>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                    MikroTik
                  </summary>
                  <ul>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        MikroTik Certified Network Associate
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details open>
                  <summary>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                    Others
                  </summary>
                  <ul>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        Volunteer BSTC
                      </a>
                    </li>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        Lomba Kompetensi Siswa Debat Bahasa Inggris
                      </a>
                    </li>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        VSGA Junior Network Administrator
                      </a>
                    </li>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        Peduly Volunteer
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="">
        <footer className="footer footer-center bg-neutral text-slate-100 p-4">
          <aside>
            <p>
            Developed by <a href="https://instagram.com/endxn" className="text-warning">Endin</a> | Features powered by <a className="text-warning"  href="https://daisyui.com/">DaisyUI</a>
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Home;
