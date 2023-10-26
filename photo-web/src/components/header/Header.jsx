import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./header.scss";
import SwitchButton from "../switchButton/SwitchButton";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { themeDarkAction } from "../../redux/action/photoAction/photoAction";
import { useSelector } from "react-redux";

export default function Header({ location, isLogin, clickLogOut, dispatch }) {
  const { themeDark } = useSelector((state) => state.photo);
  return (
    <header className={`header ${themeDark ? "header-theme-dark" : ""}`}>
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Link to={"/home"}>Home</Link>
          </Col>
          <Col xs="auto">
            <Row>
              {location.pathname !== "/login" &&
                (isLogin ? (
                  <Col xs="auto">
                    <Link to={"/"} onClick={clickLogOut}>
                      Log out
                    </Link>
                  </Col>
                ) : (
                  <Col xs="auto">
                    <Link to={"/login"}>Login</Link>
                  </Col>
                ))}
              <Col xs="auto">
                <SwitchButton
                  leftLabel={<BsSun />}
                  rightLabel={<BsMoonStars />}
                  onChange={(e) => dispatch(themeDarkAction(e.target.checked))}
                  defaultChecked={themeDark}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
