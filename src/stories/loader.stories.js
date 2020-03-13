import Vue from 'vue';
import AppLoader from '../components/Loader.vue';

export default { title: 'Loader', component: AppLoader };

export const Basic = () => '<div><div class="relative h-3"><AppLoader size="sm"/></div>' +
	'<div class="relative h-4 m-3"><AppLoader size="md"/></div>' +
	'<div class="relative h-6 m-3"><AppLoader size="lg"/></div>' +
	'<div class="relative h-5 m-3"><AppLoader size="xl"/></div></div>';
