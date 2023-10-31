import RadnikProstPrikaz from "./RadnikProstPrikaz";
import useRadnici from "./useRadnici";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import SelectLista from "../../ui/SelectLista";
import { useSearchParams } from "react-router-dom";

function ListaRadnikaLayout() {
  const [query, setQuery] = useState("");
  const { data: listaRadnika, isLoading } = useRadnici();
  const [searchParams] = useSearchParams();
  const sortType = searchParams.get("sortirajPo") || "a-z";
  if (isLoading) return <Spinner />;
  let searchLista = [];
  let filteredLista = [];

  if (sortType === "a-z")
    filteredLista = listaRadnika.sort((a, b) =>
      a.imePrezime.localeCompare(b.imePrezime)
    );
  if (sortType === "z-a")
    filteredLista = listaRadnika.sort((a, b) =>
      b.imePrezime.localeCompare(a.imePrezime)
    );
  if (sortType === "najveca-plata")
    filteredLista = listaRadnika.sort((a, b) => b.netoPlata - a.netoPlata);
  if (sortType === "najmanja-plata")
    filteredLista = listaRadnika.sort((a, b) => a.netoPlata - b.netoPlata);
  if (sortType === "najveci-staz")
    filteredLista = listaRadnika.sort(
      (a, b) => b.radniStazGod - a.radniStazGod
    );
  if (sortType === "najmanji-staz")
    filteredLista = listaRadnika.sort(
      (a, b) => a.radniStazGod - b.radniStazGod
    );
  let finalLista = [];
  if (query === "") {
    searchLista = [];
    finalLista = filteredLista;
  } else {
    searchLista = filteredLista.filter(
      (radnik) =>
        radnik.imePrezime.toUpperCase().startsWith(query.toUpperCase()) ===
          true && query !== ""
    );
    finalLista = searchLista;
  }

  return (
    <>
      <div className="bg-slate-50 p-4 flex items-center justify-between gap-3 h-20  rounded-md">
        <input
          onChange={(e) => setQuery(e.target.value)}
          className="p-3 bg-inherit border border-slate-300 duration-0 w-[55%] rounded-md outline-none focus:border-2"
          type="text"
          placeholder="Search..."
        />
        <SelectLista />
      </div>
      <div className="flex flex-wrap gap-4">
        {finalLista.map((radnik) => (
          <RadnikProstPrikaz
            key={radnik.id}
            radnik={radnik}
          ></RadnikProstPrikaz>
        ))}
      </div>
    </>
  );
}

export default ListaRadnikaLayout;
