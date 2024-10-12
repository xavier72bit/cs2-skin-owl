import { useState, Component, xml } from "@odoo/owl";


export class MainContent extends Component {
  static template = xml`
    <t t-name="WebClient.MainContent">
      <div t-on-click="update">
        This is a <t t-esc="state.showText"/>
      </div>
    </t>
  `;

  state = useState({"showText": "MainContent"});

  update() {
    this.state.showText = this.state.showText === "MainContent" ? "哈哈哈哈" : "MainContent";
  }
}