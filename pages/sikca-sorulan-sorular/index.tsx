import s from "./faq.module.scss"

import cx from "clsx"

import { DefaultLayout } from "@/layouts/default"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/utility/accordion/Accordion"

export interface IFaqProps {}

export default function Faq(props: IFaqProps) {
  const faqs = [
    {
      question: "Nasıl üye olurum?",
      answer: (
        <>
          <p>İlk olarak, hemen üye ol butonuna tıklayın.</p>
          <p>Üyelik Formununda bulunan bilgileri doldurun.</p>
          <p>Verdiğiniz bilgileri doğrulayın ve gerekirse e-posta veya telefon numaranızı onaylayın.</p>
          <p>Üyelik işlemi tamamlandığında, platforma giriş yapabilir ve kullanmaya başlayabilirsiniz.</p>
        </>
      ),
    },
    {
      question:
        "Birden fazla markam var, farklı kategoride ürün satıyorum. Her bir marka için ayrı kayıt oluşturmam mı gerekir?",
      answer: (
        <>
          <p>İlk olarak, hemen üye ol butonuna tıklayın.</p>
          <p>Üyelik Formununda bulunan bilgileri doldurun.</p>
          <p>Verdiğiniz bilgileri doğrulayın ve gerekirse e-posta veya telefon numaranızı onaylayın.</p>
          <p>Üyelik işlemi tamamlandığında, platforma giriş yapabilir ve kullanmaya başlayabilirsiniz.</p>
        </>
      ),
    },
  ]

  const subjects = [
    {
      label: "Konu 1",
      value: "KONU_1",
    },
    {
      label: "Konu 2",
      value: "KONU_2",
    },
    {
      label: "Konu 3",
      value: "KONU_3",
    },
  ]

  return (
    <DefaultLayout
      seo={{
        title: "title",
        description: "description",
      }}
    >
      <section className={s.intro}>
        <h1>Sıkça Sorulan Sorular</h1>
        <p>Aklınızdaki tüm soruların cevaplarını burada bulabilirsiniz.</p>
      </section>
      <section className={cx(s.filter, "flex items-center justify-start")}>
        {subjects.map((item) => {
          return (
            <div className={s.filterItem} key={item.value}>
              <span>{item.label}</span>
            </div>
          )
        })}
      </section>
      <section className={s.questions}>
        <Accordion className={s.accordion} type="multiple">
          {faqs.map((item, i) => {
            return (
              <AccordionItem className={s.accordionItem} value={`${i}`} key={i}>
                <AccordionTrigger className={s.accordionTrigger}>
                  <span className={s.text}>{item.question}</span>
                  <span className={s.line}></span>
                  <div className={s.iconC}>+</div>
                </AccordionTrigger>
                <AccordionContent className={s.accordionContent}>{item.answer}</AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </section>
    </DefaultLayout>
  )
}
