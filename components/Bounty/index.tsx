import BountyContent from "./components/BountyContent";
import BountyFunctions from "./components/BountyFunctions";
import styles from "./styles.module.scss";

const BountyPage = () => {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.container}>
        <BountyFunctions />
        <BountyContent />
      </div>
    </div>
  );
};

export default BountyPage;
