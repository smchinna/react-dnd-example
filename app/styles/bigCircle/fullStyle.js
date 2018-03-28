import { css } from 'styled-components';

const fullStyle = css`
    background-color: #4fabce;
    color:white;
    overflow:hidden;
    position:absolute; 
    width:131vw;
    height:164vh;
    margin-top:-80vh;
    margin-left:-50vw;
    z-index:4;
    border-radius: 50%;
    font-size:18px;
    transition: height 0.3s, width 0.3s, margin 0.3s;
    transition-timing-function: ease;
    text-align:center;
`

export default fullStyle;