import Vue from 'vue'
import MyButton from '../Button.vue'

export default { title: 'Button' };

export const normalButton = () => '<div><my-button cancel>cancel</my-button> <br /><br /> <my-button cta>submit</my-button></div>';

export const cancelButton = () => '<my-button cancel>CANCEL Button</my-button>';

export const asAComponent = () => ({
  components: { MyButton },
  template: '<my-button >Component Button</my-button>'
});