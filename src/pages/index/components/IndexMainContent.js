import { Component, xml } from '@odoo/owl';


export class IndexMainContent extends Component {
  static template = xml`
    <div>
      This is a Index
    </div>
  `;

  setup(params) {
    console.log(this);
  }
};
