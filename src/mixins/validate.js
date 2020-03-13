import { regex } from '../config'

export default {
	computed: {
		$isEmail(val) {
			return regex.EMAIL.test(val);
		}
	}
}
