"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState(null);
	const [popupMessage, setPopupMessage] = useState("");
	const [showPopup, setShowPopup] = useState(false);
	const [popupColor, setPopupColor] = useState("bg-green-500");

	const handleLogin = async () => {
		try {
			const response = await fetch("/api/firebase/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();
			if (response.ok) {
				setUser(data.user);
				setPopupMessage("ログインに成功しました");
				setPopupColor("bg-green-500");
			} else {
				setPopupMessage("ログインに失敗しました");
				setPopupColor("bg-red-500");
			}
			setIsModalOpen(false);
			setShowPopup(true);
			setTimeout(() => setShowPopup(false), 3000);
		} catch (error) {
			console.error("Error signing in:", error);
			setPopupMessage("ログインに失敗しました");
			setPopupColor("bg-red-500");
			setShowPopup(true);
			setTimeout(() => setShowPopup(false), 3000);
		}
	};

	const handleLogout = async () => {
		try {
			const response = await fetch("/api/firebase/auth/logout", {
				method: "POST",
			});

			if (response.ok) {
				setUser(null);
				setPopupMessage("ログアウトに成功しました");
				setPopupColor("bg-red-500");
			} else {
				setPopupMessage("ログアウトに失敗しました");
				setPopupColor("bg-red-500");
			}
			setShowPopup(true);
			setTimeout(() => setShowPopup(false), 3000);
		} catch (error) {
			console.error("Error signing out:", error);
			setPopupMessage("ログアウトに失敗しました");
			setPopupColor("bg-red-500");
			setShowPopup(true);
			setTimeout(() => setShowPopup(false), 3000);
		}
	};

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
						onClick={() => alert("何も起きないよ(^^)/")}
						className="px-3 py-1 border text-gray-600 rounded hover:bg-gray-100">
						メニュー
					</button>
					{user ? (
						<>
							<span className="ml-2 text-gray-600">{user.email}</span>
							<button
								onClick={handleLogout}
								className="ml-2 px-3 py-1 border text-red-600 rounded hover:bg-gray-100">
								ログアウト
							</button>
						</>
					) : (
						<button
							onClick={() => setIsModalOpen(true)}
							className="ml-2 px-3 py-1 border text-blue-600 rounded hover:bg-gray-100">
							ログイン
						</button>
					)}
				</nav>
			</div>
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded shadow-md">
						<h2 className="text-xl mb-4">ログイン</h2>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mb-2 p-2 border rounded w-full"
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mb-4 p-2 border rounded w-full"
						/>
						<button
							onClick={handleLogin}
							className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full">
							ログイン
						</button>
						<button
							onClick={() => setIsModalOpen(false)}
							className="mt-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 w-full">
							キャンセル
						</button>
					</div>
				</div>
			)}
			{showPopup && (
				<div
					className={`fixed bottom-4 right-4 ${popupColor} text-white px-4 py-2 rounded shadow-md`}>
					{popupMessage}
				</div>
			)}
		</header>
	);
}
