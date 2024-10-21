import { Component, xml } from "@odoo/owl";
import { NavBarButton } from "./NavBar/NavBarButton";
import { DefaultContent, TestContent } from "./MainContent";

import "./NavBar.scss"

export class NavBar extends Component {
  static template = xml`
  <div class="wc_nav_bar">
    <NavBarButton buttonName="'默认'" renderComponent="linkContentState.default"/>
    <NavBarButton buttonName="'测试'" renderComponent="linkContentState.test"/>
  </div>
  `;

  static components = {
    NavBarButton,
  }

  linkContentState = {
    'default': DefaultContent,
    'test': TestContent
  }
}