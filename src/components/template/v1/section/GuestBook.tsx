import Image from "next/image";
import flowerTop from "../assets/img/flowwer_1.png";
import flowerCenter from "../assets/img/flowwer_3.png";
import Container from "@/components/Container";
import * as motion from "motion/react-client";

export default function GuestBook() {
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
			<div className="shadow border-2 border-x-0 border-primary flex flex-col items-center justify-center rounded p-8 bg-white mx-4">
				<form className="w-full">
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
						/>
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
						>
							<option value="Hadir">Hadir</option>
							<option value="Tidak Hadir">Tidak Hadir</option>
						</select>
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
							rows={4}
							className="mt-1 px-2 py-1 text-xs w-full rounded-md border-gray-300 shadow focus:outline-0 focus:border-primary focus:ring-1 focus:ring-primary"
						/>
					</div>
					<button
						type="submit"
						className="bg-secondary text-white p-2 py-1 w-full cursor-pointer text-sm rounded-md font-semibold hover:bg-[#1a242f] flex items-center justify-center gap-2"
					>
						Kirim
					</button>
				</form>
				<div className="mt-4 shadow-md rounded-lg w-full p-4">
					<h1 className="text-xs text-center font-bold text-secondary border border-x-0 border-primary py-1">
						Ucapan dan doa
					</h1>
					<div className="mt-4 max-h-[300px] mx-auto overflow-auto">
						<div className="border-b border-primary py-2">
							<p className="text-sm font-extrabold">Jhon doe</p>
							<p className="text-xs italic font-pacifico">Hadir</p>
							<p className="text-xs">20/10/2025 13:21:14</p>
							<p className="text-sm mt-2 leading-4">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Voluptas, architecto ea?
								Doloribus dolore ipsa perferendis temporibus at
								consequatur rem possimus quos expedita, minima
								neque architecto aut ipsum accusamus
								exercitationem vitae!
							</p>
						</div>
						<div className="border-b border-primary py-2">
							<p className="text-sm font-extrabold">Jhon doe</p>
							<p className="text-xs italic font-pacifico">Hadir</p>
							<p className="text-xs">20/10/2025 13:21:14</p>
							<p className="text-sm mt-2 leading-4">Samawa</p>
						</div>
						<div className="border-b border-primary py-2">
							<p className="text-sm font-extrabold">Jhon doe</p>
							<p className="text-xs italic font-pacifico">Hadir</p>
							<p className="text-xs">20/10/2025 13:21:14</p>
							<p className="text-sm mt-2 leading-4">
								Selamat menempuh hidup baru kawan
							</p>
						</div>
						<div className="py-2">
							<p className="text-sm font-extrabold">Jhon doe</p>
							<p className="text-xs italic font-pacifico">Hadir</p>
							<p className="text-xs">20/10/2025 13:21:14</p>
							<p className="text-sm mt-2 leading-4">
								Selamat menempuh hidup baru kawan
							</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
