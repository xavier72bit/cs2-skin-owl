import { Component, useState, xml } from "@odoo/owl";
import { eventBus } from "/src/common/eventBus";

/**
 * MainContentContainer
 * 用来显示MainContent的容器组件，它监听EventBus上的wc-mcc-update-content事件
 * 当wc-mcc-update-content事件被触发时，就会调用updateContent函数
 */
export class MainContentContainer extends Component {
  static template = xml`
    <div t-name="WebClient.MainContentContainer" class="wc_main_content_container">
      <t t-component="contentState.contentComponent"/>
    </div>
  `;

  // 响应式对象，当此对象中的值发生变化时，会触发重新渲染
  contentState = useState({
    "contentComponent": this.env.components.indexMainContent,
  });

  /* DEV NOTE:
  以后如果需要监听某个Event，并且Event需要携带payload，Event的Handler为当前组件的某个函数，就照下面的方式写
    1. 在setup函数里，添加要监听的事件，并将需要作为Handler的函数绑定上去

    2. Handler函数固定写法：
      someFunctionName(event) {
        // 在这个event对象里，就封装了payload，要取它的值，可以通过detail属性来访问
        console.log(event.detail)
      }

    3. 关于如何触发Event并传递数据，请参考/src/base-structure/components/NavBarButton.js
  */

  setup() {
    eventBus.addEventListener("wc-mcc-update-content", this.updateContent.bind(this));
  }

  updateContent(event) {
    this.contentState.contentComponent = event.detail.contentComponent;
  }
};
