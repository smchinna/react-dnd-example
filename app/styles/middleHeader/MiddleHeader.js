import styled from 'styled-components';

const MiddleHeader = styled.div`
${props => !props.value ? '':'margin-top:50vh'}
`;
export {MiddleHeader};