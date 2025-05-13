"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteRSPV(id: number) {
  const supabase = await createClient();

  console.log(id, "ID to delete RSPV");
  

	const { data, error } = await supabase.from("rspvs").delete().eq("id", id);

	console.log(data, "Data deleted");

	if (error) {
		console.error(error, "Error deleting RSPV");
		return { success: false, message: "Failed to delete RSPV", error };
	}

	revalidatePath("/admin/rsvps");
  return { success: true, message: "RSPV deleted successfully" };
}
