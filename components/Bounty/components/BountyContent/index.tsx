import styles from './styles.module.scss'

const BountyContent = () => {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.titleRow}>
            <div className={styles.title}>
                PUTIN OUT!
            </div>
            <div className={styles.titleSubtitle}>
              Giving incentives to remove Putin from power
            </div>
          </div>

          <br />

          <div className={styles.secondaryTitle}>
            BOUNTY GOAL
          </div>

          <br />

          <div className={styles.text}>
            This dapp is made to incentivize Russians to remove Putin from power by any mean necessary. It is made as part of the <a href="https://ipfs.io/ipfs/QmP6T6rbcTSgoJyRqujLLDkioPUvLRXSzBwxmrKnT3HPiS">Guardians of the Galaxy project.</a>
          </div>

          <br></br>

          <div className={styles.text}>
          Anyone wanting to remove Putin from power can make a contribution in ETH.
            It will be given to whomever will be able to predict when Putin will be removed 
            from power. This way someone planing to remove Putin from power can claim the 
            bounty as he would be able to know in advance when Putin would be removed, thus 
            make the correct prediction.
          </div>

          <br></br>

          <div className={styles.text}>
            The bounty acts in two different manners:
          </div>

          <br/>

          <div className={styles.text}>
            <ul>
              <li>A direct one, by giving economic incentives to Russians to get Putin out.</li>
              <li>An indirect one, by incentivizing Putin to stop the war in Ukraine. To do so the 
            bounty will be suspended during ceasefire and cancelled if Putin recalls his 
            troops from Ukraine.</li>
             </ul>
            As money keeps accumulating into the bounty, the risk for 
            Putin to be removed will increase, forcing him to stop the war if he doesn&apos;t want 
            to be removed.
          </div>

          <br></br>

          <div className={styles.secondaryTitle}>
            CANCELLATION
          </div>

          <br></br>

          <div className={styles.text}>
            In case Putin calls back his troops, the bounty will be cancelled and contributors
            reimbursed. For this purpose, contributors will get PBTY tokens at a rate of 
            10 000 PBTY per ETH contributed. If the bounty is cancelled, those PBTY tokens will 
            be redeemable for ETH at the same rate. The redemption will be open for 100 days 
            after which the remaining funds could be reassigned to other Guardian projects.
          </div>

          <br></br>

          <div className={styles.text}>
            Other reasons for cancellations are:
          </div>

          <br></br>

          <div className={styles.text}>
            <ul>
              <li>Putin is removed during a ceasefire. In this case no bounty will be awarded, this is 
            made to encourage and respect ceasefires.</li>
              <li>Putin is removed by non-Russian individuals. Note that to allow for anonymous 
            participation, Putin being removed by people of unknown nationality would not 
            cancel the bounty. This rule is made in order to prevent foreigners from intefering 
            as it could be used by Putin propaganda and to prevent escalation of hostilities 
            with other countries.</li>
            </ul>
            
          </div>

          <br></br>

          <div className={styles.secondaryTitle}>
            MAKING A PREDICTION
          </div>

          <br></br>

          <div className={styles.text}>
            Predictions are made with a commit and reveal scheme. This means that predictions 
            are kept private until they are revealed to prevent people from copying others&apos;predictions. As part of making a contribution, predictors will receive a prediction 
            file that they should keep safely as it will be required to reveal the prediction.
          </div>

          <br></br>

          <div className={styles.text}>
            Predictors will need to make a contribution (otherwise people could just make a 
            &quot;guess&quot; everyday to claim the bounty). In case multiple predictions are correct, 
            the bounty will be split proportionally to the predictor contribution (ex: if two 
            predictions with contribution 1 and 2 ETH are correct, the first predictor will get 
            1/3 of the bounty and the second 2/3).
          </div>
              
          <div className={styles.textSubtitle}>
            Predictions must be made at least 12h before Putin is removed from power and need 
            to be accurate +/- 36h to the reported removal time.
          </div>

          <div className={styles.secondaryTitle}>
            FUTURE STEPS
          </div>

          <br></br>

          <div className={styles.text}>
            We plan for the Guardian community to be more than just a tool in the fight against 
            Ukraine war but also support democracy and peace at a larger scale (but for now, 
            the number one problem in the world is war in Ukraine due to its risk of escalation into 
            a nuclear conflict).
          </div>

          <br></br>

          <div className={styles.text}>
            To do so, we will release a GUARD governance token to be given initially to PBTY 
            stakers. Note that in order to reassure people of our intentions, the team will not 
            allocate GUARD tokens to itself and only the DAO will be able to setup allocations.
          </div>
        </div>
      </div>
    </div>
  )
}

export default BountyContent