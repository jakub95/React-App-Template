import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/*Column1*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>Phone</li>
                            <li>Email</li>
                            <li>Fax</li>
                            <li>Adress</li>
                        </ul>
                    </div>
                    {/*Column2*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Random text here</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Phone</a></li>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">Fax</a></li>
                            <li><a href="#">Adress</a></li>
                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Random text here</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Phone</a></li>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">Fax</a></li>
                            <li><a href="#">Adress</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p className="text-xs-center">&copy;{new Date().getFullYear()} City Guide App by J.K.</p>            
            </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite)
    
}
.footer-bottom{
    padding-top: 3rem; 
    padding-bottom: 2rem;
    
}

ul li a {
    color: var(--mainGrey);
}

ul li a: hover{
    color var(--mainLight)
}


`;
