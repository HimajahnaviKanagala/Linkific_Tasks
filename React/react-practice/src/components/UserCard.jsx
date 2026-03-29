import Card from "./Card";
function UserCard({ name, age, role }) {
    return (
        <>
            <Card>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            {role && <p>Role: {role}</p>}
            </Card>
        </>
    )

}
export default UserCard;