import styled from 'styled-components';

export const DropdownContainer = styled.div`
    color: #DFDFDF;
    position: relative;
    width: 480px;
`;

export const DropdownButton = styled.input`
    color: #DFDFDF;
    width: 100%;
    padding: 10px;
    background-color: #39393B;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;

    &:focus {
    background-color: #636264;
    caret-color: #1BAC98;
    outline: none;
  }
`;
