import styled, { css } from 'styled-components';

const Bucket = css`
height:75vh;
`
const Hover = css`
z-index:2;
height:171vh;
position:relative;
background-color:white;
transition:height 1s;
`
const BucketStyle = styled.div`
${ props => props.hover ? Hover : Bucket };
`

const CaratSymbol = styled.div`
font-size:27px;
line-height: 1.5em;
`


export { BucketStyle, CaratSymbol };