import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const subtitle='アウトプットしていくサイト'
  return (
      <>
        <Header />
      <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        image0n
      />
        <Footer />
      </>
  )
} 