import Vue from 'vue'
import MyButton from '../Button.vue'

export default { title: 'Button', component: MyButton };

export const button = () => '<div>' +
  
    '<h2>Basic</h2>' + 
    '<div class="grid grid-cols-10 gap-3">' +
      '<my-button label="default" />' +
      '<my-button color="green" label="green" />' +
      '<my-button color="gray" label="gray" />' +
      '<my-button color="blue" label="blue" />' +
      '<my-button color="red" label="red" />' +
    '</div>' +
    '<br />' +
    '<br />' +
    '<h2>Sizes</h2>' + 
    '<div>' +
      '<my-button class="m-2 w-20 align-bottom" size="sm" color="green" label="sm" />' +
      '<my-button class="m-2 w-20 align-bottom" size="md" color="blue" label="md" />' +
      '<my-button class="m-2 w-20 align-bottom" size="lg" color="red" label="lg" />' +
      '<my-button class="m-2 w-20 align-bottom" size="xl" color="gray" label="xl" />' +
    '</div>' +
    '<br />' +
    '<br />' +
    '<h2>Button with Icon</h2>' +
    '<div>' +
      '<my-button class="m-2 align-bottom" color="green" icon="moon" size="sm" />' +
      '<my-button class="m-2 align-bottom" color="blue" icon="write" size="md" />' +
      '<my-button class="m-2 align-bottom" color="red" icon="done" size="lg" />' +
      '<my-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" />' +
    '</div>' +
    '<br />' +
    '<br />' +
    '<h2>Button with Icon and Text</h2>' +
    '<div>' +
      '<my-button class="m-2 align-bottom" icon="sort" size="sm" label="default" />' +
      '<my-button class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" />' +
      '<my-button class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" />' +
      '<my-button class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" />' +
      '<my-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" />' +
    '</div>' +
  '</div>';

export const normalButton = () => '<div class="grid grid-cols-12 gap-3">' +
    '<my-button>Default' +
    '<my-button color="green">Green' +
    '<my-button color="gray">Gray' +
    '<my-button color="blue">Blue' +
    '<my-button color="red">Red' +
  '</div>';

export const asAComponent = () => ({
  components: { MyButton },
  template: '<my-button >Component Button'
});