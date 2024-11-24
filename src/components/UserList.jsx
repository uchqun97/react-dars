const UserList = () => {
    const users = [
        {id: 1, ism: "Elis", yosh: 25},
        {id: 2, ism: "Bob", yosh: 30},
        {id: 3, ism: "Charli", yosh: 22}
    ]
    return (
        <div>
            <h1>UserList</h1>
            {users.map((user)=>(
                <div key={user.id}>
                    <h3>Ismi: {user.ism}</h3>
                    <h3>Yoshi: {user.yosh}</h3>
                </div>
            ))}
        </div>
    )
}
export default UserList
