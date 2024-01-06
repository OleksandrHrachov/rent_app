import { FC } from "react";
import { SharedButton } from "../SharedButton";
import "./Header.scss";

interface IProps {
  openModal: () => void;
}

export const Header: FC<IProps> = ({ openModal }) => {
  return (
    <header className="header">
      <h3 className="header_title">
        Find everything you need or rent out everything you don't need.
      </h3>
      <SharedButton handelClick={openModal}>+ Add your offer</SharedButton>
    </header>
  );
};
