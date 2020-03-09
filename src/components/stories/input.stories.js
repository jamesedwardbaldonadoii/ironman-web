import Vue from 'vue'
import MyInput from '../Button.vue'

export default { title: 'Input' };

export const normalInput = () => '<div><my-input cancel>cancel</my-input> <br /><br /> <my-input cta>submit</my-input></div>';

export const cancelInput = () => '<my-input cancel>CANCEL Button</my-input>';

export const asAComponent = () => ({
  components: { MyInput },
  template: '<my-input >Component Button</my-input>'
});