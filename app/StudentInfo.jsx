import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <h1 className="text-8x1 font-bold m-0">Student Information</h1><br/>
            <p>Student Name: Benjamin Roskey</p>
            <p>CPRG 306 B SA1</p> <br/>
            <Link href ="https://github.com/benroskey"> My Github </Link>
        </div>
    )
}