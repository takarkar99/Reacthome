import './App.css';
import Header from './Component/Layout/Header.js';
import Language from './Component/Language/Language'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NewFeature from './Component/New_features/NewFeature';
import SecondCompp from './Component/SecondComp/SecondCompp';
import ThirdComp from './Component/ThirdCom/ThirdComp';
import Footer from './Component/Layout/Footer.js'


function App() {
  return (
  <>
  <div>
      <br/>
      <Language/>
      <br/>
      <Header/>
      <br/>
      <br/>
      <NewFeature/>
      <br/>
      <SecondCompp/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ThirdComp/>
      <br/>
      <br/>
      <Footer/>
      
  </div>
  </>
  );
}

export default App;
