import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface PropsCategory extends NavLinkProps {
  title: string;
  icon: ReactNode;
}

export function Category({ title, icon, ...props }: PropsCategory) {
  return (
    <div className="border-b-2 w-32 mb-5">
      <NavLink
        {...props}
        className={({ isActive }) =>
          !isActive
            ? "flex flex-row items-center ml-5 "
            : "flex flex-row items-center ml-5 text-orange-500"
        }
      >
        {icon}
        <div className="ml-3 items-start">{title}</div>
      </NavLink>
    </div>
  );
}
