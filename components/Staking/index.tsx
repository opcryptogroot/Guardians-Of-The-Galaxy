import Card from "./components/Card";

import { useContext, useEffect, useState } from "react";

import styles from "./styles.module.scss";

import { GuardStakingContext } from "../../contexts/GuardStakingProvider";
import { StakingContext } from "../../contexts/StakingProvider";
import { StakingStatusContext } from "../../contexts/StakingStatusUpdate";
import { Web3ModalContext } from "../../contexts/Web3ModalProvider";

const Content = () => {
  const { account, chainId } = useContext(Web3ModalContext);

  const [guardActive, setGuardActive] = useState(false);
  const [pbtyActive, setPbtyActive] = useState(false);

  const { stakingWrapper: pbtyStaking } = useContext(StakingContext);
  const { guardStakingWrapper: guardStaking } = useContext(GuardStakingContext);

  const [pbtyStakedBalance, setPbtyStakedBalance] = useState("0");
  const [guardStakedBalance, setGuardStakedBalance] = useState("0");

  const [myPbtyBalance, setMyPbtyBalance] = useState("0");
  const [myGuardBalance, setMyGuardBalance] = useState("0");

  const [myPbtyRewards, setMyPbtyRewards] = useState("0");
  const [myGuardRewards, setMyGuardRewards] = useState("0");

  const [dailyPBTY, setDailyPBTY] = useState("0");
  const [dailyGuard, setDailyGuard] = useState("0");

  const { stakingStatusUpdated } = useContext(StakingStatusContext);

  useEffect(() => {
    if (!account) {
      return;
    }

    pbtyStaking?.balanceOf().then((balance) => {
      if (Number(balance) > 0) {
        setPbtyActive(true);
        setMyPbtyBalance((Number(balance) / 1e14).toString());
      } else {
        setPbtyActive(false);
      }
    });

    pbtyStaking?.totalStaked().then((res) => {
      setPbtyStakedBalance(`${Number(res) / 1e14}`);
    });

    pbtyStaking?.dailyRewardRate().then((res) => {
      setDailyPBTY(Number(res).toFixed(2));
    });

    pbtyStaking?.earned().then((res) => {
      setMyPbtyRewards((Number(res) / 1e18).toFixed(2));
    });

    guardStaking?.balanceOf().then((balance) => {
      if (Number(balance) > 0) {
        setGuardActive(true);
        setMyGuardBalance((Number(balance) / 1e18).toString());
      } else {
        setGuardActive(false);
      }
    });

    guardStaking?.totalStaked().then((res) => {
      setGuardStakedBalance(`${Number(res) / 1e18}`);
    });

    guardStaking?.dailyRewardRate().then((res) => {
      setDailyGuard(Number(res).toFixed(2));
    });

    guardStaking?.earned().then((res) => {
      setMyGuardRewards((Number(res) / 1e18).toFixed(2));
    });
  }, [
    account,
    pbtyStaking,
    guardStaking,
    chainId,
    pbtyActive,
    guardActive,
    myPbtyRewards,
    myPbtyRewards,
    stakingStatusUpdated,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>GUARD TOKEN STAKING</h1>
        <div className={styles.cards}>
          <div className={styles.left}>
            <Card
              logo={"PBTY.svg"}
              cryptoasset="PBTY"
              myRewards={myPbtyRewards}
              totalStaked={myPbtyBalance}
              deposits={pbtyStakedBalance}
              daily={dailyPBTY}
              totalRewards=" --"
              apr="--"
              isSet={pbtyActive}
            />
          </div>
          <div className={styles.right}>
            <Card
              logo={"Guard.svg"}
              cryptoasset="GUARD"
              myRewards={myGuardRewards}
              totalStaked={myGuardBalance}
              deposits={guardStakedBalance}
              daily={dailyGuard}
              totalRewards=" --"
              apr={(
                (Number(dailyGuard) * 36500) /
                Number(guardStakedBalance)
              ).toFixed()}
              isSet={guardActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
