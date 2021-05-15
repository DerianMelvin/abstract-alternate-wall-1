/* 
  TODO: Create background animation

  ========================
    VARIABLE GUIDE
  ========================
  1. id:
      [square-l-1] : Define object based on (shape)-(size)-(number / order)

  2. className:
      [container-(shape)-(size)] : Define groups of shape & size
      [(shape)] : Define the shape of container
      [size-l, size-m, size-s] : Define the size of container
      [
        theme-set-1 : Use theme color set 1 (black - blue)
      ]
*/
import './css/main.css'

function App() {
  return (
    <div className="App">
      <div className="container-square-l">
        <div id="square-l-1" className="square size-l theme-set-1"></div>
        <div id="square-l-2" className="square size-l theme-set-1"></div>
        <div id="square-l-3" className="square size-l theme-set-1"></div>
        <div id="square-l-4" className="square size-l theme-set-1"></div>
        <div id="square-l-5" className="square size-l theme-set-1"></div>
      </div>

      <div className="container-square-m">
        <div id="square-m-1" className="square size-m theme-set-1"></div>
        <div id="square-m-2" className="square size-m theme-set-1"></div>
        <div id="square-m-3" className="square size-m theme-set-1"></div>
        <div id="square-m-4" className="square size-m theme-set-1"></div>
        <div id="square-m-5" className="square size-m theme-set-1"></div>
      </div>
    </div>
  );
}

export default App;
