import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/portfolio_logo.png";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@mui/material";
import bgImage from "../../assets/images/blue-stars-white.png";
import TableRowsIcon from "@mui/icons-material/TableRows";

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = (props: any) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
      style={{
        fontSize: "1.5rem",
        fontWeight: 700,
        cursor: "pointer",
        color: "black",
      }}
    >
      <Link
        href={props.href}
        style={{
          textDecoration: "none",
        }}
      >
        {props.title}
      </Link>
    </motion.div>
  );
};

function Navbar(props: any) {
  const navLinks = [
    { title: "About Me", href: "#about", ref: props.aboutRef },
    { title: "Projects", href: "#projects", ref: props.projectsRef },
    {
      title: "Testimonials",
      href: "#testimonials",
      ref: props.testimonialsRef,
    },
    {
      title: "Technologies",
      href: "#technologies",
      ref: props.technologiesRef,
    },
  ];
  const [showNav, setShowNav] = useState(false);

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

  const menuVars = {
    initial: {
      scaleY: 0,
      originY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <header className="navbar">
        <nav className="navbar__container wrapper">
          <a
            href="#"
            className="navbar__logo"
            onClick={() => setShowNav(false)}
          >
            <img src={Logo} alt="logo" />
          </a>

          <ul>
            <li onClick={() => setShowNav(false)}>
              <a
                href="#about"
                onClick={() => props.scrollToSection(props.aboutRef)}
              >
                About Me
              </a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a
                href="#projects"
                onClick={() => props.scrollToSection(props.projectsRef)}
              >
                Projects
              </a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a
                href="#testimonials"
                onClick={() => props.scrollToSection(props.testimonialsRef)}
              >
                Testimonials
              </a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a
                href="#technologies"
                onClick={() => props.scrollToSection(props.technologiesRef)}
              >
                Technologies
              </a>
            </li>
          </ul>
          <motion.div
            className="navbar__btns"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 16px rgba(255, 255, 255, 0.9)",
              backgroundPosition: `${position.x}px ${position.y}px`,
              transition: { duration: 0 },
            }}
            style={{
              // position: "absolute",
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
              // display: "inline-block",
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

          <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
            {/* <MenuIcon /> */}
            <TableRowsIcon />
          </div>
        </nav>

        <AnimatePresence>
          {showNav && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="position-fixed"
              style={{
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                color: "black",
                padding: "2.5rem",
                zIndex: 999,
              }}
            >
              <div
                className="d-flex"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="d-flex justify-content-between">
                  <h1
                    className=""
                    style={{
                      fontSize: "1.5rem",
                      color: "black",
                    }}
                  >
                    Portfolio
                  </h1>
                  <p
                    className=""
                    style={{
                      cursor: "pointer",
                      fontSize: "1.5rem",
                      color: "black",
                    }}
                    onClick={() => setShowNav(false)}
                  >
                    Close
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="d-flex flex-col h-full justify-content-center font-lora align-items-center"
                  style={{
                    flexDirection: "column",
                    height: "100%",
                    gap: "1rem",
                  }}
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div className="overflow-hidden">
                        <MobileNavLink
                          key={index}
                          title={link.title}
                          href={link.href}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Navbar;
