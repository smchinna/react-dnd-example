import styled, {css} from 'styled-components';
import fullStyle from './fullStyle';


const style = css`
display:${props => props.visible ? 'none' : 'block'};
height:${props => props.dropAnimationData ? '30vh' :'34vh'};
width: ${props => props.dropAnimationData ? '30vh' :'34vh'};
border:${props => props.dropAnimationData ? '5px solid lightblue':'2px solid #4fabce'};
border-radius: 50%;
margin-left: calc((31.33vw - 34vh)/2);
overflow: hidden;
background-color:#4fabce;
font-size:3vh;
color: white;
transition: height 0.3s, width 0.3s, margin 0.3s;
text-align:center;
`

const BigCircle = styled.div`
${props => !props.value ? style : fullStyle
}
`;

const InformationOnCard = styled.div`
    ${props => props.value && css`
    margin-top:28vh
    `}
`

const Badge = styled.div`
height: 3.5vh;
width: 3.5vh;
font-size: 2.5vh;
border-radius: 50%;
border: 2px solid white;
background-color: #4fabce !important;
display: inline-block;
min-width: 10px;
padding: 3px 7px;
font-weight: 700;
line-height: 1;
color: #fff;
text-align: center;
white-space: nowrap;
vertical-align: middle;
`
export {BigCircle, InformationOnCard, Badge};

