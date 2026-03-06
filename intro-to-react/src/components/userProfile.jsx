export function UserProfile({name, role, display_pic}){
    return (
        <article style={{border: "1px solid gray", padding: "10px", borderRadius: "5%" }}>
            <img src={display_pic}></img>
            <h3>{name}</h3>
            <h1>{role}</h1>
        </article>
    )
}