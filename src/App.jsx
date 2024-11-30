const Button = () => {
    function clickHandler() {
        console.log(Math.round(Math.random() * 10));
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}


export const App = () => {
    return (
        <section>
            <Button/>
        </section>
    )
}