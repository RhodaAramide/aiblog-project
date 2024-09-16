import Features from "../components/Features"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import Testimonials from "../components/Testimonials"

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      < Header />
      <div className="">
        <Features />
        <Testimonials />
        < Newsletter />
      </div>
    </div>
  )
}

export default HomePage