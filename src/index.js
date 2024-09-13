import React from "react";
import ReactDOM from "react-dom";
import UIKit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import Website from "./pages/websitePage";

import "uikit/dist/css/uikit.min.css"


UIKit.use(Icons);

const rootElement = document.getElementById("root");
ReactDOM.render(<Website />, rootElement);

