import React from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

function A_Starter() {

    const x = useMotionValue()
    const opacity = useTransform(x,[-100, 0, 100], [0, 1, 0])
    const list = { hidden: {opacity: 0}}
    const item = { hidden: { x: -10, opacity:0}}
    console.log(opacity);
  return (
    <>
      <h2>Introduction</h2>

      <motion.div
        className="circleBg bg-purple-700 w-24 h-24 rounded-full "
        animate={{
          x: 100,
          y: 100,
        }}
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 1.5,
        }}
        // drag="x"
        // dragConstraints={{
        //   left: 0,
        //   right: 100,
        // }}
      ></motion.div>

      <h2>Variants</h2>

      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item}/>
        <motion.li variants={item}/>
        <motion.li variants={item}/>
        <motion.li variants={item}/>
      </motion.ul>

      <h2>Motion Value</h2>
      <motion.div
        className=" bg-purple-700 w-24 h-24 rounded-full "
        drag="x"
        style={{x, opacity}}
      ></motion.div>

        <button onClick={()=> animate(".circleBg", {opacity:0})}>Fade</button>

    </>
  );
}

export default A_Starter;
