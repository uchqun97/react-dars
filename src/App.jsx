import counter from "./components/counter.jsx";
import Todolist from "./components/Todolist.jsx";
import profile from "./components/profile.jsx";
import shoppinglist from "./components/shoppinglist.jsx";

export const App = () => {


    return (
        <section>
            <counter/>
            <Todolist/>
            <profile/>
            <shoppinglist/>
        </section>
    )
}