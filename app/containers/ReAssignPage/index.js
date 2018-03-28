import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { bindActionCreators } from 'redux';
import { reAssign } from '../App/action';
import { TastyColor, ReAssignMargin, ReAssignText, ReAssignButtonMargin, ReAssignPadding, TextHover } from '../../styles/tastyColor/TastyColor';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserData } from '../App/selector';
import PropTypes from 'prop-types';

class ReAssignPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reAssign: false,
            data: this.props.data,
            id: this.props.value,
            totalData: this.props.totalData
        }
    }

    changeAssign = () => {
        this.setState({
            ['reAssign']: !this.state.reAssign
        }
        )
    }

    done = () => {
        let duplicateData = this.state.totalData;
        for (let i = 0; i < this.state.totalData.length; i++) {
            if (this.state.totalData[i].id == this.state.data.id) {
                duplicateData[i].isVisible = false;
                duplicateData[i].tasteValue = '';
            }
        }
        this.setState({
            ['totalData']: duplicateData
        }, () => {
            this.props.reAssign(this.state.totalData)
        })
    }

     reAssignDetail = (data,reAssign) => {
        if (reAssign) {
            return (
                <ReAssignMargin key={data.id}>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <h4>{data.name} has been added back to your cards reassignment</h4>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <TextHover>
                                <ReAssignText onClick={this.done}>Done</ReAssignText>
                            </TextHover>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <TextHover>
                            <ReAssignText onClick={this.changeAssign}>Undo</ReAssignText>
                            </TextHover>
                        </div>
                    </div>
                </ReAssignMargin>
            )
        }
        else {
            return (
                <ReAssignMargin key={data.id}>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <h4>{data.name}</h4>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <ReAssignButtonMargin>
                            <MuiThemeProvider>
                                <RaisedButton label="REASSIGN" secondary={true} onClick={this.changeAssign} />
                            </MuiThemeProvider>
                        </ReAssignButtonMargin>
                        </div>
                    </div>
                </ReAssignMargin>
            )
        }
    }

    render() {
        const { data, reAssign } = this.state;
        const { color } = this.props;

        return (
                <TastyColor value={color} key={data.id} reAssign={reAssign}>
                    <ReAssignPadding>
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10 col-lg-offset-2 col-md-offset-2 col-sm-offset-1 col-xs-offset-1" >
                                {this.reAssignDetail(data,reAssign)}
                            </div>
                        </div>
                    </ReAssignPadding>
                </TastyColor>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    totalData: makeSelectUserData(),
});


function matchDispatchToProps(dispatch) {
    return bindActionCreators({ reAssign: reAssign }, dispatch)
}

ReAssignPage.PropTypes={
    color:PropTypes.bool.isRequired,
    data:PropTypes.object.isRequired,
    totalData:PropTypes.array.isRequired,
    value:PropTypes.number.isRequired
}

export default connect(mapStateToProps, matchDispatchToProps)(ReAssignPage);