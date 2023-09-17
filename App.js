/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>I am h1 tag</h1>
 *      <h1>I am second tag</h2>
 *  </div>
*  <div id="child2">
 *      <h1>I am h1 tag</h1>
 *      <h1>I am second tag</h2>
 *  </div>
 * </div>
 * 
 */


// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz:"abc"}, 
//     "Hello world from React"
// ) ;

// console.log(heading);//object
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Hellow world");

console.log(heading);

//transpiled before it reaches JS engine -PARCEL - BABEL

//JSX => Babel transpiles it to React.createElement() => ReactElement-JS Object => HTMLElement(render)
//React Element
const jsxHeading = <h1 className="heading" tabIndex="5">Hello World using jsx</h1>
const elem = <span>React Element</span>

const Title = () => {
    return <h1>React Title</h1>
}

//React Functional Component: A normal javascript function which returns jsx
const HeadingComponent = () => (
    <div>
        <Title/>
        {Title()}
        {elem}
        <h1>React Functional Component</h1>
    </div>
)


console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent/>)