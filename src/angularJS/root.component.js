import angular from 'angular';
import template from './root.template.html';
import { getUserName } from '../imports/userImports';

angular
  .module('angularJS-app')
  .component('root', {
    template,
    controllerAs: 'vm',
    controller() {
      const vm = this;

      vm.userName = getUserName();

      window.addEventListener("setState", evt => {
        vm.userName = evt.userName
      });
    },
  })