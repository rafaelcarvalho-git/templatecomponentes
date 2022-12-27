import './App.css';
import './assets/bootstrap.min.css'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <main>
      <Works />
        <div class="b-example-divider"></div>
      <Contact />
        <div class="b-example-divider"></div>
        <Footer />
    </main>
  );
}

export default App;
