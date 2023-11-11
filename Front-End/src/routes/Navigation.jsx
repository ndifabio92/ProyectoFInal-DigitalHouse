import { Route, Routes } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import User from "../pages/user/User";
import Header from "../components/ui/header/Header";
import Home from "../pages/home/Home";
import Footer from "../components/ui/footer/Footer";
import Detail from "../pages/product/Detail";
import NotFound from "../pages/notFound/NotFound";
import Playfields from "../pages/admin/Playfields";
import UserSignIn from "../pages/user/UserSignIn";
import UserProfile from "../pages/user/UserProfile";
import { RequireAuth } from "../components/user/requireAuth";
import { useDataContext } from "../components/user/form 2/Context";

export const Navigation = () => {

  const {isLogged, setIsLogged} = useDataContext();

  return (
    <>
      <Header />
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/club/:id" element={<Detail />} />

        <Route
          exact
          path="/admin"
          element={
            <RequireAuth isLogged={isLogged}>
              <Admin />
            </RequireAuth>
          }
        />

        <Route exact path="/admin/club/:id" element={<Playfields />} />

        <Route exact path="/signup" element={<User />} />

        <Route exact path="/signin" element={<UserSignIn isLogged={isLogged} setIsLogged={setIsLogged}/>} />

        <Route
          exact
          path="/userprofile"
          element={
            <RequireAuth isLogged={isLogged}>
              <UserProfile />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </>
  );
};
