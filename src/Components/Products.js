import { Col, Row } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/insectbar1.jpg";
import projImg2 from "../assets/insectbar4.png";
import projImg3 from "../assets/insectbar2.jpg";
import projImg4 from "../assets/insectbar3.png";
import projImg5 from "../assets/insectbar5.png";
import projImg6 from "../assets/insectbar6.png";


export const Products = () => {
    const projects = [
        {
            title: ('Berry & Amandes'),
            description: (''),
            imgUrl: projImg1,
            link: "",
            tab: "Essento",
        },
        {
            title: ('Banane & Chocolat'),
            description: (""),
            imgUrl: projImg2,
            link: "",
            tab: "Jimini",
        },
        {
            title: ('Cacao'),
            description: (''),
            imgUrl: projImg3,
            link: "",
            tab: "Essento",
        },
        {
            title: ('Abricot'),
            description: (''),
            imgUrl: projImg4,
            link: "",
            tab: "Jimini",
        },
        {
            title: ('Figue'),
            description: (''),
            imgUrl: projImg5,
            link: "",
            tab: "Jimini",
        },
        {
            title: ('Pomme & Caramel'),
            description: (''),
            imgUrl: projImg6,
            link: "",
            tab: "Jimini",
        },
    ];
    return (
        <section className="hidden">
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col><h2>Nos Produits</h2>
                        <p>Ci-dessous vous retrouverez nos produits disponibles. <br></br></p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Jimini's</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Essento</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {projects.filter(project => project.tab === "Jimini").map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {projects.filter(project => project.tab === "Essento").map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    );
}