import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Content from './Content';
import FooterMenu from './FooterMenu';

function App() {
  return (
   <div>
    <header>
      <Navbar/>
    </header>
    <Banner/>
    <main>
      <Content/>
    </main>
    <footer>
      <FooterMenu/>
    </footer>
   </div>
  );
}

export default App;
