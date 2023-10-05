export const Footer = () => {
    return (
        <footer className="footer">
            {/* <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div> */}
            {/* <ul className="social_icon">
                <li><a href="https://github.com/lencedev" target='_blank'><ion-icon name="logo-github"></ion-icon></a></li>
                <li><a href="https://www.linkedin.com/in/owen-bolling-5aa651242/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a></li>
            </ul> */}
            <ul className="menu">
                <li><a href="#home">Accueil</a></li>
                <li><a href="#skills">A propos</a></li>
                <li><a href="#projects">Nos produits</a></li>
            </ul>
            <p>
                @2023 BuggyBars | All Rights Reserved</p>
        </footer>
    );
}
