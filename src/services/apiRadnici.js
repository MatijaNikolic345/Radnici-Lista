import supabase, { supabaseUrl } from "./supabase";

export async function sviRadnici() {
  const { data: listaRadnika, error } = await supabase
    .from("lista-radnika")
    .select("*");

  if (error) throw new Error("Lista radnika nije uspela da se ucita.");
  return listaRadnika;
}
export async function novRadnik(radnik) {
  const imageName = `${Math.random()}-${radnik.slika.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/slike-radnika/${imageName}`;
  const { data, error } = await supabase
    .from("lista-radnika")
    .insert([{ ...radnik, slika: imagePath }])
    .select();

  if (error) throw new Error("Radnik nije uspeo da se doda.");

  const { error: storageError } = await supabase.storage
    .from("slike-radnika")
    .upload(imageName, radnik.slika);

  if (storageError) {
    await supabase.from("lista-radnika").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Slika nije uspela da se doda pa je radnik izbrisan");
  }
  return data;
}

export async function deleteRadnik(id) {
  const { error } = await supabase.from("lista-radnika").delete().eq("id", id);
  if (error) throw new Error("Radnik nije uspeo da se izbrise.");
}
