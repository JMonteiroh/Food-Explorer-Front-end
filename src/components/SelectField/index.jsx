import { useState } from "react";
import { BiChevronDown } from "react-icons/bi"
import { Container, MenuBox } from "./styles";

export function SelectField({ title }) {
  const options = ['Refeição', 'Sobremesa', 'Bebida'];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Container>
      <h3>{ title }</h3>

      <MenuBox className="dropdown-button" onClick={toggleDropdown}>
        {!isOpen && selectedOption}
        {isOpen && (
          <div className="dropdown-options">
            <ul>
              {options.map((option) => (
                <li key={option} onClick={() => selectOption(option)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
        {!isOpen && <BiChevronDown />}
      </MenuBox>
    </Container>
  )
}