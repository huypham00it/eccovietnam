import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import {
    HomePage,
    CartPage,
    CategoryPage,
    DetailPage,
    LoginPage,
    RegisterPage,
} from "./pages";
import "./App.css";

const ProtectedRoute = () => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to={"/"} replace />;
    }

    return <Outlet />;
};

function App() {
    const location = useLocation();

    return (
        <DefaultLayout>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/cart" element={<CartPage />} />
                </Route>

                {/* Public pages */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/category/:id" element={<CategoryPage />} />
                <Route path="/detail/:id" element={<DetailPage />} />

                {/* 👇️ no other routes match */}
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </DefaultLayout>
    );
}

export default App;
