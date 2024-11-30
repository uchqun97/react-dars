import { useState } from "react";

const ShoppingList = () => {
    // Boshlangich qiymatni bosh array berilgan
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    // form qabul qilish uchun yaratilgan function
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !quantity) return;

        // yangi object yaratadi maxsulot uchun
        const newItem = {
            name,
            quantity: parseInt(quantity),
        };

        // yangi maxsulotni update qiladi
        setItems((prevItems) => [...prevItems, newItem]);

        // hamma inputlarni tozalaydi
        setName("");
        setQuantity("");
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="submit">Add Item</button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - miqdori: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;