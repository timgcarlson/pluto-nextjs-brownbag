import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>The Home Page</h1>
      <h2 className={styles.subtitle}>This is an open pull request! This is a change to the code.</h2>
      <Link href="/pluto-moons">
        <a>Pluto Moons</a>
      </Link>
    </div>
  )
}
