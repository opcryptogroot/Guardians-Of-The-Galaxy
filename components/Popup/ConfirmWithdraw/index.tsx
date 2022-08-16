import React, { useContext, useEffect } from "react";
import { PopupContext } from "../../../contexts/popup";
import styles from "./styles.module.scss";
import Router from "next/router";
import { StakingContext } from "../../../contexts/StakingProvider";
import { GuardStakingContext } from '../../../contexts/GuardStakingProvider';
import { StakingStatusContext } from '../../../contexts/StakingStatusUpdate';

type ConfirmWithdrawProps = {
  cryptoAsset: string;
}

const ConfirmWithdraw = ({...props} : ConfirmWithdrawProps) => {
  const { balance, openedPopup, setOpenedPopup } = useContext(PopupContext);
  const { stakingWrapper: PBTY } = useContext(StakingContext);
  const { guardStakingWrapper: GUARD } = useContext(GuardStakingContext);
  const { stakingStatusUpdated, setStakingStatusUpdated } = useContext(StakingStatusContext);

  const handleExit = () => {
    switch(props.cryptoAsset) {
      case 'GUARD':
        setOpenedPopup("Nenhum");
        GUARD?.exit()
        .then(() => {
          if(stakingStatusUpdated) {
            setStakingStatusUpdated(false);
          } else {
            setStakingStatusUpdated(true);
          }
        });
        break;
      case 'PBTY':
        setOpenedPopup("Nenhum");
        PBTY?.exit()
        .then(() => {
          if(stakingStatusUpdated) {
            setStakingStatusUpdated(false);
          } else {
            setStakingStatusUpdated(true);
          }
        });
        break;
    }
  };

  return (
    <div className={styles.warning}>
      <div className={styles.closeWrapper}>
        <span>withdraw</span>
        <img
          src="/images/close.svg"
          alt="Close"
          onClick={() => setOpenedPopup("Nenhum")}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <span>
            You are sure you want to withdraw <span>{balance} </span>
            tokens?
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick={handleExit}>Confirm withdraw</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmWithdraw;
