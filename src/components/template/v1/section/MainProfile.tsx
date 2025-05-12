import Image from "next/image";
import basmallah from "../assets/img/basmallah.png";
import flowerTop from "../assets/img/flowwer_1.png";
import man from "../assets/img/man.png";
import women from "../assets/img/women.png";
import Container from "@/components/Container";
import * as motion from "motion/react-client";

export default function MainProfile() {
	return (
		<Container className="justify-baseline gap-0 min-h-screen py-12">
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-wiggle">
				<Image
					src={flowerTop}
					alt="Top Decoration"
					className="absolute top-0 left-0 w-52"
					priority
				/>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="flex justify-center mt-4"
			>
				<Image
					src={basmallah}
					alt="Couple Illustration"
					className="w-48 object-contain"
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 50, scale: 0.8 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ delay: 0.5 }}
				className="flex flex-col justify-center px-4 gap-2"
			>
				<p className="text-xs text-gray-500 text-center leading-4">
					Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
					menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
					agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
					menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
					yang demikian itu benar-benar terdapat tanda-tanda
					(kebesaran Allah) bagi kaum yang berpikir.
				</p>
				<p className="text-xs text-gray-500 font-bold text-center">
					(Q.S Ar Rum Ayat 21)
				</p>
			</motion.div>
			<div className="text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: "easeIn" }}
					className="mt-10 flex justify-center"
				>
					<Image
						src={man}
						alt="Couple man"
						className="w-48 h-48 object-contain"
					/>
				</motion.div>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-lg font-bold text-primary font-pacifico"
				>
					Sandesta Reza, S.Kom
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-xs text-gray-500"
				>
					putra pertama Bapak Herlan Zailani dan Ibu Munara
				</motion.p>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: "easeIn" }}
					className="mt-10 flex justify-center"
				>
					<Image
						src={women}
						alt="Couple women"
						className="w-48 h-48 object-contain"
					/>
				</motion.div>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-lg font-bold text-primary font-pacifico"
				>
					Tira Helvianis, S.Pd
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-xs text-gray-500"
				>
					putri pertama Bapak Heri Heriansyah dan Ibu Hasna
				</motion.p>
			</div>
		</Container>
	);
}
