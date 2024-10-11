import Link from "next/link";

export default function Login() {
  return (
    <main className="flex w-full h-screen bg-primary">
      <div className="flex flex-1 justify-center items-center">
        <Link href="/dashboard">
          <button
            className="border-borderColor border-2 rounded-lg p-4 hover:cursor-pointer 
          hover:bg-borderColor hover:transition-all hover:duration-300"
          >
            Click here to go to dashboard
          </button>
        </Link>
      </div>
    </main>
  );
}
