"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../utils/supabase/server";

export async function getGuests() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("guests").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching Guests:", error);
    return { success: false, message: "Failed to fetch Guests" };
  }

  return { success: true, data };
}

export async function getGuestById(id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("guests").select("*").eq("id", id);

  if (error) {
    console.error("Error fetching Guest:", error);
    return { success: false, message: "Failed to fetch Guest", data: null };
  }

  return { success: true, data, message: "Guest fetched successfully" };
}

export async function createGuest(formData: FormData) {
  const supabase = await createClient();
  const name = formData.get("name");
  const whatsapp = formData.get("whatsapp");
  const link = formData.get("link");

  const { data, error } = await supabase.from("guests").insert({ name, whatsapp, link });

  console.log(data, "Data created");

  if (error) {
    console.error(error, "Error creating Guest");
    return { success: false, message: "Failed to create Guest", error };
  }

  revalidatePath("/admin/guestbooks");
  return { success: true, message: "Guest created successfully" };
}

export async function deleteGuest(id: number) {
  const supabase = await createClient();

  console.log(id, "ID to delete Guest");

  const { data, error } = await supabase.from("guests").delete().eq("id", id);

  console.log(data, "Data deleted");

  if (error) {
    console.error(error, "Error deleting Guest");
    return { success: false, message: "Failed to delete Guest", error };
  }

  revalidatePath("/admin/guestbooks");
  return { success: true, message: "Guest deleted successfully" };
}

export async function updateGuest(id: number, formData: FormData) {
  const supabase = await createClient();
  const name = formData.get("name");
  const whatsapp = formData.get("whatsapp");
  const link = formData.get("link");

  const { data, error } = await supabase.from("guests").update({ name, whatsapp, link }).eq("id", id);

  console.log(data, "Data updated");

  if (error) {
    console.error(error, "Error updating Guest");
    return { success: false, message: "Failed to update Guest", error };
  }

  revalidatePath("/admin/guestbooks");
  return { success: true, message: "Guest updated successfully" };
}