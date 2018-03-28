import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';

class SliderBar extends React.Component{
    
    render(){
        return(
            <div>
                <ReactBootstrapSlider
                    value={this.props.data.tasteValue}
                    step={10}
                    max={20}
                    min={0}
                    orientation="horizontal"
                    reversed={false}
                    ticks_labels = {["LESS", "SOMEWHAT", "VERY"]}
                    ticks = {[0, 10, 20]}
                    tooltip="hide"
                    disabled="disabled"
                />
            </div>
        )
    }
}

export default SliderBar;