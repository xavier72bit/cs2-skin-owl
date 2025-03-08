import { Component, xml } from "@odoo/owl";
import { NavBarButton } from "/src/base-structure/components/NavBarButton";


export class NavBar extends Component {
  static template = xml`
  <div class="wc_nav_bar">
    <div class="nav_bar_button_container">
      <t t-foreach="this.buttons" t-as="button" t-key="button.buttonName">
        <NavBarButton buttonName="button.buttonName" renderComponent="button.renderComponent"/>
      </t>
    </div>
  </div>
  `;

  static components = {
    NavBarButton,
  }

  setup() {
    this.buttons = this.env.services.navbarButtonService.buttons;
  }
};
