import styled, { css } from 'styled-components';

const circle = css`
height: ${props => props.hover ? '132vh':'17vh'};
width:${props => props.hover ? '200vw':'17vh'};
left:${props => props.hover ? '0px !important':''};
margin-top: ${props => props.right ? '-152vh':'6vh'};
margin-top: ${props => props.left ? '-74vh':''};
margin-left:${props => props.hover ? '-52vw':'calc((33.3vw - 20vh)/2)'};
position:relative;
z-index:1;
background-color:${props => props.visible ? 'lightblue;': ''};
border:${props => props.visible ? '3px solid #4c87bb;': '2px solid #777'};
border-style: dotted;
border-radius: 50%;
transition: height 0.5s, width 0.5s, margin 0.5s;
transition-timing-function: ease;
`

const SmallCircle = styled.div`
  text-transform: uppercase;
  width: 21vh;
  height: 21vh;
  border: 0.4vmin dotted #cccccc;
  border-radius: 50%;
  text-align: center;
  margin-left: 28%;
  margin-top: 3vmin;
  cursor: pointer;
  transform: translateX(-16%);
  position: relative;
  z-index:1;
  
  ${props => props.hover && css`
  border:0.4vmin dotted #4c87bb;
  background-color:lightblue;
  `}
  ${props => props.animation && css`
  width: 300vw !important;
  height: 200vh !important;
  margin-top: auto;
  cursor: default;
  background-color:white;
  margin-left: ${props.value}vw;
  animation-name: openBucket;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  transform: translateX(-17%);
  animation-fill-mode: forwards;
  z-index:2;
  
  
  @keyframes openBucket {
        from { width: 21vh; height: 21vh; top: 90px; }
        to { width: 150vw; height: 70vh; top: -20vh; }
  }
  
  @media(min-width: 767px ) {
     @keyframes openBucket {
      from { width: 100px; height: 100px; top: 0; }
      to { width: 100vw; height: 75vh; top: -20vh; }
    }
  }
  `}
${props => props.example && css`
width: 300vw !important;
height: 200vh !important;
margin-top: auto;
cursor: default;
background-color:white;
margin-left: ${props.value}vw;
animation-name: openBucket;
animation-duration: 0.5s;
animation-timing-function: linear;
transform: translateX(-17%);
animation-fill-mode: forwards;
z-index:2;


@keyframes openBucket {
      from { width: 100px; height: 100px; top: 90px; }
      to { width: 150vw; height: 70vh; top: -20vh; }
}

@media(min-width: 767px ) {
   @keyframes openBucket {
    from { width: 100px; height: 100px; top: 0; }
    to { width: 100vw; height: 75vh; top: -20vh; }
  }
}
`}

${props => !props.animation && css`
max-width: 300vw !important;
max-height: 100vh !important;
animation-name: closeBucket;
animation-duration: 0.2s;
animation-timing-function: linear;
animation-fill-mode: forwards;
@keyframes closeBucket {
  from {width: 150vw; height: 70vh; top: -20vh; }
  to {width: 20vmin; height: 20vmin; top: 0; }
}

@media(min-width: 767px) {
  @keyframes closeBucket {
    from {width: 150vw; height: 70vh; top: -20vh; }
    to {width: 20vmin; height: 20vmin; top: 0; }
  }
}
`}
`
const text = css`
padding-top:${props => props.expand ? '20vh;':'5vh'};
margin-left:${props => props.expand ? '-7vh;':''};
font-size: 16px; 
`
const InsideText = styled.div`
${ text }
`
const FruitName = styled.div`
font-size: 3.5vh;
font-weight: bold;
padding-left:22px; 
margin-top: 3vh;
margin-bottom: 4vh; 
`
const TastyText = styled.div`
font-size: 4vh;
color: #757674;
padding-left:22px;  
`

const FruitDescription = styled.div`
font-size: 2.5vh;
padding-left:22px;  
margin-top: 5vh;`

export { SmallCircle, InsideText, FruitName, TastyText, FruitDescription}