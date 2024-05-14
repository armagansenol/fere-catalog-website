import s from "./header.module.scss"

import cx from "clsx"
import { useRef } from "react"

import { Link } from "@/components/utility/link"
import { Img } from "../utility/img"
import Logo from "../icons/logo"

export default function Header() {
  const ref = useRef(null)

  return (
    <header className={cx(s.header, "flex items-center justify-center gap-10 bg-lime-300")} ref={ref}>
      <nav className={cx(s.nav, "flex items-center")}>
        <div className={s.navItem}>
          <Link href="/about">Hakkımızda</Link>
        </div>
        <div className={s.navItem}>
          <Link href="/about">Nasıl Çalışır?</Link>
        </div>
        <div className={s.navItem}>
          <Link href="/about">Fiyatlandırma</Link>
        </div>
        <div className={s.navItem}>
          <Link href="/about">Blog</Link>
        </div>
        <div className={s.navItem}>
          <Link href="/about">Destek</Link>
        </div>
        <div className={s.navItem}>
          <Link href="/about">
            <div className={s.logoC}>
              <Logo />
            </div>
          </Link>
        </div>
        <div className={s.navItem}>
          <Link href="/about">Giriş Yap</Link>
        </div>
        <div className={s.navItem}>
          <Link href="/about">Hemen Üye Ol</Link>
        </div>
      </nav>
    </header>
  )
}
