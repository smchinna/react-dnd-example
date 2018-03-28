import styled from 'styled-components';

const QuesButton = styled.div`
margin: 20px;
font-size: 26px;
padding: 13px;
color: white;
text-align: center;
border: 2px solid black;
background-color: green;
border-radius:3%;
// animation-name:RightToLeft;
// animation-duration: 2s;
// @keyframes RightToLeft {
//     from {margin-left: 100vw;}
//     to {margin-left: 20px;}
// }

`

const Margin = styled.div`
margin-top:30%;
margin-left:20%;
margin-right:20%;
text-align : center;
cursor:pointer;
`
const Header = styled.div`
margin-top : 30px;
margin-bottom : 30px;
font-size:40px;
color:steelblue;
`

export { QuesButton, Margin,Header };