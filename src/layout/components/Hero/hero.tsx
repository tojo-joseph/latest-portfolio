import React, { useState } from "react";
import "./hero.scss";
import HeroCircle from "../../assets/images/hero-circle.png";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/blue-stars-white.png";

function Hero() {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (hovered) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setPosition({ x, y });
    }
  };

  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <motion.div
          className="hero__left"
          initial={{ opacity: 0, scale: 0.5, y: "-50" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ flex: 1, textAlign: "left" }}
        >
          <h1>HELLO</h1>

          <p>
            Welcome to my portfolio! I specialize in fullstack development,
            creating innovative and user-friendly web applications.
          </p>
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 16px rgba(255, 255, 255, 0.9)",
              backgroundPosition: `${position.x}px ${position.y}px`,
              transition: { duration: 0 },
            }}
            style={{
              position: "absolute",
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
              display: "inline-block",
              transition: "0.2s ease-in-out",
              // backgroundImage: `url(${bgImage})`,
              // backgroundSize: "cover",
              // backgroundPosition: `${position.x}px ${position.y}px`,
              backgroundColor: "#FFFFFF",
            }}
          >
            <motion.a
              href="mailto: tojo.joseph18@gmail.com"
              className="btn"
              onMouseOver={() => setHovered(true)}
              onMouseLeave={() => {
                setHovered(false);
                setPosition({ x: 0, y: 0 });
              }}
              onMouseMove={handleMouseMove}
              whileTap={{ scale: 0.9 }}
              style={{
                borderRadius: "10px",
                cursor: "pointer",
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
                transition: "0.2s ease-in-out",
                // backgroundImage: `url(${bgImage})`,
                // backgroundSize: "cover",
                // backgroundPosition: `${position.x}px ${position.y}px`,
                backgroundColor: "#FFFFFF",
              }}
            >
              <h3>CONNECT</h3>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={HeroCircle} alt="" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
