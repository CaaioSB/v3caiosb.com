import type { Metadata } from "next";
import { Cabin, Nunito } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
});

const cabin = Cabin({
	variable: "--font-cabin",
	subsets: ["latin"],
});

const unigeo64 = localFont({
	src: [
		{
			path: "./assets/fonts/unigeo64-bold.ttf",
		},
	],
	variable: "--font-unigeo64",
	weight: "bold",
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${nunito.variable} ${unigeo64.variable} ${cabin} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
