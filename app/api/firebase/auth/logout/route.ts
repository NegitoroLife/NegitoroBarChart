import { NextResponse } from "next/server";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export async function POST() {
	try {
		await signOut(auth);
		return NextResponse.json({ message: "Logged out successfully" });
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.message }, { status: 400 });
		}
		return NextResponse.json(
			{ error: "An unknown error occurred" },
			{ status: 400 }
		);
	}
}
