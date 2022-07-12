import images from '../images.js'

const Hero = ()=>{
    return(
        <section className="hero">
            <img className="couchHero" src={images.couchHero} alt="couch hero"/>
            <img className="headerHero" src={images.headerHero} alt="header hero" />
        </section>
    )
}

export default Hero;