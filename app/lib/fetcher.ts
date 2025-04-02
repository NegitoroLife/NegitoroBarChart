const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function apiFetch<T>(
	path: string,
	options?: RequestInit
): Promise<T> {
	const res = await fetch(`${baseUrl}${path}`, {
		cache: "no-store",
		...options,
	});

	if (!res.ok) {
		throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
	}

	return res.json();
}
