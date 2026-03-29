import React from "react";

const Navbar = () => {
    const isLoggedIn= true
    return (
        <nav>
            <h2>My React App</h2>
            {isLoggedIn?(<p>Welcome, User</p>):(<button>Login</button>)}
            {/* <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Blog</li>
            </ul> */}
        </nav>
    );
};

export default Navbar;
