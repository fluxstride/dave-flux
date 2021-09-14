import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DeleteModal from './modal'

export default function Home() {
  return (
    <div className={styles.container}>
      <DeleteModal />
    </div>
  )
}