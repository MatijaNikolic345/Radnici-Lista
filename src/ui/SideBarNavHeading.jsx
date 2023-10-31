import { NavLink } from "react-router-dom";

function SideBarNavHeading({ children, to }) {
  return (
    <NavLink
      className="w-[90%] flex justify-center py-3.5 px-2 text-slate-600 headingNav font-semibold rounded-full"
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default SideBarNavHeading;
