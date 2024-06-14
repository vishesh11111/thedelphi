import React from "react";
import { motion } from "framer-motion";

const Container = ({ children }) => {
  return (
    <motion.div
      className="px-4 border border-l-2"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Container;
