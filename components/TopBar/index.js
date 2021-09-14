import Image from 'next/image'
import styles from './styles.module.css'
import Right from './images/Right.svg'

const TopBar = () => {
  return (
    <div>
      <div className={styles.container}>

        <h1 className={styles.TopBarTitle}>
          Shared Files
        </h1>
        <Image
          className={styles.icon}
          src={Right}
          alt="Right logo"
        />


      </div>
      <div className={styles.container}>
        <h3>Name</h3>
        <h3 className={styles.space}>Shared by</h3>
        <h3 className={styles.space}>Share date</h3 >

        <h3>File size</h3>
      </div>

    </div>





    /* <nav className={styles.subtitle__header}>
    <h2 className={styles.subs}>Name</h2>
    <h2 className={styles.subs}>Shared</h2>
    <h2 className={styles.subs}>Share Date</h2>
    <h2 className={styles.subs}>File Size</h2>
    </nav> */
  );
}

export default TopBar;