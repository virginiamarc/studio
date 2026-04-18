"use client";

import { useId, useRef, useState } from "react";
import { motion } from "framer-motion";
function Block({ x, y, ...props }) {
  return (
    <motion.path
      transform={`translate(${-32 * y + 96 * x} ${160 * y})`}
      d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
      {...props}
    />
  );
}

const GridPattern = ({ yOffset = 0, interactive = false, ...props }) => {
  let id = useId();
  let ref = useRef();
  let currentBlock = useRef();
  let counter = useRef(0);
  let [hoveredBlocks, setHoveredBlocks] = useState([]);
  let staticBlocks = [
    [1, 1],
    [2, 2],
    [4, 3],
    [6, 2],
    [7, 4],
    [5, 5],
  ];
  return (
    <svg ref={ref} aria-hidden="true" {...props}>
      <rect
        width="100%"
        height="100%"
        fill="url(#gradient)"
      />

      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C85ACF" />
          <stop offset="100%" stopColor="#6A2A82" />
        </linearGradient>
      </defs>

    </svg>
  );
};

export default GridPattern;
