import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/user/userSlice";

function Users() {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

  return (
    <div className="card">
      <h2>Users</h2>
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>

      {status === "loading" && <p>Loading....</p>}
      {status === "succeeded" &&
        users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}
export default Users;
