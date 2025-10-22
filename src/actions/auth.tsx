"use server";

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function signIn(
  prevState: { error: string } | null,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();

  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(data, "data_login");

  if (error) {
    return { error: error.message };
  }

  redirect("/admin/guestbooks");
}

export async function signOut() {
  "use server";

  const supabase = await createClient();

  await supabase.auth.signOut();
  redirect("/login");
}

export async function getSession() {
  const supabase = await createClient();
  const session = await supabase.auth.getSession();  
  return session.data.session;
}

export async function getSessionUser() {
  const supabase = await createClient();
  const session = await supabase.auth.getSession();
  const user = await supabase.auth.getUser();
  return {
    session: session.data.session,
    user: user.data.user
  }
}