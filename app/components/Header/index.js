import React from 'react';
import { HeaderStyle, BottomHeader, HeaderMargin } from '../../styles/header';

class Header extends React.Component {
    render() {
        return (
            <div>
                <HeaderStyle >
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-3">
                            <HeaderMargin>
                                VEEVRA
                            </HeaderMargin>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 col-lg-offset-10 col-md-offset-10 col-sm-offset-9 col-xs-offset-8">
                            <HeaderMargin>
                                <span className="glyphicon glyphicon-align-justify"></span>
                            </HeaderMargin>
                        </div>
                    </div>
                </HeaderStyle>
                <div className="row">
                    <BottomHeader />
                </div>
            </div>
        )
    }
}

export default Header;