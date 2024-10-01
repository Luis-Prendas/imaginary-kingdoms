import { Metadata } from 'next'
import Home from './_components/home'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of Imaginary Kingdoms',
}

export default function Page() {
  return <Home />
}
