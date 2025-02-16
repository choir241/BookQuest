import Footer from "../components/Footer";
import icon from "../static/images/icon.png";
import Header from "../components/Header";

export default function Home(){
  return(
    <main className="p-2">
      <Header/>
      <section className="min-h-screen w-full py-10 flex items-center justify-center flex-col bg-[#F1B6CA] shadow-[10px_10px_10px_#C9ABC5] rounded-[10px]">
      <h1 className="text-5xl mb-6">Book Quest</h1>
      <img src={icon} alt="open book icon logo vector design template" className="w-40"/>
        <p className="text-xl mb-6">Get your reading journey started!</p>
        <a className="text-xl home-btn-hvr cursor-pointer capitalize text-base text-[#F1E4EE] py-4 px-6 bg-[#BC546B] rounded-[10px]" href = "/login">
          Login
        </a>
      </section>
      <Footer/>
    </main>
  )
}