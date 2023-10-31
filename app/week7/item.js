export default function Item({name, quantity, category}) {
    return (
        <div className="border bg-violet-800 w-full max-w-xs m-4 p-2" >
            <h2 className="text-xl font-bold">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}