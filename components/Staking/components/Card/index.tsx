import React, { useContext, useEffect, useState } from "react";
import { BountyContext } from "../../../../contexts/BountyProvider";
import { GuardContext } from "../../../../contexts/GuardProvider";
import { PopupContext } from "../../../../contexts/popup";
import { Web3ModalContext } from "../../../../contexts/Web3ModalProvider";
import { StakingStatusContext } from "../../../../contexts/StakingStatusUpdate";

import styles from "./styles.module.scss";

type CardProps = {
  isSet: boolean;
  logo: any;
  cryptoasset: string;
  myRewards: string;
  totalStaked: string;
  deposits: string;
  daily: string;
  totalRewards: string;
  apr: string;
};

const Card = ({ ...props }: CardProps) => {
  const { setOpenedPopup, setRewards, setAsset, setBalance } =
    useContext(PopupContext);

  const { account, chainId } = useContext(Web3ModalContext);
  const { bountyWrapper: PBTY } = useContext(BountyContext);
  const { guardWrapper: GUARD } = useContext(GuardContext);
  const { stakingStatusUpdated, setStakingStatusUpdated } = useContext(StakingStatusContext);

  const [buttonState, setButtonState] = useState("Approve");

  useEffect(() => {
    if (!account) {
      return;
    }

    switch (props.cryptoasset) {
      case "GUARD":
        GUARD?.allowance().then((res) => {
          const allowance = res;
          if (Number(allowance).toString() === "0") {
            return;
          } else {
            setButtonState("Deposit");
          }
        });
        break;
      case "PBTY":
        PBTY?.allowance().then((res) => {
          const allowance = res;
          if (Number(allowance).toString() === "0") {
            return;
          } else {
            setButtonState("Deposit");
          }
        });
        break;
    }
  });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.name}>
          <div className={styles.text}>
            <img src={"/images/" + props.logo} alt="Logo" />
            {props.cryptoasset}
          </div>
          <div className={styles.textMobile}>
            <img src={"/images/" + props.logo} alt="Logo" />
          </div>
          <div className={styles.divisor}>
            <div className={styles.line} />
          </div>
        </div>
        <div className={styles.action}>
          {props.isSet == true ? (
            <div className={styles.firstAction}>
              <div
                className={styles.claimDivisor}
                onClick={() => {
                  setAsset(props.cryptoasset);
                  setRewards(props.myRewards);
                  setOpenedPopup("ConfirmClaim");
                }}
              >
                <div className={styles.line} />
              </div>
              <div
                className={styles.claim}
                onClick={() => {
                  setAsset(props.cryptoasset);
                  setRewards(props.myRewards);
                  setOpenedPopup("ConfirmClaim");
                }}
              >
                Claim
              </div>
              <div
                className={styles.claimMobile}
                onClick={() => {
                  setAsset(props.cryptoasset);
                  setRewards(props.myRewards);
                  setOpenedPopup("ConfirmClaim");
                }}
              >
                Claim
              </div>
            </div>
          ) : null}
          <div className={styles.secondAction}>
            <div
              className={
                props.isSet == true ? styles.divisor : styles.divisorDisabled
              }
              onClick={() => {
                setAsset(props.cryptoasset);
                setBalance(props.totalStaked);
                setOpenedPopup("ConfirmWithdraw");
              }}
            >
              <div className={styles.line} />
            </div>
            <div
              className={styles.text}
              onClick={() => {
                if (props.isSet == true) {
                  setAsset(props.cryptoasset);
                  setBalance(props.totalStaked);
                  setOpenedPopup("ConfirmWithdraw");
                } else if (buttonState === "Approve") {
                  switch (props.cryptoasset) {
                    case "GUARD":
                      GUARD?.approve().then(() => {
                        if(stakingStatusUpdated) {
                          setStakingStatusUpdated(false);
                        } else {
                          setStakingStatusUpdated(true);
                        }
                      });
                      break;
                    case "PBTY":
                      PBTY?.approve().then(() => {
                        if(stakingStatusUpdated) {
                          setStakingStatusUpdated(false);
                        } else {
                          setStakingStatusUpdated(true);
                        }
                      });
                      break;
                  }
                } else if (buttonState === "Deposit") {
                  setAsset(props.cryptoasset);
                  setOpenedPopup("ConfirmDeposit");
                }
              }}
            >
              {" "}
              {props.isSet == true ? "Withdraw" : buttonState}
            </div>
            <div
              className={styles.textMobile}
              onClick={() => {
                if (props.isSet == true) {
                  setAsset(props.cryptoasset);
                  setBalance(props.totalStaked);
                  setOpenedPopup("ConfirmWithdraw");
                } else if (buttonState === "Approve") {
                  switch (props.cryptoasset) {
                    case "GUARD":
                      GUARD?.approve().then(() => {
                        if(stakingStatusUpdated) {
                          setStakingStatusUpdated(false);
                        } else {
                          setStakingStatusUpdated(true);
                        }
                      });
                      break;
                    case "PBTY":
                      PBTY?.approve().then(() => {
                        if(stakingStatusUpdated) {
                          setStakingStatusUpdated(false);
                        } else {
                          setStakingStatusUpdated(true);
                        }
                      });
                      break;
                  }
                } else if (buttonState === "Deposit") {
                  setAsset(props.cryptoasset);
                  setOpenedPopup("ConfirmDeposit");
                }
              }}
            >
              {props.isSet == true ? "Wit.." : `${buttonState.slice(0, 3)}..`}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {props.isSet == true ? (
          <div>
            <div className={styles.infos1}>
              <div className={styles.text}>
                my reward balance: <span>{props.myRewards}</span> GUARD
              </div>
            </div>

            <div className={styles.infos2}>
              <div className={styles.text}>
                my staked balance: <span>{props.totalStaked}</span>{" "}
                {props.cryptoasset}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.infos1}>
              <div className={styles.text}></div>
            </div>

            <div className={styles.infos2}>
              <div className={styles.text}></div>
            </div>
          </div>
        )}
        <div className={styles.row}>
          <div className={styles.text}>TOTAL {props.cryptoasset} STAKED:</div>
          <div className={styles.value}>{props.deposits}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.text}>GUARD REWARDS:</div>
          <div className={styles.value}>{props.daily} / DAY</div>
        </div>

        <div className={styles.row}>
          <div className={styles.text}>GUARD REWARDS VALUE:</div>
          <div className={styles.value}>${props.totalRewards} / DAY</div>
        </div>

        <div className={styles.row}>
          <div className={styles.text}>APR</div>
          <div className={styles.value}>{props.apr} %</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
