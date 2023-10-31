import { useForm } from "react-hook-form";
import useNovRadnik from "./useNovRadnik";

function NovRadnikForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { isLoading, dodajRadnika } = useNovRadnik();
  function onSubmit(data) {
    const {
      imePrezime,
      radnoMesto,
      netoPlata,
      mail: email,
      slika,
      radniStazGod,
      adresa,
    } = data;
    console.log(slika);
    const radnik = {
      imePrezime,
      radnoMesto,
      netoPlata,
      email,
      slika: slika[0],
      radniStazGod,
      adresa,
    };
    dodajRadnika(radnik, {
      onSuccess: () => {
        reset();
      },
    });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        isLoading ? "bg-slate-100" : "bg-slate-50"
      } w-full h-fit p-5 rounded-lg flex flex-col gap-7 border border-zinc-300 mt-5`}
    >
      <div className="flex gap-3 items-center flex-wrap">
        <label className=" basis-[18rem]" htmlFor="imePrezime">
          Ime i prezime(odvojeno sa space)
        </label>
        <input
          disabled={isLoading}
          className="p-2 border border-zinc-300 rounded-md max-w-[30rem] w-full"
          type="text"
          name="imePrezime"
          {...register("imePrezime", {
            required: "Ovo polje mora da se popuni.",
          })}
        />
        <p className="text-sm text-red-700">{errors?.imePrezime?.message}</p>
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        <label className=" basis-[18rem]" htmlFor="mail">
          Email
        </label>
        <input
          disabled={isLoading}
          className="p-2 border border-zinc-300 rounded-md max-w-[30rem] w-full"
          type="text"
          name="mail"
          {...register("mail", {
            required: "Ovo polje mora da se popuni.",
          })}
        />
        <p className="text-sm text-red-700">{errors?.email?.message}</p>
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        <label className=" basis-[18rem]" htmlFor="radnoMesto">
          Radno mesto
        </label>
        <input
          disabled={isLoading}
          className="p-2 border border-zinc-300 rounded-md max-w-[30rem] w-full"
          type="text"
          name="radnoMesto"
          {...register("radnoMesto", {
            required: "Ovo polje mora da se popuni.",
          })}
        />
        <p className="text-sm text-red-700">{errors?.radnoMesto?.message}</p>
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        <label className=" basis-[18rem]" htmlFor="netoPlata">
          Neto plata(bruto ce biti izracunato)
        </label>
        <input
          disabled={isLoading}
          className="p-2 border border-zinc-300 rounded-md max-w-[30rem] w-full"
          type="number"
          name="netoPlata"
          {...register("netoPlata", {
            required: "Ovo polje mora da se popuni.",
          })}
        />
        <p className="text-sm text-red-700">{errors?.netoPlata?.message}</p>
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        <label className=" basis-[18rem]" htmlFor="adresa">
          Adresa(odvojeno sa space)
        </label>
        <input
          disabled={isLoading}
          className="p-2 border border-zinc-300 rounded-md max-w-[30rem] w-full"
          type="text"
          name="adresa"
          {...register("adresa", { required: "Ovo polje mora da se popuni." })}
        />
        <p className="text-sm text-red-700">{errors?.adresa?.message}</p>
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        <label className=" basis-[18rem]" htmlFor="radniStazGod">
          Radni staz(u godinama)
        </label>
        <input
          disabled={isLoading}
          className="p-2 border border-zinc-300 rounded-md max-w-[30rem] w-full"
          type="number"
          name="radniStazGod"
          {...register("radniStazGod", {
            required: "Ovo polje mora da se popuni.",
          })}
        />
        <p className="text-sm text-red-700">{errors?.radniStazGod?.message}</p>
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        <label className=" basis-[18rem]" htmlFor="slika">
          Slika radnika
        </label>
        <input
          disabled={isLoading}
          className="p-2 border border-zinc-300 rounded-md max-w-[30rem] w-full"
          type="file"
          name="slika"
          {...register("slika", { required: "Ovo polje mora da se popuni." })}
        />
        <p className="text-sm text-red-700">{errors?.slika?.message}</p>
      </div>
      <div className="mt-3 flex justify-end gap-5 items-center">
        <button
          disabled={isLoading}
          className="py-3 text-slate-50 px-5 border border-slate-300 rounded-lg bg-blue-600 hover:bg-blue-500"
        >
          Dodaj
        </button>
        <button
          disabled={isLoading}
          type="reset"
          className="py-3 px-5 border border-slate-300 rounded-lg hover:bg-slate-100"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default NovRadnikForm;
