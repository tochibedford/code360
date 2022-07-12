import images from "../images";
import { generateRandomKey } from "../helpers";

const Partners = ()=>{
    let partnerImageElements = [];

    images.partners.forEach((partnerImage, index)=>{
        let randomKey = generateRandomKey(10)
        partnerImageElements.push(
            <figure  key={randomKey} className="partnerImageContainer">
                <img id={randomKey} className="partnerImage" src={partnerImage[0]} alt={`${partnerImage[1]} partner`} />
            </figure>
        )
    })

    return(
        <section className="partners">
            <h2 className="partnersHeader">Our Partners</h2>
            <p className="partnersDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, odio dolores? Quas ex odio nostrum vel fugiat consequatur, ducimus perferendis suscipit, recusandae asperiores aliquid corrupti ratione.</p>
            <div className="partnerImages">
                {partnerImageElements}
            </div>
        </section>
    )
}

export default Partners;