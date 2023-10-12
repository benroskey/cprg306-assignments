import StudentInfo from '../StudentInfo.jsx';
import Link from "next/link";

export default function ShoppingList() {
  return (
    <div>
      <h1>My Shopping List</h1>
      <StudentInfo />
      <Link href ="/"> <h1 className="text-2xl font-bold m-5">Home</h1> </Link>
    </div>
  );  
}