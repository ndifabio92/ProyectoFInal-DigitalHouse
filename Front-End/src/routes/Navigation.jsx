import { Route, Routes } from "react-router-dom"
import Admin from "../pages/admin/Admin"
import Header from "../components/ui/header/Header"
import Home from "../pages/home/Home"
import Footer from "../components/ui/footer/Footer"
import Detail from "../pages/product/Detail"
import NotFound from "../pages/notFound/NotFound"
import TablePlayfields from "../components/admin/table/TablePlayfields"

export const Navigation = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path='/club/:id' element={<Detail />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/admin/club/:id" element={<TablePlayfields />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}
