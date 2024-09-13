import { Sidebar, Home } from "../../components";

export default function Overview() {
  return (
    <main className="flex w-full">
      <Sidebar active="home" />
      <Home />
    </main>
  );
}
