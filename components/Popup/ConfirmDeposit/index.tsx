import React, { useContext, useState } from "react";
import { PopupContext } from "../../../contexts/popup";
import styles from "./styles.module.scss";
import { StakingContext } from "../../../contexts/StakingProvider";
import { GuardStakingContext } from '../../../contexts/GuardStakingProvider';
import { StakingStatusContext } from '../../../contexts/StakingStatusUpdate';
import { BountyContext } from '../../../contexts/BountyProvider';
import { GuardContext } from '../../../contexts/GuardProvider';


type ConfirmDepositProps = {
  cryptoAsset: string;
}

const ConfirmDeposit = ({...props} : ConfirmDepositProps) => {
  const { setOpenedPopup } = useContext(PopupContext);

  const [ amountToDeposit, setAmountToDeposit ] = useState('');

  const { stakingWrapper: PBTYstaking } = useContext(StakingContext);
  const { guardStakingWrapper: GUARDstaking } = useContext(GuardStakingContext);
  const { bountyWrapper: PBTY } = useContext(BountyContext);
  const { guardWrapper: GUARD} = useContext(GuardContext);
  const { stakingStatusUpdated, setStakingStatusUpdated } = useContext(StakingStatusContext);

  const handleDeposit = () => {
    switch(props.cryptoAsset) {
      case 'GUARD':
        setOpenedPopup("Nenhum");
        GUARDstaking?.stake(amountToDeposit)
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
        PBTYstaking?.stake(amountToDeposit)
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

  const fillMax = () => {
    switch(props.cryptoAsset) {
      case 'GUARD':
        GUARD?.balanceOf().then(value => {setAmountToDeposit((Number(value)/1e18).toString())});
        break;
      case 'PBTY':
        PBTY?.balanceOf().then(value => {setAmountToDeposit((Number(value)/1e14).toString())});
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
          placeholder="Token amount">
          </input>
          <div className={styles.maxerText} onClick={fillMax}>
                MAX
          </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick={handleDeposit}>Confirm deposit</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeposit;
