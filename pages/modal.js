import styles from "./modal.module.css"

const Modal = () => {
  const displayToggle = (e) => {
    const modalCon = document.querySelector("#deletemodal")
    const modal = document.querySelector("#center")
    modalCon.classList.toggle(`${styles.display}`)
    modal.classList.toggle(`${styles.centerdis}`)



  }
  return (<div id="deletemodal" className={styles.deletemodal}>
    <div id="center" className={styles.center}>
      <h3 className={styles.headertext}>Delete</h3>
      <p>
        Are you sure you want to delete Design 103?
      </p>
      <div className={styles.btns} >
        <button className={`${styles.btn} ${styles.cancle}`} onClick={displayToggle}>Cancel</button>
        <button className={`${styles.btn} ${styles.delete}`} onClick={displayToggle} >Delete</button>
      </div>
    </div>
  </div>)

}



export default Modal


