import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { items } = useCart();

  return (
    <nav style={styles.nav}>
      <h2>My App</h2>
      <div style={styles.right}>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </button>
        <span>Cart: {items.length}</span>

        {user ? (
          <>
            <span>Hello, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login("Hima")}>Login</button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#333",
    color: "white",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};
