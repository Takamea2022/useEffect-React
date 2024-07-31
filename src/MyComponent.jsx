import React, {useState, useEffect} from 'react';
// useEffect(function, [dependencies])
/*
  useEffect() = React Hook that tells react to DO THIS CODE  WHEN(pick one):
  This component re-renders
  this component mounts
  The state of a value

// useEffect(function,[dependencies]) //Syntax for useEffect
1. useEffect(() => {})  //runs every re-render
2. useEffect(() => {}, []) //runs every mount
3. useEffect(() => {}, [value]) // runs on mount + when value change

useEffect best uses
  1. Event listener
  2. DOM manipulation
  3. Subscription (real-time update)
  4. Fetching data from an API
  5. Clean up when a component unmount
*/

function MyComponent() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("eventlisener");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Remove");
    } 
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} ${height}`;
  }, [width, height]);
 
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return(
    <>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>


    </>
  )
}

  export default MyComponent;