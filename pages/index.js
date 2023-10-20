import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '..@/components/Header'
import Hero from '..@/components/Hero'
import Footer from '..@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const subtitle='アウトプットしていくサイト'
  return (
      <>
        <Header />
      <main>
        <Hero />
      </main>
        <Footer />
      </>
  )
}

function EachPost({ title, url }) {
  return (
    <article>
      <a ref={url}>
        <h3>{title}</h3>
      </a>
    </article>
  )
}

export default function Posts() {
  const props1 = {title:'記事のタイトル1',url:'post1.html'}
  const rpops2 = {title:'記事のタイトル2',url:'post2.html'}
  return (
    <section>
      <h2>おすすめ記事</h2>
      <EachPost{...props1}/>
      <EachPost{...props2} />
    </section>
  )
}

function Decoration({ children }) {
  return (
    <div style={{ color: 'red' }}>
      {children}
      </div>
  )
}

export default function Hero() {
  return (
    <Decoration>
      <h1>CUBE</h1>
      <p>アウトプットしていくサイト</p>
    </Decoration>
  )
}
