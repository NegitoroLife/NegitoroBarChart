import { apiFetch } from "@/lib/fetcher";

export default async function Home() {
	const data = await apiFetch("/api/supabase/chart");

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
				<div className="p-4 flex flex-col gap-y-2 border rounded-md bg-white">
					<p className="">テストアカウント</p>
					<p>メールアドレス： negitorolife2025@gmail.com</p>
					<p>パスワード： negitoroNegitoro-2025</p>
				</div>
				<div>
					{data ? (
						<pre>{JSON.stringify(data, null, 2)}</pre>
					) : (
						<p>データがありません</p>
					)}
				</div>
			</main>
		</div>
	);
}
