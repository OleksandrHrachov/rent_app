import { FC, ReactNode } from "react";
import "./SharedButton.scss";

interface IProps {
  buttomType?: "button" | "submit";
  variant?: "add";
  children: ReactNode;
  handelClick?: () => void;
}

export const SharedButton: FC<IProps> = ({
  buttomType = "button",
  variant = "add",
  children,
  handelClick
}) => {

  return (
    <button onClick={handelClick} className={`button button--${variant}`} type={buttomType}>
      {children}
    </button>
  );
};
