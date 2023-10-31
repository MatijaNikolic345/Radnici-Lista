import Logo from "./Logo";
import SideBarHeader from "./SideBarNavHeading";

function SideBar() {
  return (
    <div className="flex flex-col row-span-full items-center gap-3 pt-10 border-r border-slate-200">
      <Logo />

      <SideBarHeader to="/lista-radnika">Lista Radnika</SideBarHeader>
      <SideBarHeader to="/nov-radnik">Nov Radnik</SideBarHeader>
    </div>
  );
}

export default SideBar;
