import React from "react";
import "./Skills.css";

const Languages = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column has-text-centered skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/html.png")}
              alt="html"
            />
            <h2>
              <strong>HTML</strong>
            </h2>
          </div>

          <div className="column has-text-centered skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/css.svg")}
              alt="css"
            />
            <h2>
              <strong>CSS</strong>
            </h2>
          </div>

          <div className="column has-text-centered skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/js.png")}
              alt="js"
            />
            <h2>
              <strong>Javascript</strong>
            </h2>
          </div>

          <div className="column has-text-centered skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/reactjs.png")}
              alt="reactjs"
            />
            <h2>
              <strong>React JS</strong>
            </h2>
          </div>

          <div className="column has-text-centered skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/java.png")}
              alt="java"
            />
            <h2>
              <strong>Java</strong>
            </h2>
          </div>

          <div className="column has-text-centered skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/mysql.png")}
              alt="mySql"
            />
            <h2>
              <strong>MySql</strong>
            </h2>
          </div>

          <div className="column has-text-centered skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/tools/android_studio.png")}
              alt="android studio"
            />
            <h2>
              <strong>Android Studio</strong>
            </h2>
          </div>

          <div className="column has-text-centered skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/tools/git.png")}
              alt="git"
            />
            <h2>
              <strong>Git</strong>
            </h2>
          </div>

          <div className="column has-text-centered skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/tools/unity.png")}
              alt="Unity3D"
            />
            <h2>
              <strong>Unity3D</strong>
            </h2>
          </div>

					<div className="column has-text-centered skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/csharp.png")}
              alt="C#"
            />
            <h2>
              <strong>C#</strong>
            </h2>
          </div>

          <div className="column has-text-centered holdering skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/mongodb.png")}
              alt="mongo"
            />
            <h2>
              <strong>MongoDB</strong>
            </h2>
          </div>

          <div className="column has-text-centered holdering skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/blender.png")}
              alt="blender"
            />
            <div className="centered-mongo blinker">Learning!</div>
            <h2>
              <strong>Blender</strong>
            </h2>
          </div>

          <div className="column has-text-centered holdering skill-hover is-narrow right-marg">
            <img
              className="lang-size"
              src={require("../../assets/nodejs.png")}
              alt="nodejs"
            />
            <h2>
              <strong>Node JS</strong>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
