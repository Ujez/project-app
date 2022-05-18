import React from "react";
import Typed from "typed.js";
import "./typed.styles.css";

const WebDev = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Welcome to<br/>our Platform',
        'We specialize in',
        'Web Design',
        'Database<br/>Management',
        'Web Security',
        'Web Development',
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="wrap">

      <div className="type-wrap"  onClick={() => typed.current.reset()}>
        <span style={{ whiteSpace: 'pre'}} ref={el} />
      </div>

      {/* <button onClick={() => typed.current.toggle()}>Toggle</button>
      <button onClick={() => typed.current.start()}>Start</button>
      <button onClick={() => typed.current.stop()}>Stop</button>
      <button onClick={() => typed.current.reset()}>Reset</button>
      <button onClick={() => typed.current.destroy()}>Destroy</button> */}
    </div>
  );
}


export default WebDev;
