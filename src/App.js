import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import { AuthProvider } from "./contexts/authContext/authContext";
import { useRoutes } from "react-router-dom";


function App() {
    const routesArray = [
        {
            path: "/login",      // Route for login page
            element: <Login />,
        },
        {
            path: "/register",   // Route for register page
            element: <Register />,
        },
        {
            path: "/home",       // Route for home page
            element: <Home />,
        },
        {
            path: "/",           // Route for the root path (homepage or redirect)
            element: <Home />,   // You can redirect here to /home or any other page
        },
        {
            path: "*",           // Wildcard route (should be last)
            element: <Login />,  // Fallback to login page
        },
    ];

    let routesElement = useRoutes(routesArray);

    return (
        <AuthProvider>
            <Header />
            <div className="w-full h-screen flex flex-col">{routesElement}</div>
        </AuthProvider>
    );
}

export default App;
