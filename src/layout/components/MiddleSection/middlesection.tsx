import { motion } from "framer-motion";
import React, { useState } from "react";
import "./middlesection.scss";

function MiddleSection() {
  return (
    <section className="middlesection">
      <div className="middlesection__container wrapper">
        <h2>
          Transforming Ideas Into powerful
          <br /> solutions
        </h2>
        <p>
          As a fullstack developer, I can bring your vision to life with cutting
          edge technology.
        </p>
        <div>
          <a
            href="mailto: tojo.joseph18@gmail.com"
            className="btn"
            style={{
              borderRadius: "10px",
              cursor: "pointer",
              display: "inline-block",
              backgroundColor: "#FFFFFF",
            }}
          >
            <h3>COLLABORATE</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MiddleSection;
