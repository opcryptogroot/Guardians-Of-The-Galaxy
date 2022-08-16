import React, { useContext, useState } from "react";
import { PopupContext } from "../../../contexts/popup";
import styles from "./styles.module.scss";
import Router from "next/router";
import { StakingContext } from "../../../contexts/StakingProvider";
import { GuardStakingContext } from '../../../contexts/GuardStakingProvider';
import { StakingStatusContext } from '../../../contexts/StakingStatusUpdate';


type ConfirmDepositProps = {
  cryptoAsset: string;
}

const ConfirmDeposit = ({...props} : ConfirmDepositProps) => {
  const { setOpenedPopup } = useContext(PopupContext);

  const [ amountToDeposit, setAmountToDeposit ] = useState('');

  const { stakingWrapper: PBTY } = useContext(StakingContext);
  const { guardStakingWrapper: GUARD } = useContext(GuardStakingContext);
  const { stakingStatusUpdated, setStakingStatusUpdated } = useContext(StakingStatusContext);

  const handleDeposit = () => {
    switch(props.cryptoAsset) {
      case 'GUARD':
        setOpenedPopup("Nenhum");
        GUARD?.stake(amountToDeposit)
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
        PBTY?.stake(amountToDeposit)
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
        <span>deposit</span>
        <img
          src="/images/close.svg"
          alt="Close"
          onClick={() => setOpenedPopup("Nenhum")}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <span>How many tokens you want to deposit?</span>
        </div>
        <input 
          type="text" 
          value ={amountToDeposit}
          onChange={(e) => setAmountToDeposit(e.target.value)}
          placeholder="Token amount" />
        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick={handleDeposit}>Confirm deposit</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeposit;
