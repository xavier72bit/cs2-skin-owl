import { Component, xml } from "@odoo/owl";
import { NavBar } from "../NavBar/NavBar";
import { MainContentContainer } from "../MainContent/MainContent";
import { Footer } from "../Footer/Footer";

/* DEV NOTE:
webpack支持css的打包后，即可直接导入css样式
*/
import "./WebClient.scss"


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

  static props = {

  }

  /* DEV NOTE:
  定义在模板里的组件引用，要写到components属性里
  */
  static components = {
    NavBar,
    MainContentContainer,
    Footer
  };
}