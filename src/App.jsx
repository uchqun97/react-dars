export const App = () => {
    const usersInfo = [
        {
            ism: "John",
            email: "john@example.com",
            shaxar: "United States"
        },
        {
            ism: "Johan",
            email: "johan@example.com",
            shaxar: "Germany"
        },
        {
            ism: "Alexa",
            email: "alexa@example.com",
            shaxar: "French"
        },
        {
            ism:"Husan",
            email: "husan@example.com",
            shaxar: "Uzbekistan"
        }
    ]
    return (
        <main>
            {usersInfo.map(({ism,email,shaxar})=>(
                <ol key={Math.random()}>
                    <li>{ism}</li>
                    <li>{email}</li>
                    <li>{shaxar}</li>
                </ol>
            ))}
        </main>
    )
}
