import Image from "next/image"
import styles from "./style.module.css"
const SharedFile = ({ file }) => {
   const { name, sharedBy, shareDate, fileSize, path } = file
   return (
      <div className={styles.flex}>
         <div className={styles.iconCon}>
            <Image className={styles.icon} src={path.iconPath} width={50} height={50}
            />
            <p className={styles.iconName}>{name}</p>
         </div>

         <div className={`${styles.iconCon} ${styles.space1}`}>
            <Image className={styles.userIcon} src={path.userPath} width={50} height={50}
            />
            <p className={`${styles.iconName} ${styles.userIconText}`}>{sharedBy}</p>
         </div>
         <p className={`${styles.titles} ${styles.space2}`}>{shareDate}</p>
         <p className={`${styles.titles} ${styles.space3}`}>{fileSize}</p>


      </div>

   )
};

export default SharedFile;

