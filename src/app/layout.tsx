import type { Metadata } from "next";
import { Playball, Dosis, Bebas_Neue,  } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";
import { Toaster } from 'react-hot-toast';

const pacifico = Playball({
	weight: ["400"],
	variable: "--font-pacifico",
	subsets: ["latin"],
});

const lato = Dosis({
	weight: ["300", "400", "700"],
	variable: "--font-lato",
	subsets: ["latin"],
});

const bebas = Bebas_Neue({
	weight: ["400"],
	variable: "--font-bebas",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Wedding Reza & Tira",
	description: "The Wedding Of Reza & Tira",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${pacifico.variable} ${lato.variable} ${bebas.variable} antialiased`}
			>
				<main className="flex min-h-screen flex-col max-w-[414px] mx-auto">
					<Toaster />
					<AudioProvider>{children}</AudioProvider>
				</main>
			</body>
		</html>
	);
}
