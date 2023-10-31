import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Images } from "../../../constants/images";
import { useEffect, useLayoutEffect } from "react";
import Header from "../../../components/header/Header";
import Banner from "../../../components/banner/Banner";
import ButtonComponent from "../../../components/button";
import { Container } from "reactstrap";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { themeDarkAction } from "../../../redux/action/photoAction/photoAction";

export default function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  const dispatch = useDispatch();
  const { themeDark } = useSelector((state) => state.photo);
  useLayoutEffect(() => {
    if (new Date().getHours() >= 18) dispatch(themeDarkAction(true));
  }, [dispatch]);

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
    <div className={`${themeDark ? "theme-dark" : "theme-light"}`}>
      <Header
        location={location}
        isLogin={isLogin}
        clickLogOut={handleClickLogOut}
        dispatch={dispatch}
      />
      <Banner
        title="Your awesome photos 🎉"
        imgUrl={themeDark ? Images.bannerDark : Images.bannerLight}
      />
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
