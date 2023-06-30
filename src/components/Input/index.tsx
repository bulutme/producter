import React, { ChangeEvent } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  value: string | number | undefined;
  onChange: (value: string | number | React.ChangeEvent<Element>) => void;
  id: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  error?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { value, onChange, id, label, placeholder, type, error, fullWidth } =
    props;

  const [inputValue, setInputValue] = React.useState<
    string | number | undefined
  >(undefined);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      const regex = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;

      if (regex.test(event.target.value)) {
        setInputValue(event.target.value.replace(/[^0-9]/g, ""));
        onChange(event.target.value.replace(/[^0-9]/g, ""));
      }
    } else {
      setInputValue(event.target.value);
      onChange(event.target.value);
    }
  };

  return (
    <fieldset
      className={`${styles.fieldset} ${error ? styles.error : ""} ${
        fullWidth ? styles.fullWidth : ""
      }`}
    >
      <legend className={styles.legend}>
        <label htmlFor={id}>{label}</label>
      </legend>
      <input
        className={styles.input}
        id={id}
        placeholder={error ?? placeholder}
        type={type || "text"}
        value={value || inputValue}
        onChange={handleChange}
      />
    </fieldset>
  );
};

export default Input;
