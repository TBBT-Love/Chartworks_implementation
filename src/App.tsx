import "./styles.css";
import "./WebComponent";

import MyChartWorks from "./MyChartWorks";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Sample React App</h1>
      <h2>This app is rendered in the shadow dom</h2>
      <MyChartWorks />
    </div>
  );
}
