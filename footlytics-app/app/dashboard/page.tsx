import { Sidebar, Main } from "../../components";

export default function Home() {
  return (
    <main className="flex flex-row">
      <Sidebar />
      <Main />
    </main>
  );
}
