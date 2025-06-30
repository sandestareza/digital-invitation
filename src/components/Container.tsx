import React from "react";
import flowerTop from "@/components/template/v1/assets/img/flowwer_1.png";
import flowerBottom from "@/components/template/v1/assets/img/flowwer_2.png";
import Image from "next/image";

export default function Container({
	children,
	withDecoration = false,
  className="justify-center items-center h-screen",
  id
}: Readonly<{
	children: React.ReactNode;
	withDecoration?: boolean;
  className?: string;
  id?:string
}>) {
	return (
		<section id={id} className={`w-full bg-wedding overflow-hidden relative flex flex-col ${className} section-marker`}>
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
				{withDecoration ? (
					<>
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
					</>
				) : null}
			</div>
			{children}
		</section>
	);
}
