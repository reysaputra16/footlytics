import { Sidebar } from "../../components";

export default function Analysis() {
  return (
    <main className="flex flex-row w-full h-screen">
      <Sidebar active="analysis" />
      <div className="flex flex-1 justify-center items-center">
        <h1>Analysis Page</h1>
      </div>
    </main>
  );
}
