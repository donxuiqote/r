// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";

function Navbar() {
  const [theme, setTheme] = useState("nord");
  const [notificationMessage, setNotificationMessage] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "night" ? "nord" : "night";
      const message =
        newTheme === "night"
          ? "You have successfully changed to night mode. 🌝"
          : "You have successfully changed to day mode. 🌞";
      setNotificationMessage(message);

      if (modalRef.current) {
        modalRef.current.showModal();
      }
      return newTheme;
    });
  };

  const logo = ["e", "n", "d", "i", "n"];

  return (
    <div className="navbar bg-base-content">
      <div className="navbar-start">
        <div className="navbar-start hidden lg:flex"></div>
      </div>
      <div className="border-base-300">
        <div className="my-1 flex w-full justify-center gap-1">
          {logo.map((char, index) => (
            <kbd key={index} className="kbd text-main">
              {char}
            </kbd>
          ))}
        </div>
      </div>
      <div className="navbar-end">
        <input
          type="checkbox"
          className="toggle theme-controller"
          onChange={toggleTheme}
          checked={theme === "night"}
        />
      </div>

      {/* Modal for theme change notification */}
      <dialog
        ref={modalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-primary">Theme Changed!</h3>
          <p className="py-4 text-secondary">{notificationMessage}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Navbar;
