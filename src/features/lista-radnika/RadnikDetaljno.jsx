import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import BrutoProracun from "./BrutoProracun";
import useDeleteRadnik from "./useDeleteRadnik";

const RadnikDetaljnoContext = createContext();
function RadnikDetaljno({ radnik, children }) {
  const [currOpen, setCurrOpen] = useState("");
  const { izbrisiRadnika, isLoading } = useDeleteRadnik();
  function handleDelete() {
    izbrisiRadnika(radnik.id);
  }
  return (
    <RadnikDetaljnoContext.Provider value={{ radnik, currOpen }}>
      {currOpen === radnik.id &&
        createPortal(
          <div className="fixed top-0  left-0 w-full h-[100vh] bg-slate-200 z-40 backdrop-blur-sm">
            <div className="bg-slate-50 z-50 top-[45%] left-[50%] fixed -translate-x-1/2  -translate-y-1/2 p-10 overflow-y-scroll">
              <AiOutlineClose
                onClick={() => setCurrOpen("")}
                className="absolute top-4 right-4 w-7 h-7 cursor-pointer"
              />
              <div className="flex flex-col w-[60rem]">
                <div className="flex items-center gap-5 w-full">
                  <div className="w-32 h-32">
                    <img
                      className=" object-cover rounded-full w-full h-full"
                      src={radnik.slika}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-[80%]">
                    <div className="flex gap-3 items-center flex-wrap ">
                      <p className="text-2xl font-semibold text-slate-800 basis-[35%]">
                        {radnik.imePrezime}
                      </p>
                      <p className="text-md font-semibold text-slate-500 basis-[25%]">
                        Radni Staz:{" "}
                        <span className="text-sm font-medium">
                          {radnik.radniStazGod} godine
                        </span>
                      </p>
                      <p className="text-md font-semibold text-slate-500">
                        Adresa:{" "}
                        <span className="text-sm font-medium">
                          {radnik.adresa}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <p className="text-xl font-semibold text-slate-600 basis-[35%]">
                        {radnik.radnoMesto}
                      </p>
                      <p className="text-md font-semibold text-slate-500 basis-[25%]">
                        Neto Plata:{" "}
                        <span className="text-sm font-medium">
                          {radnik.netoPlata} RSD
                        </span>
                      </p>
                      <p className="text-md font-semibold text-slate-500">
                        Email:{" "}
                        <span className="text-sm font-medium">
                          {radnik.email}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-20 pl-3  flex flex-col   font-semibold ">
                  <BrutoProracun netoPlata={radnik.netoPlata} />
                  <div className="flex justify-end mt-10">
                    <button
                      onClick={handleDelete}
                      disabled={isLoading}
                      className="p-4 bg-red-700 text-slate-50 rounded-md text-sm hover:bg-red-600"
                    >
                      Izbrisi Radnika
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      <div onClick={() => setCurrOpen(radnik.id)}>{children}</div>
    </RadnikDetaljnoContext.Provider>
  );
}

export default RadnikDetaljno;
