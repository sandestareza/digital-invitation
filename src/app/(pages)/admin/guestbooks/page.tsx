import { getSessionUser } from "@/actions/auth";
import { Menus } from "../_components/Menus";
import { redirect } from "next/navigation";
import { getGuests } from "@/actions/guests";
import { GuestTable } from "../_components/GuestTable";

export default async function GuestBooksPage() {
	const { session, user } = await getSessionUser();

	if (!session) {
		return redirect("/login");
	}

	const { success, data, message } = await getGuests();

	if (!success) {
		return (
			<div className="container mx-auto mt-8 p-4 text-red-500">
				Error: {message}
			</div>
		);
	}

	return (
		<>
			<div className="flex items-center justify-between w-full">
				<h1 className="text-2xl font-bold">All Guest Books</h1>
				<Menus user={user} />
			</div>
			<GuestTable data={data || []} />
		</>
	);
}
