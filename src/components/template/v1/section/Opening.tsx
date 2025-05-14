"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { MdMail } from "react-icons/md";
import ilustration from "../assets/img/wedding.png";
import flowerTop from "@/components/template/v1/assets/img/flowwer_1.png";
import flowerBottom from "@/components/template/v1/assets/img/flowwer_2.png";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { useAudioContext } from "@/context/AudioContext";
import { useSearchParams } from 'next/navigation';
import { toTitleCase } from "@/lib/utils";

export default function Opening() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [guestName, setGuestName] = useState('');

	const searchParams = useSearchParams();
	const { toggle } = useAudioContext();

	useEffect(() => {
    const nameFromURL = searchParams.get('to');
    if (nameFromURL) {
      setGuestName(toTitleCase(decodeURIComponent(nameFromURL)));
    }
  }, [searchParams]);

	if (!isOpen) {
		return (
			<Container withDecoration>
				<AnimatePresence initial={false}>
					<motion.div
						initial={{ y: 100 }}
						animate={{ y: 0 }}
						exit={{ y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
						className="p-6 flex flex-col justify-center items-center text-center fixed h-screen bg-wedding w-full z-10"
					>
						<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
							<Image
								src={flowerTop}
								alt="Top Decoration"
								className="absolute top-0 left-0 w-52"
								priority
							/>
							<Image
								src={flowerBottom}
								alt="Bottom Decoration"
								className="absolute bottom-0 right-0 w-52"
								priority
							/>
						</div>
						<p className="text-sm text-gray-500">The Wedding Of</p>

						<div className="my-4 flex justify-center">
							<Image
								src={ilustration}
								alt="Couple Illustration"
								className="w-48 h-48 object-contain"
							/>
						</div>

						<h1 className="text-2xl font-bold text-primary mb-1 font-pacifico">
							Reza & Tira
						</h1>
						<p className="text-sm text-gray-500 mb-4">
							Minggu, 09 November 2025
						</p>

						<p className="text-sm text-gray-700">
							Kepada Yth. Bapak/Ibu/Saudara/i
						</p>
						<h2 className="text-lg font-semibold text-secondary mb-2 font-bebas tracking-[3px]">
							{guestName || "Tamu Undangan"}
						</h2>
						<p className="text-xs text-gray-400 mb-6">
							Mohon maaf jika ada kesalahan penulisan nama dan
							gelar
						</p>
						<button
							type="button"
							className="bg-secondary text-white px-6 py-2 rounded-md font-semibold hover:bg-[#1a242f] flex items-center justify-center gap-2 z-50 cursor-pointer animate-bounce"
							onClick={() => {
								setIsOpen(true)
								toggle()
							}}
						>
							<MdMail className="mr-2" /> Buka Undangan
						</button>
					</motion.div>
				</AnimatePresence>
			</Container>
		);
	}
	return null;
}
