
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../Constants';
import { withRouter } from 'react-router';
import { CloseImage, CloseMargin } from '../../styles/closeImage/CloseImage';
import { MiddleHeader } from '../../styles/middleHeader/MiddleHeader';
import { MiddleBody } from '../../styles/middleBody/MiddleBody';
import { MiddleFooter } from '../../styles/middleFooter/MiddleFooter';
import { BigCircle, InformationOnCard, Badge} from '../../styles/bigCircle/BigCircle';

const dragAction = {
    beginDrag(props, monitor, component) {
        
        return ({
            
        })
    },
    endDrag(props, monitor, component) {

    }
};


function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        getSourceClientOffset: monitor.getSourceClientOffset()
    }
}
class DragCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dropAnimationData:false
        }
    }
    changeHover = () => {
        this.setState({
            ['isOpen']: !this.state.isOpen,
        })
    }

    changeBorder = (e) => {
        this.setState({
            ['dropAnimationData']:!this.state.dropAnimationData
        })
    }

    show = (isOpen, detail, data, connectDragSource) => {
        if (isOpen) {
            return (
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 col-lg-offset-10 col-md-offset-10 col-sm-offset-10 col-xs-offset-10 icon-height">
                        <CloseMargin>
                            <CloseImage onClick={this.changeHover}>X</CloseImage>
                        </CloseMargin>
                   </div>
                    <MiddleHeader value={isOpen} >
                        <p>{detail.id}/{data.length}</p>
                        <p>{detail.name}</p>
                        <p>----</p>
                    </MiddleHeader >
                    <MiddleBody value={isOpen}>
                        <p>{detail.description}</p>
                    </MiddleBody>
                </div>
            )
        }
        else {
            return connectDragSource(
               <div >
                   <MiddleHeader value={isOpen} >
                   <p>{detail.id}/{data.length}</p>
                   <p>{detail.name}</p>
               </MiddleHeader >
               <MiddleBody value={isOpen}>
                   <p>{detail.description}</p>
               </MiddleBody>
                    <MiddleFooter value={isOpen}>
                        <Badge onClick={this.changeHover}>i</Badge>
                    </MiddleFooter>
                </div>
            )
        }
    }
    
    render() {
        const { isOpen, visible, dropAnimationData } = this.state;
        const { isDragging, connectDragSource, getSourceClientOffset, detail, data } = this.props;

        return (
            <div>
                <BigCircle value={isOpen} visible={isDragging} >
                        {this.show(isOpen,detail,data,connectDragSource)}     
                </BigCircle>
            </div>
        );
    }
}
DragCircle.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    data:PropTypes.array.isRequired,
    detail:PropTypes.object.isRequired
};



export default withRouter(DragSource(ItemTypes.CARD, dragAction, collect)(DragCircle));