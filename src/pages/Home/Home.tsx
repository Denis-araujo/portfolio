import { SideBar } from "../../components/SideBar/SideBar";

export function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1">
        <SideBar />
        <h1>Home</h1>
      </main>
    </div>
  );
}
