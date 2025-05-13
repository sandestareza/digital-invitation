import { getSessionUser } from "@/actions/auth";
import { Menus } from "../_components/Menus";
import { redirect } from "next/navigation";

export default async function GuestBooksPage() {
	const { session, user } = await getSessionUser();

	if (!session) {
		return redirect("/login");
	}

	return (
		<div className="flex items-center justify-between w-full">
			<h1 className="text-2xl font-bold">All Guest Books</h1>
			<Menus user={user} />
		</div>
	);
}
