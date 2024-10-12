/* DEV NOTE
main.js负责将根组件包装成一个App类，并将App挂载到body标签上
*/

import { App } from "@odoo/owl";
import { WebClient } from "./components/WebClient";

const app = new App(WebClient, {"name": "CS2 Skin WebClent"})
app.mount(document.body)
