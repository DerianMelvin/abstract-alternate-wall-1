/* 
  Create background animation

  1. id guide:

      [square-l-1] : Define object based on (shape)-(size)-(number / order)

  2. className guide:

      [container-square-b] : Define groups of shape
      [square] : Define the shape of container
      [size-l, size-m, size-s] : Define the size of container
      [
        gradient-set-1 : Use gradient color set 1 (black - blue)
      ]
*/
import './css/main.css'

function App() {
  return (
    <div className="App">
      <div className="container-square-l">
        <div id="square-l-1" className="square size-l gradient-set-1"></div>
        <div id="square-l-2" className="square size-l gradient-set-1"></div>
        <div id="square-l-3" className="square size-l gradient-set-1"></div>
        <div id="square-l-4" className="square size-l gradient-set-1"></div>
        <div id="square-l-5" className="square size-l gradient-set-1"></div>
        <div id="square-l-6" className="square size-l gradient-set-1"></div>
      </div>
    </div>
  );
}

export default App;
