import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/healthyfood.png";
import meter2 from "../assets/safefood.png";
import meter3 from "../assets/eco.png";

export const About = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <section className="hidden">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                A propos
                            </h2>
                            <p>Notre nourriture est contrôlée, saine et éco-responsable<br></br></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" draggable="false"/>
                                    <h5>Nourriture saine</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" draggable="false"/>
                                    <h5>Barres contrôlées</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" draggable="false"/>
                                    <h5>Consommation éco-reponsable</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </section>
    )

};