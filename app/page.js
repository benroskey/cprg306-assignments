import StudentInfo from './StudentInfo.jsx';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href ="/week2"> Week 2 </Link>
    </div>
  );  
}