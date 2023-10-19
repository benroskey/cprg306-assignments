import Link from "next/link";
import ItemList from './item-list.js';

export default function Page(){
    return(
    <main>
        <div className= "flex flex-col items-end" >
            <Link href ="/"> <h1 className="text-2xl font-bold m-5">Home</h1> </Link>
            <h1 className= "text-5xl font-bold m-2">Shopping List</h1>
            <ItemList/>
        </div>
    </main>
    );
}

