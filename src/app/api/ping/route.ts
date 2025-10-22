import { createClient } from "@/utils/supabase/server"

export async function GET() {
  const supabase = await createClient();
  // Lakukan query ringan agar project tetap aktif
  const { data, error } = await supabase
    .from('rspvs')
    .select('id')
    .limit(1)

  if (error) {
    return new Response(JSON.stringify({ ok: false, error }), { status: 500 })
  }

  return new Response(JSON.stringify({ ok: true, count: data?.length ?? 0 }), { status: 200 })
}
