import styled from 'styled-components'

export const StyleButton = styled.button`
    background-color: ${(props) => props.color === 'primary' ? '#1BAC98' : '#BEBEBE' };
    color: ${(props) => props.color === 'primary' ? '#232225' : '#181818' };
    border-radius: 20px;
    border: none;
    font-weight: bold;
    height: 50px;
    width: 200px;
`
