import styled from 'styled-components';

export const DropdownContainer = styled.div`
    color: #AAAAAB;
    position: relative;
    width: 500px;
`;

export const DropdownButton = styled.button`
    color: #AAAAAB;
    width: 100%;
    padding: 10px;
    background-color: #39393B;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
`;

export const DropdownList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    background-color: #424242;
    z-index: 1000;
`;

export const DropdownListItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #515151;
  }
`;