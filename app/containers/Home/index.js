import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Bucket from '../Bucket';
import PropTypes from 'prop-types';
import DragDropContext from 'react-dnd/lib/DragDropContext';
import MultiBackend, { createTransition } from 'react-dnd-multi-backend';
import TouchBackend from 'react-dnd-touch-backend';
import HTML5Backend from 'react-dnd-html5-backend';
import '../../css/main.css';
import { AppStyle } from './style';

const TouchTransition = createTransition('touchstart', (event) => {
    return event.touches != null;
  });

const HTML5toTouch = {
    backends: [
        {
        backend: HTML5Backend
        },
        {
          backend: TouchBackend({enableTouchEvents: true}), 
          preview: true,
          transition: TouchTransition
        }
    ]
  };

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            footer:false
        }
    }

    displayFooter = () => {
        this.setState({
            ['footer']:!this.state.footer
        })
    }
    
    display = (footer) => {
        if(footer){
            return null;
        }
        else{
            return <Footer />
        }
    }
    
    render(){
        const { footer } = this.state;
        return(
            <AppStyle>
               <Header />
                <Bucket displayFooter={this.displayFooter}/>
                {this.display(footer)}
            </AppStyle>
        )
    }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(Home)