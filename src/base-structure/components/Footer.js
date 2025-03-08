import { useState, Component, xml } from "@odoo/owl";


export class Footer extends Component {
  static template = xml`
    <t t-name="WebClient.Footer">
      <div t-on-click="update">
        This is a <t t-esc="state.showText"/>
      </div>
    </t>
  `;

  state = useState({"showText": "Footer"});

  update() {
    this.state.showText = this.state.showText === "Footer" ? "哈哈哈哈" : "Footer";
  }
};
