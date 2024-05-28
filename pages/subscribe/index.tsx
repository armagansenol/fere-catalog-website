import { FormSubscribe } from "@/components/form-subscribe"
import * as React from "react"

import s from "./subscribe.module.scss"

import sample from "@/public/img/sample.jpg"

import cx from "clsx"
import { Img } from "@/components/utility/img"

export interface SubscribeProps {}

export default function Subscribe(props: SubscribeProps) {
  return (
    <div className={cx(s.subscribe, "grid grid-cols-2")}>
      <div>
        <div className={s.imgC}>
          <Img className="object-cover" src={sample} alt="sample" />
        </div>
      </div>
      <div className="flex justify-start">
        <div className={s.formC}>
          <h1>Üye Olun</h1>
          <p>Kataloğunuzu kolayca oluşturun, satışlarınızı artırın!</p>
          <FormSubscribe />
        </div>
      </div>
    </div>
  )
}
