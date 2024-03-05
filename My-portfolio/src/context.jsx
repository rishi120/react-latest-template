import {hooks} from "./utils";

function ContextContainer({ children }) {
    return (<hooks.LoginProvider>{children}</hooks.LoginProvider>)

}

export default ContextContainer;