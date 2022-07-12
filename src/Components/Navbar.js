import { useEffect, useRef, useState } from 'react';
import images from '../images.js'

const Navbar = ()=>{
    const [burgerMenuRef, burgerMenuDropRef] = [useRef(null), useRef(null)];
    const [menuOpen, setMenuOpen] = useState(false);

    const handleBurgerClick = event=>{
        burgerMenuRef.current.classList.toggle('burgerChange');
        window.scrollTo(0,0);
        setMenuOpen(prevState=>!prevState);
    }

    useEffect(()=>{
        document.body.style.overflow = menuOpen?"hidden":"auto";
        if(!menuOpen){
            burgerMenuDropRef.current.classList.add("hideBurgerDrop");
        }else{
            burgerMenuDropRef.current.classList.remove("hideBurgerDrop");
        }
    }, [menuOpen, burgerMenuDropRef])

    return(
        <>
            <div className="tabletLogo">
                <img className="brandLogo tabletShow" src={images.brandLogo} alt="brand logo"/>
            </div>
            <nav className="navbarInner">
                <ul className="navItems">
                    <li className="navItem">HOME</li>
                    <li className="navItem">CONTACT</li>
                </ul>
                <img className="brandLogo tabletHide" src={images.brandLogo} alt="brand logo"/>
                <ul className="actionButtons">
                    <button className="actionButton loginButton">LOGIN</button>
                    <button className="actionButton signUpButton">SIGN UP</button>
                </ul>
                
                <div className="burgerMenu" ref={burgerMenuRef} onClick={handleBurgerClick}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
                <nav className="burgerMenuDrop" ref={burgerMenuDropRef}>
                    <ul className="navItemsDrop">
                        <li className="navItem">HOME</li>
                        <li className="navItem">CONTACT</li>
                    </ul>
                    <ul className="actionButtonsDrop">
                        <button className="actionButton loginButton">LOGIN</button>
                        <button className="actionButton signUpButton">SIGN UP</button>
                    </ul>
                </nav>
                
            </nav>
        </>
    )
}

export default Navbar;