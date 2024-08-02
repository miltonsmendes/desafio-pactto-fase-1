import { useState, ChangeEvent } from 'react';
import { ContainerSearchBar, SearchInput, SearchIcon } from './styles'

export function SearchBar() {
const [query, setQuery] = useState<string>();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
      }

    return (
      <div>
        <ContainerSearchBar>
            <SearchInput 
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search">
             </SearchInput>
             <SearchIcon />
        </ContainerSearchBar>
      </div>
    )
  }