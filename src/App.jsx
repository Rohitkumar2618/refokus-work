
import Cards from './components/Cards'
import Footer from './components/Footer'
import Maruees from './components/Maruees'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Stripes from './components/Stripes'
import Work from './components/Work'





const App = () => {
  return (
    <div className='w-full bg-zinc-900  font-["satoshi"] text-white'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Maruees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App