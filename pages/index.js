import Head from 'next/head';
import NavBar from '../components/NavBar';
import HomePage from './homepage';
import Features from './features';
import AboutUs from './aboutUs';
import Footer from '../components/footer';
import Image from 'next/image';
import Demo from './demo';

export default function Home() {
  return (
    <div className="mainContainer">
      <NavBar />
      <div>
        <div className="homePage" id="section1">
          <HomePage />
        </div>
        <div className="features-container" id="section2">
          <Features />
        </div>
        <div className="demo-container" id="section3">
          <Demo />
        </div>
        <div className="about-container" id="section4">
          <AboutUs />
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
