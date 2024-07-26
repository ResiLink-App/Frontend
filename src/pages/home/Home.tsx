import About from "../../components/shared/home/About"
import Contact from "../../components/shared/home/Contact"
import Footer from "../../components/shared/home/Footer"
import Hero from "../../components/shared/home/Hero"
import Listings from "../../components/shared/home/Listings"

const Home = () => {

    return (
        <section className="relative w-full">
            <Hero />
            <Listings />
            <About />
            <Contact />
            <Footer />
        </section>
    )
}

export default Home