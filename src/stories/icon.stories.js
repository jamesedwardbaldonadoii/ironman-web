import Vue from 'vue';
import AppIcons from '../components/Icons.vue';
import AppBox from '../components/Box.vue';

export default { title: 'Icons', component: AppIcons };

export const Basic = () => '<div class="flex flex-wrap">' +
'<AppBox><app-icons class="box-item" name="moon"/> moon</AppBox>' +
'<AppBox><app-icons class="box-item" name="write"/> write</AppBox>' +
'<AppBox><app-icons class="box-item" name="arrowDown"/> arrowDown</AppBox>' +
'<AppBox><app-icons class="box-item" name="done"/> done</AppBox>' +
'<AppBox><app-icons class="box-item" name="sort"/> sort</AppBox>' +
'<AppBox><app-icons class="box-item" name="sortDown"/> sortDown</AppBox>' +
'<AppBox><app-icons class="box-item" name="sortUp"/> sortUp</AppBox>' +
'<AppBox><app-icons class="box-item" name="home"/> home</AppBox>' +
'</div>';
