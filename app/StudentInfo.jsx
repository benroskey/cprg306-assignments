import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <h1>Student Information</h1>
            <p>Student Name: Benjamin Roskey</p>
            <p>CPRG 306 B SA1</p>
            <Link href ="https://github.com/benroskey"> My Github </Link>
        </div>
    )
}