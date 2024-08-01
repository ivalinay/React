import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

const rootDomElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootDomElement);

const headerJSX = (
  <div>
    <header className="site-header">
      <h1>Hello from JSX!2</h1>
      <h2>The best syntax ever!</h2>

      <p>something else here</p>
    </header>
    <Footer />
  </div>
);

root.render(headerJSX);
