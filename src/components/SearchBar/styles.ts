import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';

export const ContainerSearchBar = styled.div`
    display: flex;
    position: relative;
`

export const SearchInput = styled.input`
    background-color: #232225;
    height: 40px;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #838284;
    transition: border-color 0.3s ease;
    color: #fff;
    flex: 1;

    &:hover {
        border-color: #FFF;
    }

    &:focus {
        border-color: #1DBBA5;
        outline: none;
    }
`;

export const SearchIcon = styled(FaSearch)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 17px;
    color: #ccc;
`;