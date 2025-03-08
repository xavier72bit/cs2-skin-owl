import { Component, xml } from "@odoo/owl";

import { NavBar } from "./NavBar";
import { MainContentContainer } from "./MainContentContainer";
import { Footer } from "./Footer";


export class WebClient extends Component {
  /* DEV NOTE:
  1. 组件在模板里就是这样定义的，一个单标签
  2. 组件必须要有template属性
  */ 
  static template = xml`
    <t t-name="WebClient">
      <div class="web_client">
        <NavBar/>
        <MainContentContainer/>
        <Footer/>
      </div>
    </t>
  `;

  /* DEV NOTE:
  定义在模板里的组件引用，要写到components属性里
  */
  static components = {
    NavBar,
    MainContentContainer,
    Footer
  };
}
