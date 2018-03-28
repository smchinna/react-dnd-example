import styled, { css } from 'styled-components';

const Footer = css`
position: fixed;
bottom: 0px;
left: 0px;
right: 0px;
z-index:3;
`

const FooterStyle = styled.div`
${ Footer };
`

const BottomFooter = styled.div`
width:100vw;
position: fixed;
z-index: 3;
bottom: -24vh;
`

export { FooterStyle, BottomFooter };