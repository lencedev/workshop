import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pp.jpg";
import Typed from "typed.js";

export const Banner = () => {

    return (
        <section className="hidden">
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <h1 className="hello">Bienvenue chez</h1>
                            <h1 className="lence">BuggyBars</h1>
                        </Col>
                        {/* <Col xs={12} md={6} xl={4}>
                            <img src={headerImg} alt="Header Img" className="img-fluid" draggable="false"/>
                        </Col> */}
                    </Row>
                    {/* <div className="about-me">
                        <h2 className="h2">About me</h2>
                    </div> */}
                </Container>
            </section>
        </section>

    )
}
