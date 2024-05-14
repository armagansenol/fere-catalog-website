import Cursor from "@/components/cursor/Cursor"
import Header from "@/components/header"
import { ClientOnly } from "@/components/utility/isomorphic"
import { SmoothLayout } from "@/layouts/smooth"
import "@/styles/global.scss"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothLayout>
      <Header />
      <Component {...pageProps} />
      <ClientOnly>
        <Cursor />
      </ClientOnly>
    </SmoothLayout>
  )
}
