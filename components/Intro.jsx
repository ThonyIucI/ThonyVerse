import Image from "next/image";
import styles from "../styles/Intro.module.scss";
function Intro(props) {
  return (
    <div className={styles.image}>
      <Image
        src="/Bitmojis/laptopWave.png"
        alt="xd"
        width={300}
        height={300}
        layout="responsive"
      />
      oe
    </div>
  );
}

export default Intro;
