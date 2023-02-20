import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function MyChartWorks() {
  const loadChartWorkScript = () => {
    const scriptNode = document.body.appendChild(
      document.createElement("script")
    );
    scriptNode.src =
      "https://content.markitcdn.com/www.chartworks.io/content/chartworks/dist/1.4.22/js/chartworks.min.js";
    scriptNode.type = "text/javascript";
    scriptNode.async = true;
  };

  const getChart = () => {
    const getChartScript = document.createElement("script");
    getChartScript.async = true;
    getChartScript.text =
      "        new ChartworksBuilder({\n" +
      '            "token": "demo-token",\n' +
      '            "target": "#chartTarget",\n' +
      '	           "shadowTarget": "react-app",\n' +
      '            "symbol": "AAPL",\n' +
      '            "exchange": "NSQ",\n' +
      '            "feature.timeframe": "true",\n' +
      '            "feature.indicators": "true",\n' +
      '            "feature.tools": "true",\n' +
      '            "template.size": "large",\n' +
      '            "feature.panZoom": "true",\n' +
      '            "panel.lower.indicator": "volume"\n' +
      '            "environment": "P"\n' +
      "        });";

    document.body.appendChild(getChartScript);
  };

  useEffect(() => {
    loadChartWorkScript();
    //getChart calls after library finishes loading
    setTimeout(() => {
      getChart();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const styledChartNode =
  //   document.getElementById("InteractiveChart") ??
  //   document.body.insertBefore(
  //     document.createElement("div"),
  //     document.querySelector("react-app")
  //   );
  // styledChartNode.id = "InteractiveChart"; // <div id ="InteractiveChart"> </div>

  return (
    <>
      {/* Commenting out createPortal will have the interactive chart rendering under 
      document.body and replacing all the exisiting nodes
       */}
      {/* {ReactDOM.createPortal(
        <div id="chartTarget">Hello charts</div>,
        document.getElementById("InteractiveChart")
      )} */}

      <div id="chartTarget" className="chart"></div>
    </>
  );
}
