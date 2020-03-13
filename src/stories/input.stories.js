import Vue from 'vue'
import AppInput from '../components/Input.vue'

export default { title: 'Input', component: AppInput }

export const Basic = () => '<div class="grid gap-3">' +
	'<div class="grid grid-cols-3 gap-3 items-end">' +
	'<AppInput value="Text" label="Label" />' +
	'<AppInput value="" placeholder="Text" />' +
	'<AppInput value="" placeholder="Text" error="true"/>' +
	'<AppInput value="" placeholder="Text" label="Label" error="Error Message"/>' +
	'</div>' +
	'<div class="grid grid-cols-3 gap-3 items-end">' +
	'<AppInput value="sample@email.com" label="Email" email/>' +
	'<AppInput value="" placeholder="johndoe@email.com" email/>' +
	'<AppInput value="" placeholder="johndoe@email.com" email error="true"/>' +
	'</div>' +
	'<div class="grid grid-cols-3 gap-3 items-end">' +
	'<AppInput value="password" label="Password" password/>' +
	'<AppInput value="" placeholder="************" password/>' +
	'<AppInput value="" placeholder="************" password error="true"/>' +
	'</div>' +
	'</div>'
