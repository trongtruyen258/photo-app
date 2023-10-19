import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./header.scss";

export default function Header({ location, isLogin, clickLogOut }) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Link to={"/home"}>Home</Link>
          </Col>
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
        </Row>
      </Container>
    </header>
  );
}
