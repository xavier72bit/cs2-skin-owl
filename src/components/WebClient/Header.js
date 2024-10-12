import { useState, Component, xml } from "@odoo/owl";


export class Header extends Component {
  static template = xml`
    <t t-name="WebClient.Header">
      <div t-on-click="update">
        This is a <t t-esc="state.showText"/>
      </div>
    </t>
  `;

  state = useState({"showText": "Header"});

  update() {
    this.state.showText = this.state.showText === "Header" ? "哈哈哈哈" : "Header";
  }
}