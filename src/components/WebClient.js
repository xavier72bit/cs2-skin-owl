/* DEV NOTE:
这里采用了HTML5语义化结构元素的组件命名方案

    +---------+---------+---------+   <----+
    |           <header>          |      Header
    +---------+---------+---------+   <----+
    |            <nav>            |      NavBar
    +---------+---------+---------+   <----+
    |     <article>     |         |        |
    +---------+---------+         +        |
    |     <article>     |         |        |
    +---------+---------+ <aside> +   MainContent
    |     <article>     |         |        |
    +---------+---------+         +        |
    |     <article>     |         |        |
    +---------+---------+---------+   <----+
    |           <footer>          |     Footer
    +---------+---------+---------+   <----+

*/


import { Component, xml } from "@odoo/owl";
import { Header } from "./WebClient/Header";
import { NavBar } from "./WebClient/NavBar";
import { MainContent } from "./WebClient/MainContent";
import { Footer } from "./WebClient/Footer";


// 这里我就用odoo官方的web应用中的命名结构了
export class WebClient extends Component {
  /* DEV NOTE:
  1. 组件在模板里就是这样定义的，一个单标签
  2. 组件必须要有template属性
  */ 
  static template = xml`
    <t t-name="WebClient">
      <Header/>
      <NavBar/>
      <MainContent/>
      <Footer/>
    </t>
  `;

  /* DEV NOTE:
  定义在模板里的组件引用，要写到components属性里
  */
  static components = {
    Header,
    NavBar,
    MainContent,
    Footer
  };
}