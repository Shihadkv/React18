import React from "react";
import ReactDOM  from "react-dom";

// React element we already discussed

// JSX html like syntax - it is transpiled to JS engine by PARCEL
const jsxHeading= <h1 id = "heading" className="head" > Its a jsx example</h1>
console.log(jsxHeading)



// React component
// 1. class Based - old way
// 2. Functional Component - new way

const Title = () => <h1>Its a functional component of title</h1>
let number = 13055;
let non = <h1>hi all</h1>
const DataComponent = () => (
    <div> 
         {non}
         <h2>{number}, {non}</h2>
         <Title/>
         <h1>Its a functional component jsx</h1>
    </div>
    )


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<DataComponent/>)