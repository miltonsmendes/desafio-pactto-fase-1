import { useState } from 'react';
import { DropdownContainer, DropdownButton, DropdownList, DropdownListItem } from './styles';

interface OptionsInterface {
  options: Array<string>;
}

export function DropdownInput({ options }: OptionsInterface) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick (option: string) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption || 'Selecione uma opção'}
        <span>{isOpen ? '▲' : '▼'}</span>
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownListItem
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}