import { useRef, useState } from "react";
import images from "../images";

const Contact = ()=>{

    const [formState, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [label1, label2, label3] = [useRef(null), useRef(null), useRef(null)];

    const handleFocus = event=>{
        if(event.target.name === "name"){
            label1.current.style.color = 'rgb(202, 138, 4)';
        }else if(event.target.name === "email"){
            label2.current.style.color = 'rgb(202, 138, 4)'
        }else if(event.target.name === "message"){
            console.log("event")
            label3.current.style.color = 'rgb(202, 138, 4)';
        }

    }

    const handleBlur = event=>{
        if(event.target.name === "name"){
            label1.current.style.color = '';
        }else if(event.target.name === "email"){
            label2.current.style.color = ''
        }else if(event.target.name === "message"){
            label3.current.style.color = ''
        }
    }


    const handleChange = event=>{
        if(event.target.name === 'message'){
            if(event.target.value.length === 0){
                label3.current.classList.add('contactMessageLabel')
            }else{
                label3.current.classList.remove('contactMessageLabel')
            }
        }
        setForm(prevState=>{
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return(
        <section className="contactSection">
            <div className="downloadCallToAction">
                <figure className="contactImage lampImageContainer">
                    <img src={images.lamp} alt="lamp design"/>
                </figure>
                <button className="callToActionButton contactCallToActionButton">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg>
                    Download The App
                </button>
                <figure className="contactImage bottomDesignImageContainer tabletHide mobileHide">
                    <img src={images.headerHero} alt="bottom design" />
                </figure>

            </div>
            <div className="contactFormContainer">
                <form className="contactForm" id="mainContactForm">
                    <fieldset>
                        <h2 className="contactFormTitle">Contact Us</h2>
                        <label ref={label1} className="contactLabel" htmlFor="name">ENTER NAME </label>
                        <input className="contactInput" required type="text" value={formState.name} name="name" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
                        
                        <label ref={label2} className="contactLabel" htmlFor="email">ENTER MAIL</label>    
                        <input className="contactInput" required type="email" value={formState.email} name="email" onChange={handleChange}  onFocus={handleFocus} onBlur={handleBlur}/>
                        
                        <div className="formMessageContainer">
                            <label ref={label3} className="contactLabel contactMessageLabel" htmlFor="message">ENTER MESSAGE</label>
                            <textarea className="formMessage" form="mainContactForm" value={formState.message} name="message" onChange={handleChange}  onFocus={handleFocus} onBlur={handleBlur} required>
                            </textarea>
                        </div>
                        <button className="formSignUp">Sign Up</button>
                    </fieldset>
                </form>
            </div>
        </section>
    )

}

export default Contact;