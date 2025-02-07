"use client";
import Image from "next/image";

export default function Header() {
	return (
		<header className="bg-white dark:bg-gray-800 shadow-md">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={100}
					height={100}
					priority
				/>
				<nav>
					<button
						onClick={() => {
							alert("何も起きないよ(^^)/");
						}}
						className="px-3 py-1 border  text-gray-600 rounded hover:bg-gray-100">
						メニュー
					</button>
					<button
						onClick={() => {
							alert("何も起きないよ(^^)/");
						}}
						className="ml-2 px-3 py-1 border text-gray-600 rounded hover:bg-gray-100">
						ログイン
					</button>
				</nav>
			</div>
		</header>
	);
}
