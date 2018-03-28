import React from 'react';
import { connect } from 'react-redux';
import SliderBar from '../../components/SliderBar';
import ReAssignPage from '../ReAssignPage';
import { FruitName, TastyText, FruitDescription} from '../../styles/smallCircle';
import { TastyColor, FruitNameSlider, EditButton, CloseIcon, TastyFullPage} from '../../styles/tastyColor/TastyColor';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserData } from '../App/selector';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { fetchData } from './selector';

class TastyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reAssign: false,
            edit: false,
            data: props.data,
        }
    }

    componentWillMount() {
        let arr = [];
        if (this.state.data == undefined) {
            arr = undefined;
        }
        else {
            for (let i = 0; i < this.state.data.length; i++) {
                if (this.state.data[i].isVisible) {
                    arr.push(this.state.data[i]);
                }
            }
        }
        this.setState({
            ['visibleData']: arr
        })
    }
    closeImage = () => {
        browserHistory.push("/")
    }

    editList = () => {
        this.setState({
            ['edit']: !this.state.edit
        })
    }

    showFruit = (edit,visibleData,reAssign) => {
        if (edit) {
            return (
                <div>
                    <div className="row">
                        <TastyText>VERY TASTY</TastyText>
                    </div>
                    <div className="row">
                        {this.fruitComponent(visibleData,reAssign)}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="row">
                        <TastyText>VERY TASTY</TastyText>
                        <EditButton onClick={this.editList}>EDIT LIST</EditButton>
                        <FruitDescription>Would you ever purchase this fruit?</FruitDescription>
                    </div>
                    <div className="row">
                        {this.slideBar(visibleData)}
                    </div>
                </div>
            );
        }
    }
    slideBar = (visibleData) => {
        if (visibleData !== undefined) {
            return visibleData.map((fruit) => {
                let color;
                if (fruit.id % 2 == 0) {
                    color = true
                }
                else {
                    color = false;
                }
                return (
                    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1" key={fruit.id}>
                        <TastyColor value={color} key={fruit.id} >
                            <div className="row" >
                                <FruitNameSlider>{fruit.name}</FruitNameSlider>
                                <SliderBar data={fruit} />
                            </div>
                        </TastyColor>
                    </div>

                )
            })
        }
        else {
            return (
                <FruitDescription>
                    There is no Fruits purchase
                </FruitDescription>
            )
        }
    }

    fruitComponent = (visibleData,reAssign) => {
        if (visibleData !== undefined) {
            return visibleData.map((data) => {
                let color;
                if (data.id % 2 == 0) {
                    color = true
                }
                else {
                    color = false;
                }
                return (
                    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1" key={data.id}>
                        <ReAssignPage data={data} color={color} reAssign={reAssign} key={data.id} value={data.id} />
                    </div>
                )
            })
        }
        else {
            return (
                <FruitDescription>
                    There is no Fruits purchase
                </FruitDescription>
            )
        }
    }

    render() {
        const { data } = this.props;
        const { edit, reAssign, visibleData, reAssignColor } = this.state;
        console.log("ss",this.props)
        return (
            <div className="row">
                <TastyFullPage>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 col-lg-offset-11 col-md-offset-11 col-sm-offset-11 col-xs-offset-11">
                            <CloseIcon onClick={this.closeImage}>X</CloseIcon>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {this.showFruit(edit,visibleData,reAssign)}
                        </div>
                    </div>
                </TastyFullPage>
            </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    data: makeSelectUserData(),
    tasty:fetchData()
  });

TastyPage.PropTypes = {
    data:PropTypes.array.isRequired
}


export default connect(mapStateToProps)(TastyPage);