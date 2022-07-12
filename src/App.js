import CallToAction from './Components/CallToAction';
import Contact from './Components/Contact';
import Header from './Components/Header'
import Partners from './Components/Partners';
import images from './images';

function App() {
  return (
    <div className='app'>
      <Header />
      <main >
        <CallToAction />
        <Partners />
        <section className="relaxContainer">
          <div className="relaxContainerInner">
            <div className="relaxLeft">
              <h2 className="relaxTitle">Relax, You're Home!</h2>
              <p className="relaxParagraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolore voluptatem dolores optio sed ut rem, libero expedita quam ex.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique tempora minima eaque cum libero voluptatibus ex! Voluptates, corrupti ducimus.
              </p>
              <button className='relaxCallToActionButton'>Sign Up</button>
            </div>
            <figure className="relaxImageContainer">
              <div className="pointlessCircle tabletHide mobileHide"></div>
              <img className="relaxImage" src={images.table} alt="table" />
            </figure>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}

export default App;
