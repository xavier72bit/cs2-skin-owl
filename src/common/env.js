/**
 * 整个项目全局的env对象，用于数据共享，组件、类的注册等等
 */
export const env = {
  components: {},
  services: {},
  addComponent(name, component) {
    this.components[name] = component;
  },
  addService(name, service) {
    this.services[name] = service;
  }
};
