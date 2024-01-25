import './App.css';
import Accordion from './components/Accordion';

const App = () => {
  return (
    <div className="wrapper">
      <div className="boxWrapper">
        <img src="Group 4 (4).svg" alt="" className="img1" />
        <img src="Path Copy (1).svg" alt="" className="img2" />
        <img src="mention_isometric 2 (1).svg" alt="" className="img3" />
        <img src="Group 2 (4).svg" alt="" className="img5" />

        <h1>FAQ</h1>
        <Accordion />
      </div>
      <img src="\public\Group 6 (3).svg" alt="" className="img4" />
    </div>
  );
};
export default App;
