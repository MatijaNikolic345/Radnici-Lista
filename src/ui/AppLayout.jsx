import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] lg:grid-cols-[20rem_1fr] grid-cols-[15rem_1fr] w-full h-[100dvh]  ">
      <Header />
      <div className="w-full bg-slate-200 flex justify-center">
        <div className="flex flex-col gap-5 overflow-scroll  w-full max-w-[1330px] h-full p-14 ">
          <Outlet />
        </div>
      </div>
      <SideBar />
    </div>
  );
}

export default AppLayout;
