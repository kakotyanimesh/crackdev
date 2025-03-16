
import Footer from '@/components/footer';
import HomePage from '@/components/HomePage';
import NavBar from '@/components/navbar';


export default function Home() {
  return (
    <div className="md:mx-24 mx-10">
      <NavBar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}
