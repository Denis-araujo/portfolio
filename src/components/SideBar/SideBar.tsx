import { Briefcase, HouseLine, User } from "phosphor-react";
import { Category } from "./components/Category/Category";

export function SideBar() {
  return (
    <aside className="w-64 h-screen bg-slate-100 flex justify-center ">
      <div className="mt-16">
        <Category title="Home" icon={<HouseLine />} to="/" />
        <Category title="About" icon={<User />} to="/about" />
        <Category title="Portfolio" icon={<Briefcase />} to="/portfolio" />
      </div>
    </aside>
  );
}
