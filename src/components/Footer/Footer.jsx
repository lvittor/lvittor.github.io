import React from 'react';
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import Link from "components/_ui/Link/Link";
import SpinningPets from "components/SpinningPets/SpinningPets";
import './Footer.scss';


const Footer = () => {
    return (
        <div className="Footer__container">
            <MaxWidth size="l" className="Footer">
                <div className="Footer__pets">
                    <SpinningPets />
                </div>
                <div className="Footer__copyright__container">
                    <span className="Footer__copyright">
                    <Link
                        className="Footer__copyright__link"
                        href="https://www.linkedin.com/in/lvvittor/"
                    >
                        &copy; 2020 Vittor Lucas — 
                        </Link> </span>
                    <Link
                        className="Footer__copyright__link"
                        href="https://github.com/margueriteroth"
                    >
                        Marguerite Roth 
                    </Link>
                </div>
            </MaxWidth>
        </div>
    );
};

Footer.propTypes = {

};

export default Footer;
