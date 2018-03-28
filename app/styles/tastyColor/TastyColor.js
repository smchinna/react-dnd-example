import styled, {css} from 'styled-components';

const style = css`
background-color:${ props => props.value ? 'white' : '#eaf2f5'};
background-color:${ props => props.reAssign ? 'blue' : ''};
color:${ props => props.reAssign ? 'white' : ''};
margin-top:5px;
text-align:center;
`

const TastyColor = styled.div`
${style}
`
const FruitNameSlider = styled.div`
font-size: 3.5vh;
font-weight: bold;
padding-left:22px; 
margin-top: 3vh;
argin-bottom: 4vh; 
`

const EditButton = styled.div`
font-size: 2.2vh;
margin-top: 5vh;
color :#30388C;
font-weight: bold;
`
const CloseIcon = styled.div`
padding-top: 1vh;
padding-bottom: 4vh;
font-size: 25px;
font-weight: bold;
margin-left: 80%;
`
const TastyFullPage = styled.div`
cursor: pointer;
text-align: center;
`
const ReAssignMargin = styled.div`
margin-top: 15px;
`
const ReAssignText = styled.h4`
padding-top: 5px;
`
const ReAssignButtonMargin = styled.div`
margin-top: 1.5vh;
`
const TextHover = styled.div`
&:hover {
    background-color: white;
    color: black;
}
`
const ReAssignPadding = styled.div`
padding-top: 3vh;
padding-bottom: 4vh;
`

export { TastyColor, FruitNameSlider, EditButton, TextHover, CloseIcon, TastyFullPage, ReAssignMargin, ReAssignText, ReAssignButtonMargin, ReAssignPadding};