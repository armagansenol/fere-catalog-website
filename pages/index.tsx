import MainSlider from "@/components/main-slider/MainSlider"

import { DefaultLayout } from "@/layouts/default"

export default function Home() {
  return (
    <DefaultLayout
      seo={{
        title: "title",
        description: "description",
      }}
    >
      <div>
        <MainSlider />
      </div>
    </DefaultLayout>
  )
}
