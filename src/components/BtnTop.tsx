"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";
import * as motion from "motion/react-client";

function BtnTop() {

	return (
		<div className="fixed right-4 bottom-40">
			<motion.button
        whileHover={{ scale: 1.2 }}
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className={`flex justify-center items-center w-fit rounded-full bg-primary p-2 text-white z-50 cursor-pointer`}
			>
        <FaArrowUp className="text-md"/>
      </motion.button>
		</div>
	);
}

export default BtnTop;
