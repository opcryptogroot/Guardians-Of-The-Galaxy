import React, { useContext, useEffect } from "react";
import { PopupContext } from "../../../contexts/popup";
import styles from "./styles.module.scss";
import Router from "next/router";
import { StakingContext } from "../../../contexts/StakingProvider";
import { GuardStakingContext } from '../../../contexts/GuardStakingProvider';
import { StakingStatusContext } from '../../../contexts/StakingStatusUpdate';

type ClaimProps = {
  myRewards: string;
  cryptoAsset: string;
}

const ConfirmClaim = ({...props} : ClaimProps) => {
  const { setOpenedPopup } = useContext(PopupContext);
  const { stakingWrapper: PBTY } = useContext(StakingContext);
  const { guardStakingWrapper: GUARD } = useContext(GuardStakingContext);
  const { stakingStatusUpdated, setStakingStatusUpdated } = useContext(StakingStatusContext);

  const handleClaim = () => {
    switch(props.cryptoAsset) {
      case 'GUARD':
        setOpenedPopup("Nenhum");
        GUARD?.getReward()
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
        PBTY?.getReward()
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
        <span>claim</span>
        <img
          src="/images/close.svg"
          alt="Close"
          onClick={() => setOpenedPopup("Nenhum")}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <span>
            you are sure you want to claim <span>{props.myRewards}</span> tokens?
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick={handleClaim}>Confirm claim</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmClaim;
