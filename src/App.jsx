import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Clock from './components/Clock/Clock';
import Saludo from './components/Saludo/Saludo'
import Contador from './components/Contador/Contador';

function App() {
  const menuItems = ['Home', 'Marketplace', 'Cart', 'Login']

  const handleSubmitNumber = (contador) => {
    console.log(contador)
  }

  return (
    <>
      <Navbar items={menuItems} />
      <Clock />
      <Contador valorInicial={50} handleSubmitNumber={(contador) => handleSubmitNumber(contador)}/>
      <Saludo nombre={'Pepe'} edad={32} apellido={'Gomez'} />
      <Footer />
    </>
  )
}

export default App;
