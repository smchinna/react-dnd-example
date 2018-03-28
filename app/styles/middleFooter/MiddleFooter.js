import styled from 'styled-components';
import style from './style';
import fullStyle from './fullStyle';

const MiddleFooter = styled.div`
${ props => props.value ? style : fullStyle }`;

export {MiddleFooter};