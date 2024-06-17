import { Provider } from "react-redux";
import { Nav } from "./Nav"
import { Navhead } from "./Navhead";
import { Routing } from "./Routing"
import { BrowserRouter } from "react-router-dom";
import store from "./Store";
import { useState } from "react";


export const Main = () => {
    let [bool,setBoll]=useState(true)
        return <>
            <Provider store={store}>
                <BrowserRouter>
                  {bool&&  <Navhead set={setBoll}></Navhead>}
                  { <Nav set={setBoll}></Nav>}
                    <Routing></Routing>
                </BrowserRouter>
            </Provider>
        </>
    }
