import { Route, Routes } from "react-router-dom"
import Admin from "../pages/admin/Admin"
import User from "../pages/user/User"
import Header from "../components/ui/header/Header"
import Home from "../pages/home/Home"
import Footer from "../components/ui/footer/Footer"
import Detail from "../pages/product/Detail"
import NotFound from "../pages/notFound/NotFound"
import Playfields from "../pages/admin/Playfields"


export const Navigation = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path='/club/:id' element={<Detail />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/admin/club/:id" element={<Playfields />} />
                <Route exact path="/signup" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}
