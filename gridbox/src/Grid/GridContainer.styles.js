import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.size}, 1fr);
    grid-template-rows: repeat(${props => props.size}, 1fr);
    border: 1px solid black;
    width: fit-content;
    align-items: center;  
    margin: 0 auto; 
`