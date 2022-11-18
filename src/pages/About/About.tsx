import { SideBar } from "../../components/SideBar/SideBar";

export function About() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1">
        <SideBar />
        <h1>About</h1>
      </main>
    </div>
  );
}
