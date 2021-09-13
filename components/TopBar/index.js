import Image from 'next/image'
import styles from './styles.module.css'
import Right from './images/Right.svg'

const TopBar = () => {
  return ( 
  <div>
     <div className={styles.header}>
    <div className={styles.right__header}>
    <h1 className={styles.top}> 
      Shared Files
    </h1> 
    <Image
    className={styles.right__header__icon}
     src={Right}
     alt="Right logo"
    />
    </div>
    
   
    <nav className={styles.subtitle__header}>
    <h2 className={styles.subs}>Name</h2>
    <h2 className={styles.subs}>Shared</h2>
    <h2 className={styles.subs}>Share Date</h2>
    <h2 className={styles.subs}>File Size</h2>
    </nav>
  </div>
  
  </div>  );
}
 
export default TopBar;