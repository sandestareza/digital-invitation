"use client";

import Image from "next/image";
import flowerBottom from "../assets/img/flowwer_2.png";
import flowerCenter from "../assets/img/flowwer_3.png";
import Container from "@/components/Container";
import * as motion from "motion/react-client";
import { PiMapPinAreaFill } from "react-icons/pi";
import { useCountdown } from "@/hook/useCountDown";
import { useMemo } from "react";

export default function EventDetails() {
	const targetDate = useMemo(() => new Date("2025-11-09T09:00:59Z"), []);
	const { days, hours, minutes, seconds } = useCountdown(targetDate);
	return (
		<Container className="pt-8 pb-16 min-h-screen px-4">
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-wiggle">
				<Image
					src={flowerBottom}
					alt="Bottom Decoration"
					className="absolute bottom-0 right-0 w-52"
				/>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
				className="mb-6"
			>
				<h1 className="text-xl text-center font-bold text-secondary font-pacifico">
					Save the date
				</h1>
				<motion.div
					whileHover={{ scale: 1.2, rotate: 10 }}
					className="flex justify-center"
				>
					<Image
						src={flowerCenter}
						alt="Couple Illustration"
						className="w-32 object-contain"
					/>
				</motion.div>
			</motion.div>
			<div className="flex justify-around items-center p-4 border-2 border-x-0 border-primary text-primary gap-4">
				<motion.p
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3 }}
					className="text-2xl font-bold font-bebas tracking-[1.5px]"
				>
					Minggu
				</motion.p>
				<div className="flex flex-col justify-center items-center border-4 border-t-0 border-b-0 border-primary px-6">
					<motion.p
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3 }}
						className="text-4xl font-bold font-bebas tracking-[1.5px]"
					>
						09
					</motion.p>
					<motion.p
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.5 }}
						className="text-2xl font-bold font-bebas tracking-[1.5px]"
					>
						November
					</motion.p>
				</div>
				<motion.p
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3 }}
					className="text-2xl font-bold font-bebas tracking-[1.5px]"
				>
					2025
				</motion.p>
			</div>
			<div className="grid grid-cols-4 gap-2 mt-4">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="flex flex-col justify-center items-center bg-secondary text-white shadow-2xl p-4 py-2 rounded-lg"
				>
					<p className="text-2xl font-bold font-bebas">{days}</p>
					<p className="text-sm font-light">Hari</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="flex flex-col justify-center items-center bg-secondary text-white shadow-2xl p-4 py-2 rounded-sm"
				>
					<p className="text-2xl font-bold font-bebas">{hours}</p>
					<p className="text-sm font-light">Jam</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="flex flex-col justify-center items-center bg-secondary text-white shadow-2xl p-4 py-2 rounded-sm"
				>
					<p className="text-2xl font-bold font-bebas">{minutes}</p>
					<p className="text-sm font-light">Menit</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="flex flex-col justify-center items-center bg-secondary text-white shadow-2xl p-4 py-2 rounded-sm"
				>
					<p className="text-2xl font-bold font-bebas">{seconds}</p>
					<p className="text-sm font-light">Detik</p>
				</motion.div>
			</div>
			<div className="mt-6 flex flex-col items-center">
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-sm text-center text-secondary"
				>
					Bertempat di:
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-sm text-center font-bold text-secondary px-6 mt-2"
				>
					Jl. Palembang - SP. Padang Km. 19 Desa Sako Rt 09 Kec.
					Rambutan, Banyuasin
				</motion.p>
				<div className="w-full h-64 my-6 rounded-xl overflow-hidden shadow-lg">
					<iframe
						title="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.0961021081018!2d104.87600138638204!3d-3.0753374913245897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b849c2b1ac431%3A0x52faf682bd338459!2sMasjid%20Baiturrohim%20Desa%20Sako!5e0!3m2!1sid!2sid!4v1747061361314!5m2!1sid!2sid"
						width="600"
						height="450"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.3 }}
					whileInView={{ opacity: 1, scale: 1 }}
					className="mt-4"
				>
					<motion.button
						whileHover={{ scale: 1.2, rotate: 5 }}
						type="button"
						className="bg-secondary text-white px-6 py-2 rounded-md font-semibold hover:bg-[#1a242f] flex items-center justify-center gap-2 cursor-pointer"
						onClick={() =>
							window.open(
								"https://maps.app.goo.gl/mpA8vRLKbePhrx2j8",
								"_blank"
							)
						}
					>
						<PiMapPinAreaFill className="mr-2" /> Lihat lokasi
					</motion.button>
				</motion.div>
			</div>
		</Container>
	);
}
