import { motion } from "framer-motion";
import React from "react";

function Technology(props: any) {
  return (
    <motion.li
      key={props.tech.tech_id}
      variants={props.variants}
      initial={props.initial}
      whileInView={props.animate}
      viewport={{
        once: true,
      }}
      custom={props.index}
    >
      <h6>{props.tech.tech_name}</h6>
    </motion.li>
  );
}

export default Technology;
