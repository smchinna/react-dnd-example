import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateFruit} from '../App/action';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserData } from '../App/selector';
import SmallBucket from '../SmallBucket';
import DragCircle from '../DragCircle';
import PropTypes from 'prop-types';
import { DropContent } from '../../styles/dropContent';
import { CaratSymbol } from '../../styles/bucket';

class Bucket extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            displayData: undefined,
            Bucket:[
                {
                    name:'NOT EXPERIENCED',
                    value:0
                },
                {
                    name:'SOME EXPERIENCED',
                    value:10
                },
                {
                    name:'VERY EXPERIENCED',
                    value:20
                }],
            display:false,
        }
    }
    
    edit = () => {
        this.props.displayFooter();
        this.setState({
            ['display']:!this.state.display
        })
    }


    componentWillMount() {
        for (let i = 0; i < this.state.data.length; i++) {
            if (!this.state.data[i].isVisible) {
                this.setState({
                    ['displayData']: this.state.data[i]
                },() => {
                    console.log('state--',this.state.displayData)
                })
                i = this.state.data.length;
            }
        }
    }

    displayDrag = (display,displayData,data) => {
        if(display){
            return null;
        }
        else{
            return (
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-4">
                <DropContent >
                    <CaratSymbol>^</CaratSymbol>
                    <p>DRAG & DROP</p>
                </DropContent>
                <DragCircle  detail={displayData} data={data}/>
            </div>
            )
        }
    }

    render(){

        const { displayData, Bucket, display, data } = this.state;
        const dropBucket = Bucket.map((Bucket,index) => {
                return (
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"  key={index}>
                        <SmallBucket edit={this.edit} text={Bucket.name} slide={Bucket.value} detail={displayData} indexValue={index}/>
                    </div>
                );
        })

        return(
            <div>
            <div className="row"> 
                <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-1 overflow">  
                    {dropBucket}
                 </div>
            </div>
            <div className="row">   
                {this.displayDrag(display,displayData,data)}
            </div>
            </div>
        )
    }
}

Bucket.PropTypes={
    data:PropTypes.array.isRequired
}

const mapStateToProps = createStructuredSelector({
    data: makeSelectUserData(),
  });


export default connect(mapStateToProps)(Bucket);