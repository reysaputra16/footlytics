import { Sidebar } from "../../components";

export default function Search() {
  return (
    <main className="flex flex-row">
      <Sidebar active="settings" />
      <div className="flex flex-1 justify-center items-center w-full h-screen">
        <h1>Settings Page</h1>
      </div>
    </main>
  );
}
