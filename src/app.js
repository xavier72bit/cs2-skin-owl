/* DEV NOTE:
webpack支持css的打包后，即可直接导入css样式
*/
import "../scss/main.scss"


import { App } from "@odoo/owl";
import { env } from "./common/env";
import { loadAll } from "./common/loading"; 
import { WebClient } from "./base-structure/components/WebClient";


// 执行loading脚本，将所有所需内容，加载到env对象中
loadAll();

// 将根组件包装为一个App，并包含全局的env对象，这样整个项目内的所有组件，都能通过this.env来访问
export const app = new App(WebClient, {"name": "CS2 Skin WebClient", "env": env});
