import { AiOutlineMail } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";
import RadnikDetaljno from "./RadnikDetaljno";

function RadnikProstPrikaz({ radnik }) {
  return (
    <div className="flex flex-col  p-3 transition-all   w-72 bg-slate-50 hover:bg-[white] hover:shadow-2xl rounded-md hover:-translate-y-1 cursor-pointer">
      <RadnikDetaljno radnik={radnik}>
        <div className="flex gap-3 border-b-2 border-slate-200 items-center pb-3 ">
          <div className="w-14 h-14">
            <img
              className=" object-cover rounded-full w-full h-full"
              src={radnik.slika}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-md text-slate-900 font-semibold">
              {radnik.imePrezime}
            </p>
            <p className="text-sm text-slate-500 font-semibold">
              {radnik.radnoMesto}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center border-b border-slate-200 gap-3 p-3">
          <AiOutlineMail className="text-slate-500 font-medium w-[15%]" />
          <p className="text-xs text-slate-500 font-medium w-[85%]">
            {radnik.email}
          </p>
        </div>

        <div className="flex items-center justify-center border-b gap-3 border-slate-200 p-3">
          <BsPersonWorkspace className="text-slate-500 font-medium w-[15%]" />
          <p className="text-xs text-slate-500 font-medium w-[85%]">
            Radni Staž: {radnik.radniStazGod} godina
          </p>
        </div>
        <div className="flex items-center justify-center border-b gap-3 border-slate-200 p-3">
          <TbMoneybag className="text-slate-500 font-medium w-[15%]" />
          <p className="text-xs text-slate-500 font-medium w-[85%]">
            Neto plata: {radnik.netoPlata} RSD
          </p>
        </div>
      </RadnikDetaljno>
    </div>
  );
}

export default RadnikProstPrikaz;
