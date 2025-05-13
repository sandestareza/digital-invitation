'use server';

import { createClient } from "@/utils/supabase/server";

export async function submitRSPV(formData: FormData) {
  const supabase = await createClient();
  const name = formData.get('name');
  const attendance = formData.get('attendance');
  const message = formData.get('message');

  const { data, error } = await supabase.from('rspvs').insert({
    name,
    attendance,
    message
  });

  console.log(data, 'Data submitted');
  

  if (error) {
    console.error(error, 'Error submitting RSPV');
    return { success: false, message: 'Failed to submit RSPV', error };
  }

  return { success: true, message: 'RSPV submitted successfully' };
}