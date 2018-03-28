import styled, { css } from 'styled-components';

const Header = css`
background-color: #4c87bb;
color: white;
width:100vw;    
top:0px;
left:0px;
right: 0px;
z-index: 3;
position: relative;
`

const HeaderStyle = styled.div`
${ Header }
`
const Bottom = css`
    width: 100vw;
    z-index: 3;
    height: 2vh;
    background-color: #e4dbdb;
    position: relative;
`
const BottomHeader = styled.div`
${ Bottom }
`
const HeaderMargin = styled.div`
margin-top: 15px;
margin-bottom: 15px;
`
export { HeaderStyle, BottomHeader, HeaderMargin};