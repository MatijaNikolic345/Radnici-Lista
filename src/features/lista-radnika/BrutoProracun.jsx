import { useEffect, useState } from "react";
import { changeCurrency } from "../../utils/helper";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
function BrutoProracun({ netoPlata }) {
  const [curCurrency, setCurrCurrency] = useState("RSD");

  const [PIO1, setPIO1] = useState(netoPlata * 0.191);
  const [PIO2, setPIO2] = useState(netoPlata * 0.1364);
  const [doprinosZdravstvo2, setDoprinosZdravstvo2] = useState(
    netoPlata * 0.07
  );
  const [doprinosZdravstvo1, setDoprinosZdravstvo1] = useState(
    netoPlata * 0.07
  );
  const [doprinosZaposljavanje1, setDoprinosZaposljavanje1] = useState(
    netoPlata * 0.01
  );
  const [ukupniDoprinosi1, setUkupniDoprinosi1] = useState(0);
  const [ukupniDoprinosi2, setUkupniDoprinosi2] = useState(0);
  const [bruto1, setBruto1] = useState(0);
  const [bruto2, setBruto2] = useState(0);
  const [porezZarada, setPorezZarada] = useState(0);
  useEffect(
    function () {
      if (curCurrency === "RSD") {
        if (netoPlata <= 10000) setPorezZarada(0);
        if (netoPlata <= 20000 && netoPlata > 10000)
          setPorezZarada(netoPlata * 0.0265);
        if (netoPlata <= 30000 && netoPlata > 20000)
          setPorezZarada(netoPlata * 0.06);
        if (netoPlata <= 40000 && netoPlata > 30000)
          setPorezZarada(netoPlata * 0.08);
        if (netoPlata <= 50000 && netoPlata > 40000)
          setPorezZarada(netoPlata * 0.093);
        if (netoPlata <= 60000 && netoPlata > 50000)
          setPorezZarada(netoPlata * 0.1013);
        if (netoPlata <= 70000 && netoPlata > 60000)
          setPorezZarada(netoPlata * 0.1114);
        if (netoPlata <= 80000 && netoPlata > 70000)
          setPorezZarada(netoPlata * 0.115);
        if (netoPlata <= 90000 && netoPlata > 80000)
          setPorezZarada(netoPlata * 0.118);
        if (netoPlata <= 100000 && netoPlata > 90000)
          setPorezZarada(netoPlata * 0.118);
        if (netoPlata <= 150000 && netoPlata > 100000)
          setPorezZarada(netoPlata * 0.126);
        if (netoPlata <= 200000 && netoPlata > 150000)
          setPorezZarada(netoPlata * 0.13);
        if (netoPlata > 200000) setPorezZarada(netoPlata * 0.132);

        setUkupniDoprinosi1(PIO1 + doprinosZaposljavanje1 + doprinosZdravstvo1);
        setUkupniDoprinosi2(PIO2 + +doprinosZdravstvo2);
        setBruto1(ukupniDoprinosi1 + porezZarada + netoPlata);
        setBruto2(ukupniDoprinosi2 + bruto1);
      }
    },
    [
      PIO1,
      doprinosZaposljavanje1,
      doprinosZdravstvo1,
      PIO2,
      doprinosZdravstvo2,
      ukupniDoprinosi1,
      ukupniDoprinosi2,
      porezZarada,
      bruto1,
      netoPlata,
      curCurrency,
    ]
  );

  function handleChange(e) {
    const newCurr = e.target.value;
    if (curCurrency !== "RSD") {
      setPorezZarada(changeCurrency(porezZarada, curCurrency, "RSD"));
      setPIO1(changeCurrency(PIO1, curCurrency, "RSD"));
      setPIO2(changeCurrency(PIO2, curCurrency, "RSD"));
      setDoprinosZdravstvo1(
        changeCurrency(doprinosZdravstvo1, curCurrency, "RSD")
      );
      setDoprinosZdravstvo2(
        changeCurrency(doprinosZdravstvo2, curCurrency, "RSD")
      );
      setDoprinosZaposljavanje1(
        changeCurrency(doprinosZaposljavanje1, curCurrency, "RSD")
      );
      setUkupniDoprinosi1(changeCurrency(ukupniDoprinosi1, curCurrency, "RSD"));
      setUkupniDoprinosi2(changeCurrency(ukupniDoprinosi2, curCurrency, "RSD"));
      setBruto1(changeCurrency(bruto1, curCurrency, "RSD"));
      setBruto2(changeCurrency(bruto2, curCurrency, "RSD"));
      setPorezZarada(changeCurrency(porezZarada, curCurrency, newCurr));
      setPIO1(changeCurrency(PIO1, curCurrency, newCurr));
      setPIO2(changeCurrency(PIO2, curCurrency, newCurr));
      setDoprinosZdravstvo1(
        changeCurrency(doprinosZdravstvo1, curCurrency, newCurr)
      );
      setDoprinosZdravstvo2(
        changeCurrency(doprinosZdravstvo2, curCurrency, newCurr)
      );
      setDoprinosZaposljavanje1(
        changeCurrency(doprinosZaposljavanje1, curCurrency, newCurr)
      );
      setUkupniDoprinosi1(
        changeCurrency(ukupniDoprinosi1, curCurrency, newCurr)
      );
      setUkupniDoprinosi2(
        changeCurrency(ukupniDoprinosi2, curCurrency, newCurr)
      );
      setBruto1(changeCurrency(bruto1, curCurrency, newCurr));
      setBruto2(changeCurrency(bruto2, curCurrency, newCurr));
      setCurrCurrency(newCurr);
    }
    if (curCurrency === "RSD") {
      setPorezZarada(changeCurrency(porezZarada, curCurrency, newCurr));
      setPIO1(changeCurrency(PIO1, curCurrency, newCurr));
      setPIO2(changeCurrency(PIO2, curCurrency, newCurr));
      setDoprinosZdravstvo1(
        changeCurrency(doprinosZdravstvo1, curCurrency, newCurr)
      );
      setDoprinosZdravstvo2(
        changeCurrency(doprinosZdravstvo2, curCurrency, newCurr)
      );
      setDoprinosZaposljavanje1(
        changeCurrency(doprinosZaposljavanje1, curCurrency, newCurr)
      );
      setUkupniDoprinosi1(
        changeCurrency(ukupniDoprinosi1, curCurrency, newCurr)
      );
      setUkupniDoprinosi2(
        changeCurrency(ukupniDoprinosi2, curCurrency, newCurr)
      );
      setBruto1(changeCurrency(bruto1, curCurrency, newCurr));
      setBruto2(changeCurrency(bruto2, curCurrency, newCurr));
      setCurrCurrency(newCurr);
    }
  }

  return (
    <>
      <div className="flex gap-10 items-center  mb-6">
        <h3 className="text-3xl text-slate-900">Proracun Bruto Plate:</h3>
        <div className="flex  items-center gap-4">
          <p className="font-medium text-slate-700">Trenutna valuta: </p>
          <select
            onChange={handleChange}
            className="p-3 h-12 w-72 border border-slate-300 rounded-md"
          >
            <option value="RSD">RSD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-[43%] flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-slate-600">
            Ugovorena bruto zarada(bruto 1)
          </h3>
          <div className="w-full flex flex-col gap-3 text-sm text-slate-600">
            <p>
              Porez na zarade:{" "}
              <span className="font-medium text-sm text-slate-500">
                {porezZarada.toFixed(2)} {curCurrency}
              </span>
            </p>
            <p>
              Doprinos za PIO:{" "}
              <span className="font-medium text-sm text-slate-500">
                {PIO1.toFixed(2)} {curCurrency}
              </span>
            </p>
            <p>
              Doprinos za zdravstvo:{" "}
              <span className="font-medium text-sm text-slate-500">
                {doprinosZdravstvo1.toFixed(2)} {curCurrency}
              </span>
            </p>
            <p>
              Doprinos za Zaposljavanje:{" "}
              <span className="font-medium text-sm text-slate-500">
                {doprinosZaposljavanje1.toFixed(2)} {curCurrency}
              </span>
            </p>
            <p className="text-slate-700">
              Ukupni doprinosi na teret radnika su {ukupniDoprinosi1.toFixed(2)}{" "}
              {curCurrency}
            </p>
            <p className="text-slate-800 text-lg">
              Bruto 1 plata iznosi{" "}
              <span>
                {bruto1.toFixed(2)} {curCurrency}
              </span>
            </p>
          </div>
        </div>
        <div className="w-[43%] flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-slate-600">
            Ugovorena bruto zarada(bruto 2)
          </h3>
          <div className="w-full flex flex-col gap-3 text-sm text-slate-600">
            <p className="mt-0">
              Doprinos za PIO:{" "}
              <span className="font-medium text-sm text-slate-500">
                {PIO2.toFixed(2)} {curCurrency}
              </span>
            </p>
            <p>
              Doprinos za zdravstvo:{" "}
              <span className="font-medium text-sm text-slate-500">
                {doprinosZdravstvo2.toFixed(2)} {curCurrency}
              </span>
            </p>
            <p>
              Doprinos za Zaposljavanje:{" "}
              <span className="font-medium text-sm text-slate-500">
                0 {curCurrency}
              </span>
            </p>
            <p className="text-slate-700">
              Ukupni doprinosi na teret poslodavca su{" "}
              {ukupniDoprinosi2.toFixed(2)} {curCurrency}
            </p>
            <p className="text-slate-800 text-lg mt-8">
              Bruto 2 plata iznosi{" "}
              <span>
                {bruto2.toFixed(2)} {curCurrency}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrutoProracun;
