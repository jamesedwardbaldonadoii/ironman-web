import Vue from 'vue'
import AppButton from '../components/Button.vue'

export default { title: 'Button', component: AppButton }

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
	'<app-button class="m-2 align-bottom" icon="home" size="sm" />' +
	'<app-button class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" />' +
	'<app-button class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" />' +
	'<app-button class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" />' +
	'<app-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" />' +
	'</div>' +
	'<div>' +
	'<app-button class="m-2 align-bottom" icon="home" size="sm" circle />' +
	'<app-button class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" circle />' +
	'<app-button class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" circle />' +
	'<app-button class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" circle />' +
	'<app-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" circle />' +
	'</div>' +
	'<div>' +
	'<app-button class="m-2 align-bottom" icon="home" size="sm" disabled />' +
	'<app-button class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" disabled />' +
	'<app-button class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" disabled />' +
	'<app-button class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" disabled />' +
	'<app-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" disabled />' +
	'</div>' +
	'<div>' +
	'<app-button class="m-2 align-bottom" icon="home" size="sm" loading circle />' +
	'<app-button class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" loading />' +
	'<app-button class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" loading />' +
	'<app-button class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" loading />' +
	'<app-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" loading />' +
	'</div>' +
	'</div>'

export const color = () => '<div class="grid grid-cols-10 gap-3">' +
	'<app-button label="default" />' +
	'<app-button color="green" label="green" />' +
	'<app-button color="gray" label="gray" />' +
	'<app-button color="blue" label="blue" />' +
	'<app-button color="red" label="red" />' +
	'</div>'

export const sizes = () => '<div>' +
	'<app-button class="m-2 w-20 align-bottom" size="sm" color="green" label="sm" />' +
	'<app-button class="m-2 w-20 align-bottom" size="md" color="blue" label="md" />' +
	'<app-button class="m-2 w-20 align-bottom" size="lg" color="red" label="lg" />' +
	'<app-button class="m-2 w-20 align-bottom" size="xl" color="gray" label="xl" />' +
	'</div>'

export const shapes = () => '<div>' +
	'<app-button class="m-2 align-bottom" icon="home" size="sm" circle />' +
	'<app-button class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" circle />' +
	'<app-button class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" />' +
	'<app-button class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" circle />' +
	'<app-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" />' +
	'</div>'

export const disabled = () => '<div>' +
	'<app-button class="m-2 align-bottom" icon="home" size="sm" label="default" disabled />' +
	'<app-button class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" disabled />' +
	'<app-button class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" disabled />' +
	'<app-button class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" disabled />' +
	'<app-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" disabled />' +
	'</div>'

export const loading = () => '<div>' +
	'<app-button class="m-2 align-bottom" icon="home" size="sm" label="default" loading />' +
	'<app-button class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" loading />' +
	'<app-button class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" loading />' +
	'<app-button class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" loading />' +
	'<app-button class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" loading />' +
	'</div>'


export const asAComponent = () => ({
	components: { AppButton },
	template: '<app-button label="Component Button" />'
})
