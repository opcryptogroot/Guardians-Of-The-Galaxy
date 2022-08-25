import React, { useContext } from "react";
import { PopupContext } from "../../../contexts/popup";
import styles from "./styles.module.scss";

const GreaterThanZero: React.FC = () => {
  const { setOpenedPopup } = useContext(PopupContext);

  return (
    <div className={styles.warning}>
      <div className={styles.closeWrapper}>
        <span>Something is wrong</span>
        <img
          src="/images/close.svg"
          alt="Close"
          onClick={() => setOpenedPopup("Nenhum")}
        />
      </div>
      <div className={styles.content}>
        <span>Your contribution must be greater than Zero!</span>
      </div>
    </div>
  );
};

export default GreaterThanZero;
