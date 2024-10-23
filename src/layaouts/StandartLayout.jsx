import { Outlet } from 'react-router-dom';
import Header from '../components/Header1';
import Footer from '../components/Footer';

export default function StandartLayout() {
  return (
    <>
    <Header></Header>
    <main className='bg-gray-800'>
        <Outlet></Outlet>
    </main>
    <Footer></Footer>
    </>
    
  )
}
