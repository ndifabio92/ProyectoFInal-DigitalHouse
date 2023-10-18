import { Route, Routes } from "react-router-dom"
import Admin from "../pages/admin/Admin"
import Header from "../components/Header"

export const Navigation = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/admin" element={<Admin />} />
                <Route path="*" element={<h1>NOT FOUND</h1>} />
            </Routes>
        </>
    )
}
