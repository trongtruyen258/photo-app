import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Images } from "../../../constants/images";
import { useEffect } from "react";
import Header from "../../../components/header/Header";
import Banner from "../../../components/banner/Banner";
import ButtonComponent from "../../../components/button";
import { Container } from "reactstrap";
import Swal from "sweetalert2";

export default function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location]);
  const handleClickLogOut = () => {
    localStorage.removeItem("isLogin");
  };
  const handleClickAddNew = () => {
    if (!isLogin) {
      Swal.fire("You are not logged in!");
    } else {
      navigate("/add");
    }
  };
  return (
    <div>
      <Header
        location={location}
        isLogin={isLogin}
        clickLogOut={handleClickLogOut}
      />
      <Banner title="Your awesome photos 🎉" imgUrl={Images.banner} />
      <Container>
        {location.pathname === "/home" && (
          <ButtonComponent
            title={"Add New Photo"}
            color={"primary"}
            handleClick={handleClickAddNew}
          />
        )}

        <Outlet />
      </Container>
    </div>
  );
}
