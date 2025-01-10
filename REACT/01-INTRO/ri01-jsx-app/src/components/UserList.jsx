export default function UserList(){
    const users = [
        "Arda Can","Betül","Bilal","Efe Can","Halil İbrahim","Hatice Kübra","Hüseyin","İsa Yasin","Mehmet Alakuş","Mehmet Fatih","Mehmet Albayrak","Melih Can","Mertcan","Mutlu","Orçun","Simay"
    ]
    
    return (
        <>
        <h2>User List</h2>
        <ul>
            {
                users.map((user,index) => <li key={index}>{user}</li>)
            }
        </ul>
        </>
    )
}

