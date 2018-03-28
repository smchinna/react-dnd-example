import React from 'react';
import json from './sample.json';
import { QuesButton, Margin, Header } from './style';

class Sample extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data : json,

        }
    }

    selectTopic = (data) => {
        
    }

    render(){
        const quezSelection = this.state.data.quiz.map((data, key) => {
            return(
                <QuesButton key={key} onClick={() => this.selectTopic(data)}>
                    {data.name}
                </QuesButton>
            )
        })
        return(
            <Margin>
                <Header>
                   Please Select a Topic
                </Header>
               {quezSelection}
            </Margin>
        )
    }
}

export default Sample;