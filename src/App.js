import './App.css';
import Card from './components/card/card';
import Footer from './components/Footer/Footer';
import Left from './components/Left/Left';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Text from "./components/Text";

function App() {

  const text = "hello World"
  

  return (
    <div>
      <Text propsAdi={text}/>
      <Navbar/>
      <Card/>
      <Footer/>
      <News/>
      <Left/>

    </div>
  )
}

export default App;
