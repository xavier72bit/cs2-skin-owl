import { useState, Component, xml } from "@odoo/owl";


export class NavBar extends Component {
  static template = xml`
    <t t-name="WebClient.NavBar">
      <div t-on-click="update">
        This is a <t t-esc="state.showText"/>
      </div>
    </t>
  `;

  state = useState({"showText": "NavBar"});

  update() {
    this.state.showText = this.state.showText === "NavBar" ? "哈哈哈哈" : "NavBar";
  }
}