import Highlight from "@theme/CodeBlock";
import Prism from "prism-react-renderer/prism";
import vars from "./vars.json";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-scala");

export { vars, Prism, Highlight };
