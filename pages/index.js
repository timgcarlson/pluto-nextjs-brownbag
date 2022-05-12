import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>The Home Page</h1>
      <Link href="/pluto-moons">Pluto Moons</Link>
    </div>
  )
}
