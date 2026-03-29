import { useAuth } from "../context/AuthContext";

function Login() {
  const {user, login, logout} = useAuth();

  return (
    <div className="card">
        <h3>User Authentication</h3>
      {user ? (
        <>
          <p>Welcome {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Hima")}>Login</button>
      )}
    </div>
  );
}
export default Login;
