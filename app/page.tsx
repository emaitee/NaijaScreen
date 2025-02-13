import { Navbar, Footer, ScrollToTop } from "@/components/global";
import { ExploreMovie, TrendingMovie } from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NaijaScreen | Home",
  description: "Nigeria movies information at your fingertips",
};

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 sm:px-3 xs:py-5 py-7 w-full">
        <div className="max-w-[80%] sm:max-w-full lg:max-w-[90%] mx-auto flex flex-col gap-y-2">
          <TrendingMovie />
          <ExploreMovie />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Home;
