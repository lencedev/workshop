import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { About } from './Components/About';
import { Products } from './Components/Products';
import { Footer } from './Components/Footer';
import { Map } from './Components/Map';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        }
    }, []);

    return (
        <div className="App">
            <NavBar />
            <Banner />
            <About />
            <Products />
            <Map />
            <Footer />
        </div>
    );
}

export default App;
