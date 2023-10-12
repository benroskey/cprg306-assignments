import Link from "next/link";
import NewEvent from "./new-event";

export default function Page() {
  return (
    <main>
      <Link href ="/"> <h1 className="text-2xl font-bold m-5">Home</h1> </Link>
      <NewEvent />
    </main>
  );
}