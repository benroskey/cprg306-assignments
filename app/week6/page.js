import ItemList from "./item-list.js";
import NewEvent from "./new-event.js";
//Initialize a state variable (e.g., items) with the data from items.json.



export default function Page(){
    return(
    <main>
        <div >
            <h1 className="text-5x1 font-bold mb-5"> New Item </h1>
            <NewEvent />
            <ItemList />
        </div>
    </main>
    );
}

