import React from 'react';
import { FooterStyle, BottomFooter } from '../../styles/footer';
import { BottomHeader } from '../../styles/header';
import { BigCircle } from '../../styles/bigCircle/BigCircle';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <FooterStyle>
                    <BottomHeader />
                </FooterStyle>
                <BottomFooter>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-4">
                        <BigCircle />
                    </div>
                </BottomFooter>
            </div>
        )
    }
}

export default Footer;