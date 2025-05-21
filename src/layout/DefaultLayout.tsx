import { Outlet } from "react-router-dom";
import logo from "../assets/Cover.svg";

export function DefaultLayout() {
  return (
    <div className="bg-base-background min-h-screen text-base-text">
      <header className="relative">
        <img src={logo} alt="Capa" className="w-full object-cover" />
      </header>

      <main className="relative z-10 max-w-[980px] mx-auto px-8 -mt-24 pb-10">
        <Outlet />
      </main>
    </div>
  );
}
