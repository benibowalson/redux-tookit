import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  darkenColor,
  lightenColor,
  changeColor,
} from "./redux-stuff/my-slices/skin-color-slice";

import {
  incrementAge,
  decrementAge,
  resetAge,
} from "./redux-stuff/my-slices/age-slice";

function App() {
  const myColorName = useSelector(
    (state) => state.mySkinColorReducer.skin_color
  );
  const someAge = useSelector((state) => state.myAgeReducer.age);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(darkenColor())}>Darken</button>
      <button onClick={() => dispatch(lightenColor())}>Lighten</button>
      <button onClick={() => dispatch(changeColor("Green"))}>Change</button>
      <h1>{myColorName}</h1>
      <button onClick={() => dispatch(incrementAge(5))}>Increment</button>
      <button onClick={() => dispatch(decrementAge(2))}>Decrement</button>
      <button onClick={() => dispatch(resetAge())}>Reset</button>
      <h1>{someAge}</h1>
    </div>
  );
}

export default App;
