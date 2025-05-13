"use client";

import Image from "next/image";
import flowerTop from "../assets/img/flowwer_1.png";
import flowerCenter from "../assets/img/flowwer_3.png";
import Container from "@/components/Container";
import * as motion from "motion/react-client";
import toast from 'react-hot-toast';

import { useEffect, useState } from "react";
import { submitRSPV } from "@/actions/submitRSPV";
import { getRSVPs } from "@/actions/getRSPVs";
import { formatDate } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type TRSPVs = {
	id: number;
	name: string;
	attendance: string;
	message: string;
	created_at: string;
};
export default function GuestBook() {
	const [name, setName] = useState("");
	const [attendance, setAttendance] = useState("hadir");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isLoadinData, setIsLoadinData] = useState(false);

	const [rspvs, setRspvs] = useState<TRSPVs[]>([]);

	const getData = async () => {
		try {
			setIsLoadinData(true);
			const { data } = await getRSVPs();
			setRspvs(data || []);
		} catch (error) {
			console.error('Error fetching RSVPs:', error);			
		} finally {
			setIsLoadinData(false);
		}
	};

	useEffect(() => {
		getData();
	}, [isSuccess]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!name) {
			setErrors({ name: "Name is required" });
			return;
		}

		if (!message) {
			setErrors({ message: "Message is required" });
			return;
		}

		setIsLoading(true);

		const formData = new FormData();
		formData.append("name", name);
		formData.append("attendance", attendance);
		formData.append("message", message);

		try {
			const result = await submitRSPV(formData);
			if (result.success) {
				toast.success(result.message);
				setName("");
				setAttendance("hadir");
				setMessage("");
				setErrors({});
				setIsSuccess(true)
			} else {
				toast.error(result.message);
				setIsSuccess(false)
			}
		} catch (error) {
			console.error("Error submitting RSPV:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container className="justify-baseline items-center py-16">
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-wiggle">
				<Image
					src={flowerTop}
					alt="Top Decoration"
					className="absolute top-0 left-0 w-52"
					priority
				/>
			</div>
			<div className="mb-6">
				<h1 className="text-xl text-center font-bold text-secondary font-pacifico">
					Kirim Ucapan
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
			</div>
			<div className="shadow border-2 border-x-0 border-primary flex flex-col items-center justify-center rounded p-8 w-[90%] bg-white mx-2">
				<form onSubmit={handleSubmit} className="w-full">
					<div className="mb-4 w-full">
						<label
							htmlFor="name"
							className="text-sm font-medium text-gray-700"
						>
							Nama
						</label>
						<input
							type="text"
							name="name"
							autoComplete="off"
							placeholder="Masukkan nama kamu"
							className="mt-1 px-2 py-1 text-xs w-full rounded-md border-gray-300 shadow focus:outline-0 focus:border-primary focus:ring-1 focus:ring-primary"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
						{errors.name && (
							<p className="text-red-500 text-sm mt-1">
								{errors.name}
							</p>
						)}
					</div>
					<div className="mb-4 w-full">
						<label
							htmlFor="name"
							className="text-sm font-medium text-gray-700"
						>
							Kehadiran
						</label>
						<select
							name="attendance"
							className="mt-1 px-2 py-1 text-xs w-full rounded-md border-gray-300 shadow focus:outline-0 focus:border-primary focus:ring-1 focus:ring-primary"
							value={attendance}
							onChange={(e) => setAttendance(e.target.value)}
							required
						>
							<option value="Hadir">Hadir</option>
							<option value="Tidak Hadir">Tidak Hadir</option>
						</select>
						{errors.attendance && (
							<p className="text-red-500 text-sm mt-1">
								{errors.attendance}
							</p>
						)}
					</div>
					<div className="mb-4 w-full">
						<label
							htmlFor="message"
							className="text-sm font-medium text-gray-700"
						>
							Pesan
						</label>
						<textarea
							name="message"
							placeholder="Masukkan pesan kamu"
							autoComplete="off"
							rows={5}
							className="mt-1 px-2 py-1 text-xs w-full rounded-md border-gray-300 shadow focus:outline-0 focus:border-primary focus:ring-1 focus:ring-primary"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						/>
						{errors.message && (
							<p className="text-red-500 text-sm mt-1">
								{errors.message}
							</p>
						)}
					</div>
					<button
						type="submit"
						className="bg-secondary text-white p-2 py-1 w-full cursor-pointer text-sm rounded-md font-semibold hover:bg-[#1a242f] flex items-center justify-center gap-2"
						disabled={isLoading}
					>
						{isLoading ? "Loading..." : "Kirim"}
					</button>
				</form>
				<div className="mt-4 shadow-md rounded-lg w-full p-4">
					<h1 className="text-xs text-center font-bold text-secondary border border-x-0 border-primary py-1">
						Ucapan dan doa
					</h1>
					<div className="mt-4 max-h-[300px] mx-auto overflow-auto">
						{
							isLoadinData && (
								<Skeleton className="w-[100px] h-[20px] rounded-full" />
							)
						}
						{rspvs.length ? rspvs.map((rspv) => (
							<div
								key={rspv.id}
								className="border-b border-primary py-2"
							>
								<p className="text-sm font-extrabold text-secondary">
									{rspv.name}
								</p>
								<p className="text-xs italic font-pacifico text-primary">
									{rspv.attendance}
								</p>
								<p className="text-xs font-light">{formatDate(rspv.created_at)}</p>
								<p className="text-sm mt-2 leading-4">
									{rspv.message}
								</p>
							</div>
						)) : (
							<p className="text-sm text-center">
								Belum ada ucapan dan doa
							</p>
						)}
					</div>
				</div>
			</div>
		</Container>
	);
}
