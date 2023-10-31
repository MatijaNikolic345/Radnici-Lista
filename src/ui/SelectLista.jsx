import { useSearchParams } from "react-router-dom";

function SelectLista() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleParams(e) {
    searchParams.set("sortirajPo", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <select
      onChange={handleParams}
      className="p-3.5 duration-0 bg-slate-50 rounded-md border focus:border-2 text-slate-600 border-slate-300 w-[45%] outline-none"
      name=""
      id=""
    >
      <option value="a-z">Sortiraj po:(A-Z)</option>
      <option value="z-a">Sortiraj po:(Z-A)</option>
      <option value="najmanja-plata">Sortiraj po:(Najmanjoj plati)</option>
      <option value="najveca-plata">Sortiraj po:(Najvecoj plati)</option>
      <option value="najveci-staz">Sortiraj po:(Najvecem radnom stazu)</option>
      <option value="najmanji-staz">
        Sortiraj po:(Najmanjem radnom stazu)
      </option>
    </select>
  );
}

export default SelectLista;
