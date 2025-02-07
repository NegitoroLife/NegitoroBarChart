"use client";

import { useState } from "react";
import { User } from "./types/user";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
	const [users, setUsers] = useState<User[]>([]);
	const [showUsers, setShowUsers] = useState(false);

	const fetchUsers = async () => {
		if (!showUsers) {
			const res = await fetch("/api/users");
			const data: User[] = await res.json();
			setUsers(data);
		}
		setShowUsers(!showUsers);
	};

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
						下のボタンをクリックして開始
					</p>
					<FaArrowDown
						className="text-red-600 dark:text-gray-400 mx-auto"
						size={24}
					/>
				</motion.div>
				<div className="relative mt-2">
					<button
						key={showUsers ? "hide" : "show"}
						onClick={fetchUsers}
						className={`px-4 py-2 ${
							!showUsers
								? "bg-blue-600 hover:bg-blue-700"
								: "bg-gray-400  text-gray-200"
						}  text-white rounded `}>
						{showUsers ? "HIDE" : "SHOW FETCH DATA"}
					</button>
				</div>
				<AnimatePresence>
					{showUsers && (
						<motion.div
							className="mt-6"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							<h2 className="text-md font-bold text-gray-800 dark:text-gray-200">
								FETCH サンプル
							</h2>
							<ul className="mt-4 text-gray-600 dark:text-gray-400">
								{users.map((user) => (
									<li key={user.id}>
										{user.name} ({user.email})
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</main>
		</div>
	);
}
