import Vue from 'vue'
import AppInput from '../components/Input.vue'
import AppIcons from '../components/Icons.vue'

export default { title: 'Input', component: AppInput }

export const Basic = () => '<div class="grid gap-3">' +
	'<div class="grid grid-cols-3 gap-3 items-end">' +
	'<AppInput value="Text" label="Label" required> <AppIcons name="moon" slot="before"/> </AppInput>' +
	'<AppInput value="Text" label="Label" required> <span slot="after">Test</span> </AppInput>' +
	'<AppInput value="" placeholder="Text" required/>' +
	'<AppInput value="" placeholder="Text" :error="true"/>' +
	'<AppInput value="" placeholder="Text" label="Label" error="Error Message"/>' +
	'<AppInput value="" placeholder="Text" label="Required" required/>' +
	'<AppInput value="" placeholder="Text" label="Required" disabled/>' +
	'<AppInput value="Text" label="Label" required disabled> <span slot="after">Disabled</span> </AppInput>' +
	'<AppInput value="Text" label="Label" required disabled> <AppIcons name="moon" slot="before"/> </AppInput>' +
	'</div>' +
	'<div class="grid grid-cols-3 gap-3 items-end">' +
	'<AppInput value="sample@email.com" label="Email" email required/>' +
	'<AppInput value="" placeholder="johndoe@email.com" email required/>' +
	'<AppInput value="" placeholder="johndoe@email.com" email :error="true" required/>' +
	'</div>' +
	'<div class="grid grid-cols-3 gap-3 items-end">' +
	'<AppInput value="password" label="Password" password/>' +
	'<AppInput value="" placeholder="************" password/>' +
	'<AppInput value="" placeholder="************" password :error="true"/>' +
	'</div>' +
	'</div>'

export const inputWithLabel = () => '<div class="grid grid-cols-3 gap-3 items-end">' +
	'<AppInput value="" label="Email" placeholder="Email Placeholder" email />' +
	'<AppInput value="" label="Password" placeholder="Email Placeholder" password />' +
	'</div>';
export const inputText = () => '<AppInput value="Sample Text" placeholder="Added Placeholder" />';
export const inputEmail = () => '<AppInput value="" placeholder="Email Placeholder" email />';
export const inputPassword = () => '<AppInput value="" placeholder="Password Placeholder" password />';
export const inputDisabled = () => '<AppInput value="" placeholder="Password Placeholder" disabled />';
export const inputBeforeSlot = () => '<div class="grid grid-cols-3 gap-3 items-end">' +
	'<AppInput value="Text" label="Label" required> <AppIcons name="moon" slot="before"/> </AppInput>' +
	'<AppInput value="Text" label="Label" required> <span slot="before">Test</span> </AppInput>' +
	'<AppInput value="Text" label="Label" required> <span slot="before"><AppIcons name="moon" /> Test</span> </AppInput>' +
	'</div>';
export const inputAfterSlot = () => '<div class="grid grid-cols-3 gap-3 items-end">' +
	'<AppInput value="Text" label="Label" required> <AppIcons name="moon" slot="after"/> </AppInput>' +
	'<AppInput value="Text" label="Label" required> <span slot="after">Test</span> </AppInput>' +
	'<AppInput value="Text" label="Label" required> <span class="flex" slot="after"><AppIcons name="moon" /> Test</span> </AppInput>' +
	'</div>';
