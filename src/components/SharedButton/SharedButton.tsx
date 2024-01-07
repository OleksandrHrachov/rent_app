import { FC, ReactNode } from "react";
import "./SharedButton.scss";

interface IProps {
  buttomType?: "button" | "submit";
  variant?: "add";
  children: ReactNode;
  handelClick?: () => void;
  customClassName?: string;
}

export const SharedButton: FC<IProps> = ({
  buttomType = "button",
  variant = "add",
  children,
  handelClick,
  customClassName = ''
}) => {

  return (
    <button onClick={handelClick} className={`button button--${variant} ${customClassName}`} type={buttomType}>
      {children}
    </button>
  );
};
