import Vue from 'vue'
import AppButton from '../components/Button.vue'

export default { title: 'Button', component: AppButton }

export const Basic = () => '<div>' +
	'<div class="grid grid-cols-10 gap-3">' +
	'<AppButton label="default" />' +
	'<AppButton color="green" label="green" />' +
	'<AppButton color="gray" label="gray" />' +
	'<AppButton color="blue" label="blue" />' +
	'<AppButton color="red" label="red" />' +
	'</div>' +
	'<div>' +
	'<AppButton class="m-2 w-20 align-bottom" size="sm" color="green" label="sm" />' +
	'<AppButton class="m-2 w-20 align-bottom" size="md" color="blue" label="md" />' +
	'<AppButton class="m-2 w-20 align-bottom" size="lg" color="red" label="lg" />' +
	'<AppButton class="m-2 w-20 align-bottom" size="xl" color="gray" label="xl" />' +
	'</div>' +
	'<div>' +
	'<AppButton class="m-2 align-bottom" color="green" icon="moon" size="sm" />' +
	'<AppButton class="m-2 align-bottom" color="blue" icon="write" size="md" />' +
	'<AppButton class="m-2 align-bottom" color="red" icon="done" size="lg" />' +
	'<AppButton class="m-2 align-bottom" color="gray" icon="sort" size="xl" />' +
	'</div>' +
	'<div>' +
	'<AppButton class="m-2 align-bottom" icon="home" size="sm" />' +
	'<AppButton class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" />' +
	'<AppButton class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" />' +
	'<AppButton class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" />' +
	'<AppButton class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" />' +
	'</div>' +
	'<div>' +
	'<AppButton class="m-2 align-bottom" icon="home" size="sm" circle />' +
	'<AppButton class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" circle />' +
	'<AppButton class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" circle />' +
	'<AppButton class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" circle />' +
	'<AppButton class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" circle />' +
	'</div>' +
	'<div>' +
	'<AppButton class="m-2 align-bottom" icon="home" size="sm" disabled />' +
	'<AppButton class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" disabled />' +
	'<AppButton class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" disabled />' +
	'<AppButton class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" disabled />' +
	'<AppButton class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" disabled />' +
	'</div>' +
	'<div>' +
	'<AppButton class="m-2 align-bottom" icon="home" size="sm" loading circle />' +
	'<AppButton class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" loading />' +
	'<AppButton class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" loading />' +
	'<AppButton class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" loading />' +
	'<AppButton class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" loading />' +
	'</div>' +
	'</div>'

export const color = () => '<div class="grid grid-cols-10 gap-3">' +
	'<AppButton label="default" />' +
	'<AppButton color="green" label="green" />' +
	'<AppButton color="gray" label="gray" />' +
	'<AppButton color="blue" label="blue" />' +
	'<AppButton color="red" label="red" />' +
	'</div>'

export const sizes = () => '<div>' +
	'<AppButton class="m-2 w-20 align-bottom" size="sm" color="green" label="sm" />' +
	'<AppButton class="m-2 w-20 align-bottom" size="md" color="blue" label="md" />' +
	'<AppButton class="m-2 w-20 align-bottom" size="lg" color="red" label="lg" />' +
	'<AppButton class="m-2 w-20 align-bottom" size="xl" color="gray" label="xl" />' +
	'</div>'

export const shapes = () => '<div>' +
	'<AppButton class="m-2 align-bottom" icon="home" size="sm" circle />' +
	'<AppButton class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" circle />' +
	'<AppButton class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" />' +
	'<AppButton class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" circle />' +
	'<AppButton class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" />' +
	'</div>'

export const disabled = () => '<div>' +
	'<AppButton class="m-2 align-bottom" icon="home" size="sm" label="default" disabled />' +
	'<AppButton class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" disabled />' +
	'<AppButton class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" disabled />' +
	'<AppButton class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" disabled />' +
	'<AppButton class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" disabled />' +
	'</div>'

export const loading = () => '<div>' +
	'<AppButton class="m-2 align-bottom" icon="home" size="sm" label="default" loading />' +
	'<AppButton class="m-2 align-bottom" color="green" icon="moon" size="sm" label="green" loading />' +
	'<AppButton class="m-2 align-bottom" color="blue" icon="write" size="md" label="blue" loading />' +
	'<AppButton class="m-2 align-bottom" color="red" icon="done" size="lg" label="red" loading />' +
	'<AppButton class="m-2 align-bottom" color="gray" icon="sort" size="xl" label="gray" loading />' +
	'</div>'


export const asAComponent = () => ({
	components: { AppButton },
	template: '<AppButton label="Component Button" />'
})
