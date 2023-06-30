import classNames from "classnames";
import styles from "./Button.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

type ButtonElementProps = React.PropsWithoutRef<
  JSX.IntrinsicElements["button"]
>;

const Button = ({ children, className, onClick, ...props }: Props) => {
  const commonProps = {
    ...props,
    className: classNames(styles.button, className),
  };

  return (
    <button
      {...(commonProps as ButtonElementProps)}
      type={(props as ButtonElementProps).type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
