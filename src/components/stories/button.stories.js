import Vue from 'vue'
import AppButton from '../Button.vue'

export default { title: 'Button', component: AppButton };

export const Basic = () => '<div>' + 
    '<div class="grid grid-cols-10 gap-3">' +
      '<app-button label="default" />' +
      '<app-button color="green" label="green" />' +
      '<app-button color="gray" label="gray" />' +
      '<app-button color="blue" label="blue" />' +
      '<app-button color="red" label="red" />' +
    '</div>' +
    '<div>' +
      '<app-button class="m-2 w-20 align-bottom" size="sm" color="green" label="sm" />' +
      '<app-button class="m-2 w-20 align-bottom" size="md" color="blue" label="md" />' +
      '<app-button class="m-2 w-20 align-bottom" size="lg" color="red" label="lg" />' +
      '<app-button class="m-2 w-20 align-bottom" size="xl" color="gray" label="xl" />' +
    '</div>' +
    '<div>' +
      '<app-button class="m-2 align-bottom" color="green" icon="moon" size="sm" />' +
      '<app-button class="m-2 align-bottom" color="blue" icon="write" size="md" />' +
      '<app-button class="m-2 align-bottom" color="red" icon="done" size="lg" />' +
      '<app-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" />' +
    '</div>' +
    '<div>' +
      '<app-button class="m-2 align-bottom" icon="home" size="sm" label="default" />' +
      '<app-button class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" />' +
      '<app-button class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" />' +
      '<app-button class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" />' +
      '<app-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" />' +
    '</div>' +
  '</div>';

export const color = () => '<div class="grid grid-cols-10 gap-3">' +
  '<app-button label="default" />' +
  '<app-button color="green" label="green" />' +
  '<app-button color="gray" label="gray" />' +
  '<app-button color="blue" label="blue" />' +
  '<app-button color="red" label="red" />' +
'</div>';

export const sizes = () => '<div>' +
  '<app-button class="m-2 w-20 align-bottom" size="sm" color="green" label="sm" />' +
  '<app-button class="m-2 w-20 align-bottom" size="md" color="blue" label="md" />' +
  '<app-button class="m-2 w-20 align-bottom" size="lg" color="red" label="lg" />' +
  '<app-button class="m-2 w-20 align-bottom" size="xl" color="gray" label="xl" />' +
'</div>';


export const asAComponent = () => ({
  components: { AppButton },
  template: '<app-button label="Component Button" />'
});