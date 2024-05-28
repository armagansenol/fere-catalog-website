import { Albert_Sans, Mukta } from "next/font/google"

const albertSans = Albert_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-albert-sans",
})

const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mukta",
})

import Cursor from "@/components/cursor/Cursor"
import Header from "@/components/header"
import { ClientOnly } from "@/components/utility/isomorphic"
import { SmoothLayout } from "@/layouts/smooth"
import "@/styles/global.scss"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${albertSans.variable} ${mukta.variable} theme-light bg-[var(--theme-primary)]`}>
      <SmoothLayout>
        <Header />
        <Component {...pageProps} />
        <ClientOnly>
          <Cursor />
        </ClientOnly>
      </SmoothLayout>
    </div>
  )
}
