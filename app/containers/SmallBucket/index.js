import React from 'react';
import { SmallCircle, InsideText, FruitName, TastyText, FruitDescription} from '../../styles/smallCircle';
import { DoneCircle, CancelButton } from '../../styles/cancelCircle';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateFruit} from '../App/action';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserData } from '../App/selector';
import { browserHistory } from 'react-router';
import { BucketStyle } from '../../styles/bucket';
import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';

const dropAction = {
    drop(props, monitor, component) {
        props.edit();
        component.expand();
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true })
    };
}

class SmallBucket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           value:props.slide,
           hover:false,
           animation:false,
           expand:false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isOver && nextProps.isOver) {
            this.hover();
        }
        if (this.props.isOver && !nextProps.isOver) {
            this.hover();
        }
    }

    hover = () => {
        this.setState({
            ['hover']:!this.state.hover
        })
    }

    expand = () => {
        this.setState({
            ['expand']:!this.state.expand,
            ['animation']:!this.state.animation
        })
    }
    cancelButton = () => {
        this.expand();
        this.props.edit();
    }
    changePage = () => {
        if(this.state.expand){
            
        }
        else{
            browserHistory.push('/tasty');
        }
    }

    convertValue = (value) => {
        let tasteValue;
        if(value>=15){
            tasteValue = 20;
        }
        else if(value>5){
            tasteValue = 10;
        }
        else{
            tasteValue = 0;
        }
        return tasteValue;
    }

    doneButtonAction = () => {
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].id == this.props.detail.id) {
                this.props.data[i].isVisible = true;
                this.props.data[i].tasteValue = this.convertValue(this.state.value);
            }
        }
        this.setState({
            ['data']: this.props.data
        }, () => {
            this.props.updateFruit(this.state.data);
        })    
    }

    change = e => {
        this.setState({
            ['value']: e.target.value
        })
    }
     value = (indexValue) => {
        if(indexValue==0){
            return 3;
        }
        else if(indexValue==1){
            return -22;
        }
        return -46;
    }

    show = (expand,text,detail) => {
        if(expand){
            return (
                <div>
                <InsideText expand={expand}>
                    <TastyText>{text}</TastyText>
                    <FruitName>{detail.name}</FruitName>
                    <FruitDescription>{detail.description}</FruitDescription>
                    <div className="row slider">
                        <ReactBootstrapSlider
                            value={this.state.value}
                            step={0.1}
                            max={20}
                            min={0}
                            orientation="horizontal"
                            change={this.change}
                            reversed={false}
                            ticks_labels={["LESS", "SOMEWHAT", "VERY"]}
                            ticks={[0, 10, 20]}
                            tooltip="hide"
                            disabled={this.state.disabled}
                        />
                    </div>
                </InsideText>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-4">
                    <DoneCircle onClick={this.doneButtonAction} >
                        DONE
                    </DoneCircle>
                    <CancelButton onClick={this.cancelButton} >
                        CANCEL
                    </CancelButton>
                </div>
            </div>
            </div>
            )
        }
        else{
            return(
                <InsideText expand={expand}>
                    {text}
                </InsideText>
            
            )
        }
    }

    render() {
        const { hover, expand, animation } = this.state;
        const { connectDropTarget, isOver, text, indexValue, detail } = this.props;

        return connectDropTarget(
                <div>
                <BucketStyle>
                    <SmallCircle  onClick={this.changePage} hover={hover} value={this.value(indexValue)} animation={animation}>
                        { this.show(expand,text,detail) }
                    </SmallCircle>   
               </BucketStyle>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    data: makeSelectUserData(),
  });

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ updateFruit: updateFruit }, dispatch)
}

SmallBucket.PropTypes = {
    connectDropTarget:PropTypes.func.isRequired,
    isOver:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    indexValue:PropTypes.number.isRequired,
    detail:PropTypes.object.isRequired
} 

SmallBucket = DropTarget(ItemTypes.CARD, dropAction, collect)(SmallBucket);
export default connect(mapStateToProps, matchDispatchToProps)(SmallBucket);