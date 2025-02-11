"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
			<header className="mb-8 text-center space-y-1">
				<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
					NEGITORO LIFE
				</h1>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					データの動きを視覚化しよう
				</p>
			</header>
			<main className="flex flex-col items-center">
				<motion.div
					className="mt-2"
					animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }}
					transition={{ repeat: Infinity, duration: 1 }}>
					<p className="mt-4 text-red-600 dark:text-gray-400">
						クリックして開始
					</p>
					<FaArrowDown
						className="text-red-600 dark:text-gray-400 mx-auto"
						size={24}
					/>
				</motion.div>
				<div className="relative mt-2">
					<Link
						href={"/barchart"}
						className="bg-blue-600 text-white rounded-md border p-2">
						グラフを作成！
					</Link>
				</div>
			</main>
		</div>
	);
}
