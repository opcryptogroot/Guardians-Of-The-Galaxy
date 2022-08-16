import React, { useContext } from "react";
import { PopupContext } from "../../../contexts/popup";
import styles from "./styles.module.scss";

const ReceiptDownloaded: React.FC = () => {
  const { setOpenedPopup } = useContext(PopupContext);

  return (
    <div className={styles.warning}>
      <div className={styles.closeWrapper}>
        <span>Receipt Downloaded</span>
        <img
          src="/images/close.svg"
          alt="Close"
          onClick={() => setOpenedPopup("Nenhum")}
        />
      </div>
      <div className={styles.content}>
        <span>
          Keep your receipt somewhere safe! <br />
          Please note your prediction is valid only when confirmed on chain!
        </span>
      </div>
    </div>
  );
};

export default ReceiptDownloaded;
