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


const parent = React.createElement("div", 
{id:"parent"},
[React.createElement("div", {id:"child"}, [
    React.createElement("h1",{}, "I am an h1 tag"),
    React.createElement("h1",{}, "I am an h1 second tag")
]),
React.createElement("div", {id:"child2"}, [
    React.createElement("h1",{}, "I am an h1 tag"),
    React.createElement("h1",{}, "I am an h1 second tag")
])]
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);