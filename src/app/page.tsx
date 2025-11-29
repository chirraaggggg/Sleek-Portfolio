import Banner from "@/components/PageComponent/Banner"
import IndexPage from "@/components/homeScreen/IndexPage"
import MainScreen from "@/layout/MainScreen"
import { TitleUpdater } from "@/utils/TitleUpdater"

const Home = () => {
  return (
    <>
      <TitleUpdater />
      <MainScreen>
        <Banner />
        <IndexPage />
      </MainScreen>
    </>
  )
}

export default Home
