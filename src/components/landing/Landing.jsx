import styles from "./landing.module.css";
import mainImg from "../../assets/image-removebg-preview 1.png";
import lockIcon from "../../assets/Vector (5).png";

export const Landing = () => {
  return (
    <div className={styles.container}>
      <img src={mainImg} alt="mainImg" loading="eager" />

      <h1 className={styles.heading}>Pocket Notes</h1>

      <div className={styles.content}>
        <p className={styles.inner_content}>
          Send and receive messages without keeping your phone online.
        </p>
        <p className={styles.inner_content}>
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>

      <div className={styles.encrypted_text}>
        <img src={lockIcon} alt="" className={styles.lock_icon} />
        End-to-end encrypted
      </div>
    </div>
  );
};
