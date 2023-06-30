import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
import Arrow from "../../assets/images/arrow-bottom.svg";
import classNames from "classnames";

export interface DropdownOption {
  value: string | number;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (
    selectedValue: DropdownOption | React.ChangeEvent<Element>
  ) => void;
  value: DropdownOption;
  error?: string;
  fullWidth?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  value,
  error,
  fullWidth,
}) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    value || null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div
      className={classNames(
        styles.dropdownContainer,
        fullWidth ? styles.fullWidth : ""
      )}
    >
      <button
        className={classNames(
          styles.dropdownToggle,
          isOpen ? styles.open : "",
          error ? styles.error : ""
        )}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {selectedOption ? selectedOption.label : "Select an option"}
        <Arrow />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
