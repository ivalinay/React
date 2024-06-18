import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

const rootDomElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootDomElement);

const reactHeadingElement = React.createElement("h1", {}, "Hello From JSX!");

root.render(reactHeadingElement);
