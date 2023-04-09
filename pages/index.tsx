import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Header} from 'components/layout/Header'
import {Footer} from 'components/layout/Footer'
import {Content} from 'components/layout/Content'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <Content />
      <Footer/>
      
    </main>
  )
}
