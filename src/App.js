
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import FilteredList from './List';
import amsterdam from "./img/amsterdam.jpg"
import beijing from "./img/beijing.jpg"
import buenosaires from "./img/buenosaires.jpg"
import delhi from "./img/delhi.jpg"
import istanbul from "./img/istanbul.jpg"
import la from "./img/la.jpg"
import lagos from "./img/lagos.jpg"
import london from "./img/london.jpg"
import nyc from "./img/nyc.jpg"
import paris from "./img/paris.jpg"
import shanghai from "./img/shanghai.jpg"
import singapore from "./img/singapore.jpg"
import telaviv from "./img/telaviv.jpg"
import tokyo from "./img/tokyo.jpg"

//initialize list of cities
const cityList = [
  { name: "Amsterdam", pop: 822, col: 85, cap: true, coast: true, img: amsterdam },
  { name: "Beijing", pop: 19618, col: 47, cap: true, coast: false, img: beijing },
  { name: "Buenos Aires", pop: 14967, col: 35, cap: true, coast: true, img: buenosaires },
  { name: "Delhi", pop: 28514, col: 28, cap: true, coast: false, img: delhi },
  { name: "Istanbul", pop: 14751, col: 31, cap: false, coast: true, img: istanbul },
  { name: "Lagos", pop: 13463, col: 36, cap: false, coast: true, img: lagos },
  { name: "London", pop: 9046, col: 84, cap: true, coast: false, img: london },
  { name: "Los Angeles", pop: 12458, col: 82, cap: false, coast: true, img: la },
  { name: "New York City", pop: 18819, col: 100, cap: false, coast: true, img: nyc },
  { name: "Paris", pop: 10901, col: 93, cap: true, coast: false, img: paris },
  { name: "Shanghai", pop: 25582, col: 51, cap: false, coast: true, img: shanghai },
  { name: "Singapore", pop: 5792, col: 84, cap: true, coast: true, img: singapore },
  { name: "Tel Aviv", pop: 1388, col: 92, cap: false, coast: true, img: telaviv },
  { name: "Tokyo", pop: 37400, col: 91, cap: true, coast: true, img: tokyo },
]

//all the logic for listing is in List.jsx
function App() {
  return (
    <div className="App">
      <br></br>
      <h1 class="text-center">City Picker</h1>
      <h3 class="text-center">Discover your next urban adventure!</h3>
      <FilteredList list={cityList}></FilteredList>
    </div>
  );
}

export default App;
