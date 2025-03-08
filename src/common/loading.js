import { env } from '/src/common/env';

import { navbarButtonService } from '/src/base-structure/components/NavBarButton';

import { IndexMainContent } from '/src/pages/index/components/IndexMainContent';


function loadAllServices() {
  env.addService('navbarButtonService', navbarButtonService);
}

function loadAllPageContents () {
  env.addComponent('indexMainContent', IndexMainContent);
  env.services.navbarButtonService.addButton('index', env.components.indexMainContent);
}

export function loadAll() {
  loadAllServices();
  loadAllPageContents();
}
