import  { useState } from "react";

const TodoList = () => {
    // Boshlangich State(Holat)ni bo'sh massiv bilan ishga tushirish
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Yangi todo  qo'shish boshqarish
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    // input o'zgartirish uchun qiymatini oladigan kod
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;