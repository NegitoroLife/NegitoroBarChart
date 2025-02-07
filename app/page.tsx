"use client";

import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
			<header className="mb-8">
				<h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
					バーチャートレースアプリ
				</h1>
				<p className="text-lg text-gray-600 dark:text-gray-400">
					データの動きを視覚化しよう
				</p>
			</header>
			<main className="flex flex-col items-center">
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<p className="mt-4 text-gray-600 dark:text-gray-400">
					下のボタンをクリックして開始
				</p>
				<button
					onClick={() => {
						alert("何も起きないよ(^^)/");
					}}
					className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
					スタート
				</button>
			</main>
		</div>
	);
}
