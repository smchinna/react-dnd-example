import { css } from 'styled-components';

const style = css`
height: 34vh;
width: 34vh;
border: 2px solid lightgray;
border-radius: 50%;
margin-left: calc((33.33vw - 34vh)/2);
overflow: hidden;
background-color:#777;
font-size:3vh;
color: white;
transition: height 0.5s, width 0.5s, margin 0.5s;
transition-timing-function: ease;
`

export default style;