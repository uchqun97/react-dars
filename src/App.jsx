
export const App = () => {

    const myName = "Uchqun"
    const nimadir = "Samarqand"

    const kopaytirish = (a,b) =>{
        return a*b
    }

    return (
        <div>
            <p>2+2 = {2+2}</p>

            <h2>{myName}</h2>

            <p>Mening do`stlarim : {["Said","Nurik","Javoh","Kamron"]}</p>

            <p>5 kara 5 = {kopaytirish(5,5)}</p>
            <p className={nimadir}>Class berish</p>
        </div>
    )
}
