import React from "react";
import MainProfile from "./section/MainProfile";
import EventDetails from "./section/EventDetails";
import GuestBook from "./section/GuestBook";
import DigitalGift from "./section/DigitalGift";
import Clossing from "./section/Clossing";
import Opening from "./section/Opening";
import ToogleAudio from "@/components/ToogleAudio";
import BtnTop from "@/components/BtnTop";

export default function TempV1() {
	

	return (
		<>
			<Opening />
			<MainProfile />
			<EventDetails />
			<GuestBook />
			<DigitalGift />
			<Clossing />
			<ToogleAudio />
			<BtnTop /> 
		</>
	);
}
