class ReactApp extends HTMLElement {
  constructor() {
    super();
    const childNode = document.createElement("div");
    childNode.id = "miniAppRoot";

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(childNode);
  }
}
customElements.define("react-app", ReactApp);
