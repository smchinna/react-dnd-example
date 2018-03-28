import styled, { css } from 'styled-components';

const Cancel = css`
font-weight:bold;
font-size: 2.5vh;
color:#4fabce;
margin-top:5vh;
margin-left:-1vh;
`

const CancelButton = styled.div`
${ Cancel };
`
const Done = css`
position: relative;
z-index: 2;
height: 14vh;
width:14vh;
margin-left: 33%;
background-color:#ca326a;
border-radius: 50%;
margin-top: 3.8vh;
color:white;
font-weight:bold;
font-size: 2.5vh;
padding-top: 5vh;

`

const DoneCircle = styled.div`
${ Done };
`


export { CancelButton, DoneCircle };