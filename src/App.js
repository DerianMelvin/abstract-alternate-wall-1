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
      [theme-color-normal, theme-color-dark, theme-color-light] : Set default theme color
*/
import './css/main.css'

function App() {
  return (
    <div className="App">
      <div className="container-square-l">
        <div id="square-l-1" className="square size-l theme-color-normal"></div>
        <div id="square-l-2" className="square size-l theme-color-normal"></div>
        <div id="square-l-3" className="square size-l theme-color-normal"></div>
        <div id="square-l-4" className="square size-l theme-color-normal"></div>
        <div id="square-l-5" className="square size-l theme-color-normal"></div>
      </div>

      <div className="container-square-m">
        <div id="square-m-1" className="square size-m theme-color-dark"></div>
        <div id="square-m-2" className="square size-m theme-color-dark"></div>
        <div id="square-m-3" className="square size-m theme-color-dark"></div>
        <div id="square-m-4" className="square size-m theme-color-dark"></div>
        <div id="square-m-5" className="square size-m theme-color-dark"></div>
      </div>

      <div className="container-square-s">
        <div id="square-s-1" className="square size-s theme-color-light"></div>
        <div id="square-s-2" className="square size-s theme-color-light"></div>
        <div id="square-s-3" className="square size-s theme-color-light"></div>
        <div id="square-s-4" className="square size-s theme-color-light"></div>
        <div id="square-s-5" className="square size-s theme-color-light"></div>
      </div>
    </div>
  );
}

export default App;
