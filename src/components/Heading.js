import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
export default function Heading({ heading, description }) {
  return (
    <div>
      <motion.div
        initial={{ transform: "translateY(10%)", opacity: 0 }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ ease: "easeIn", duration: 1 }}
        style={{
          fontSize: 150,
          fontWeight: "bold",
          background:
            "linear-gradient(to bottom, #5b46af60 0%, transparent 70%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {heading}
      </motion.div>
      <div className="container px-5 text-center">{description}</div>
    </div>
  );
}
