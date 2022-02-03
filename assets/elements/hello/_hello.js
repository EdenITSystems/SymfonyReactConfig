import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import Hello from "./Hello";


class _hello extends HTMLElement {

    connectedCallback() {
        render(<Hello/>, this)
    }

    disconnectedCallback() {
        unmountComponentAtNode(this)
    }

}

export default _hello;