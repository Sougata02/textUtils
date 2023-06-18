import React from "react";
export default function Navbar(props) {
  return (
    <>
      <nav
        class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            TextUtils
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="src/Component/About.jsx">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleBtn}
            />
            <label
              class={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              for="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
