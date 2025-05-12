"use client";

import { useAudioContext } from "@/context/AudioContext";
import React from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

function ToogleAudio() {
	const { toggle, playing } = useAudioContext();

	return (
		<div className="fixed right-4 lg:right-[30rem] bottom-10">
			<button
				onClick={toggle}
				className={`flex justify-center items-center w-fit rounded-full bg-primary p-2 text-white z-50 ${
					playing ? "animate-spin" : ""
				}`}
			>
				{playing ? <FaPauseCircle /> : <FaPlayCircle />}
			</button>
		</div>
	);
}

export default ToogleAudio;
