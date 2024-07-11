import logo from './logo.svg';
import './App.css';
import Local from './Components/Local';
import BackgroundColorChanger from './Components/Color';
import ThemeSwitcher from './Components/Color';
import LanguageSelector from './Components/Local';

function App() {

  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  
  const renderWelcomeMessage = () => {
    switch (selectedLanguage) {
      case 'fr':
        return 'Bienvenue!';
      case 'es':
        return '¡Bienvenido!';
      default:
        return 'Welcome!';
    }
  };

  return (
    <div className="App">
     
     <h1>ColorCanger And Language Canger</h1>


      <ThemeSwitcher/>
<br />
<h1 className='dd'>{renderWelcomeMessage()}</h1>
<br />
<LanguageSelector/>
   
      <br />




    </div>
  );
}

export default App;
