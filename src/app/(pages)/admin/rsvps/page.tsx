import { getRSVPs } from "@/actions/getRSPVs";
import { Menus } from "../_components/Menus";
import { RSVPTable } from "../_components/RSVPTable";
import { getSessionUser } from "@/actions/auth";
import { redirect } from "next/navigation";

export default async function RSVPsPage() {

	const {session, user} = await getSessionUser();

	if (!session) {
		return redirect("/login");
	}

	const { success, data, message } = await getRSVPs();

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
				<h1 className="text-2xl font-bold">All RSVPs</h1>
				<Menus user={user}/>
			</div>
			<RSVPTable data={data || []} />
		</>
	);
}
