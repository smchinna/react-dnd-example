import styled from 'styled-components';
import style from './style';

const CloseImage = styled.span`
${ props => !props.value ? style : 'display:none' }`;


const CloseMargin = styled.div`
margin-top: 28vh ;
float:initial; 
@media (min-width: 700px){
    margin-top: 37vh !important;
}
@media (min-width: 1200px){
    margin-top: 31vh !important;
}
`
export {CloseImage, CloseMargin};