import Vue from 'vue'
import AppIcons from '../components/Icons.vue'
import AppBox from '../components/Box.vue'

export default { title: 'Icons', component: AppIcons }

export const Basic = () => '<div class="flex flex-wrap">' +
'<AppBox><AppIcons class="box-item" name="moon"/> moon</AppBox>' +
'<AppBox><AppIcons class="box-item" name="write"/> write</AppBox>' +
'<AppBox><AppIcons class="box-item" name="arrowDown"/> arrowDown</AppBox>' +
'<AppBox><AppIcons class="box-item" name="done"/> done</AppBox>' +
'<AppBox><AppIcons class="box-item" name="sort"/> sort</AppBox>' +
'<AppBox><AppIcons class="box-item" name="sortDown"/> sortDown</AppBox>' +
'<AppBox><AppIcons class="box-item" name="sortUp"/> sortUp</AppBox>' +
'<AppBox><AppIcons class="box-item" name="home"/> home</AppBox>' +
'<AppBox><AppIcons class="box-item" name="logo"/> logo</AppBox>' +
'</div>'
