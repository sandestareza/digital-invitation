import Image from "next/image";
import flowerBottom from "../assets/img/flowwer_2.png";
import flowerCenter from "../assets/img/flowwer_3.png";
import dana from "../assets/img/dana.png";
import shopeepay from "../assets/img/shopeepay.png";
import Container from "@/components/Container";
import * as motion from "motion/react-client";

export default function DigitalGift() {
	return (
		<Container className="justify-baseline pt-8 pb-32">
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
				<Image
					src={flowerBottom}
					alt="Bottom Decoration"
					className="absolute bottom-0 right-0 w-52"
				/>
			</div>
			<div className="mb-4">
				<h1 className="text-xl text-center font-bold text-secondary font-pacifico">
					Kirim Hadiah
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
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { delay: 0.2 },
				}}
				whileHover={{ scale: 1.2 }}
				className="flex justify-center items-center gap-4 bg-white shadow-sm w-fit px-6 mx-auto"
			>
				<Image
					src={dana}
					alt="Dana"
					className="w-24 h-24 object-contain"
				/>
				<div>
					<p className="font-bold text-lg text-secondary font-bebas tracking-[3px]">
						081532622042
					</p>
					<p className="italic text-xs">A/n Sandesta Reza</p>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { delay: 0.3 },
				}}
				whileHover={{ scale: 1.2 }}
				className="flex justify-center items-center gap-4 bg-white shadow-sm mt-4 w-fit px-6 mx-auto"
			>
				<Image
					src={shopeepay}
					alt="Shopeepay"
					className="w-24 h-24 object-contain"
				/>
				<div>
					<p className="font-bold text-lg text-secondary font-bebas tracking-[3px]">
						081532622042
					</p>
					<p className="italic text-xs">A/n Sandesta Reza</p>
				</div>
			</motion.div>
		</Container>
	);
}
