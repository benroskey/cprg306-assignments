import ItemList from './item-list.js';
import Link from "next/link";

export default function Page(main){
    return(
    <div>
        <Link href ="/"> <h1 className="text-2xl font-bold m-5">Home</h1> </Link>
        <h1 className= "text-5xl font-bold m-2">Shopping List</h1>        
        <ItemList />
    </div>
    );
}

