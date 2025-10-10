"use client";

import Container from "@/components/Container";
import { MdMail } from "react-icons/md";
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
						className="p-6 flex flex-col justify-center items-center text-center fixed h-screen bg-wedding w-full z-50"
					>
						<p className="text-sm text-cream mt-48">The Wedding Of</p>

						<h1 className="text-4xl lg:text-7xl font-bold text-cream mb-1 font-pacifico">
							Reza & Tira
						</h1>
						<p className="text-sm text-zinc-300 mb-4">
							Minggu, 09 November 2025
						</p>

						<p className="text-sm text-zinc-300">
							Kepada Yth. Bapak/Ibu/Saudara/i
						</p>
						<h2 className="text-lg font-semibold text-secondary mb-2 font-bebas tracking-[3px]">
							{guestName || "Tamu Undangan"}
						</h2>
						<p className="text-xs text-zinc-300 mb-6">
							Mohon maaf jika ada kesalahan penulisan nama dan
							gelar
						</p>
						<button
							type="button"
							className="bg-secondary text-cream px-6 py-2 rounded-md font-semibold hover:bg-primary flex items-center justify-center gap-2 z-50 cursor-pointer animate-bounce"
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
