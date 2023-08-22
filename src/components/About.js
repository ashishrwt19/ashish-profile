import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        HI
      </motion.div>
    </div>
  );
}
