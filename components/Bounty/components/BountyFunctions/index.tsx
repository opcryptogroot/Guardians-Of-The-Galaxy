import React, { useState, useEffect, useContext, useCallback } from "react";
import DatePicker from "react-datepicker";
import styles from "./styles.module.scss";
import {
  getContribution,
  generateHexString,
  downloadUrl,
} from "../../../../utils";
import { BountyContext } from "../../../../contexts/BountyProvider";
import { Web3ModalContext } from "../../../../contexts/Web3ModalProvider";
import type { Prediction } from "../../../../utils";
import { PopupContext } from "../../../../contexts/popup";

const BountyFunctions: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [ethPrice, setEthPrice] = useState(0);
  const [bountyState, setBountyState] = useState("");
  const [predictionCreated, setPredictionCreated] = useState(false);

  const { setOpenedPopup } = useContext(PopupContext);
  const { bountyWrapper: bounty } = useContext(BountyContext);
  const { account, chainId } = useContext(Web3ModalContext);

  const [amountContributed, setAmountContributed] = useState<string | number>(
    ""
  );
  const [amountContributedforPrediction, setAmountContributedforPrediction] =
    useState<string | number>("");

  const [prediction, setPrediction] = useState<Prediction>({
    date: "",
    salt: "",
  });

  useEffect(() => {
    if (!bounty) {
      return;
    }

    if (ethPrice === 0) {
      bounty
        .contribution()
        .then((res) => {
          const contributed = res;

          getContribution(Number(contributed) / 1e18).then((res) => {
            const data: string = res;
            // @ts-ignore
            setEthPrice(data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [bounty, ethPrice]);

  useEffect(() => {
    if (!bounty) {
      return;
    }

    if (bountyState === "") {
      bounty
        .state()
        .then((res) => {
          if (res == 0) {
            setBountyState("Initiated");
          } else if (res == 1) {
            setBountyState("Cancelled");
          } else if (res == 2) {
            setBountyState("Executed");
          } else {
            setBountyState("Contract Not Implemented");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [bounty, account, bountyState, chainId]);

  const handleCreatePrediction = useCallback(() => {
    const timestamp = Math.floor(date.getTime() / 1000);

    if (timestamp > new Date().getTime() / 1000 + 12 * 60 * 60) {
      setPrediction({
        date: `${timestamp}`,
        salt: `0x${generateHexString(64)}`, // wepgen for WEP 256-bit key gen
      });
      setPredictionCreated(true);
    } else {
      setOpenedPopup("SomethingIsWrong");
    }
  }, [date, prediction]);

  const handleContribution = useCallback(() => {
    if (!bounty || !account) {
      return;
    }
    if (Number(amountContributed) > 0) {
      bounty
        .sendContribution(String(amountContributed), account)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setOpenedPopup("GreaterThanZero");
    }
  }, [amountContributed]);

  const handlePredictionRequest = useCallback(() => {
    if (Number(amountContributedforPrediction) > 0) {
      bounty
        ?.getCommitment(prediction)
        .then((res) => {
          bounty.predictRemoval(res, String(amountContributedforPrediction));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setOpenedPopup("GreaterThanZero");
    }
  }, [amountContributedforPrediction]);

  return (
    <div className={styles.container}>
      <div className={styles.firstBoxContainer}>
        <div className={styles.contributed}>
          <div className={styles.title}>Total Contributed:</div>
          <div className={styles.info}>&nbsp;{ethPrice} USD</div>
        </div>

        <div className={styles.bounty}>
          <div className={styles.title}>Bounty Status:</div>
          <div className={styles.info}>&nbsp;{bountyState}</div>
        </div>
      </div>

      <div className={styles.secondBoxContainer}>
        <div className={styles.title}>Contribute to the bounty:</div>
        <div className={styles.subtitle}>
          THE BOUNTY WILL BE GIVEN TO WHOMEVER CAN PREDICT WHEN PUTIN WILL BE
          REMOVED FROM POWER.
        </div>

        <div className={styles.input}>
          <input
            type="text"
            value={amountContributed}
            onChange={(e) => setAmountContributed(e.target.value)}
            placeholder="Choose your contribution"
          />
        </div>

        <div className={styles.button} onClick={handleContribution}>
          Send Contribution
        </div>

        <div className={styles.title}>Predict Putins&apos;s removal date:</div>
        <div className={styles.subtitle}>
          IF YOU CORRECTLY PREDICT WHEN PUTIN WILL BE REMOVED FROM POWER WITHIN
          36H, YOU WILL GET THE BOUNTY.
        </div>

        <div className={styles.datePickerContainer}>
          <DatePicker
            selected={date}
            onChange={(date: Date) => setDate(date)}
            className={styles.datePicker}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            dateFormat="dd/MM/yyyy HH:mm"
          />
        </div>

        {!predictionCreated ? (
          <div className={styles.button} onClick={handleCreatePrediction}>
            Create a Prediction
          </div>
        ) : (
          <div className={styles.pressedbutton}>Prediction Created!</div>
        )}

        {predictionCreated ? (
          <a className={styles.button} href={downloadUrl(prediction)} onClick={() => setOpenedPopup("ReceiptDownloaded")} download={"prediction.json"}>
          Download Receipt
        </a>
        ) : (
          <div className={styles.pressedbutton}>Download Receipt</div>
        )}

        <div className={styles.contTitle}>Contribution in ETH:</div>

        <div className={styles.input}>
          <input
            type="text"
            value={amountContributedforPrediction}
            onChange={(e) => setAmountContributedforPrediction(e.target.value)}
            placeholder="Choose your contribution"
          />
        </div>

        <div className={styles.button} onClick={handlePredictionRequest}>
          Send Prediction
        </div>
      </div>
    </div>
  );
};

export default BountyFunctions;
