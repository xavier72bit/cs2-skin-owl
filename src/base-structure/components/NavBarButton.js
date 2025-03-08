import { xml, Component } from "@odoo/owl";
import { eventBus } from "/src/common/eventBus";

/**
 * NavBarButton是NavBar里的组件
 * 它的作用就是，点击后，将MainContentContainer区域内的显示内容，替换为props里的renderComponent
 * props.renderComponent通常是一个Content组件（见src/components/WebClient/MainContent.js中的定义）
 * 通过这个特性，实现“导航”的效果
 */
export class NavBarButton extends Component {
  static template = xml`
    <div class="nav_bar_button"  t-on-click="click">
      <t t-esc="props.buttonName"/>
    </div>
  `;

  static props = {
    // 按钮显示的名字
    buttonName: String,
    // 需要显示的组件
    renderComponent: Component
  }

  click() {
    eventBus.trigger("wc-mcc-update-content", {contentComponent: this.props.renderComponent});
  }
};

export const navbarButtonService = {
  buttons: [],
  addButton(buttonName, renderComponent) {
    this.buttons.push({
      buttonName: buttonName,
      renderComponent: renderComponent
    });
  }
};
