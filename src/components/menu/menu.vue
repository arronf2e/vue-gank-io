<template>
	<div class="menu">
		<div class="menu-list" :class="{ 'show': show}">
			<div class="menu-header">
				<img src="http://tva2.sinaimg.cn/crop.0.0.996.996.180/73f587a7jw8fa5pozf9hej20ro0rp0u4.jpg" alt="" class="menu-avatar">
				<div class="menu-title">Zhanghao</div>
			</div>
			<div class="menu-ul">
				<div v-for="menu in menus" @click="updateHeader(MENU_CONVERT[menu], menu)">
					<router-link :to="menu" class="icon-quanbu iconfont item border-1px">
						<div class="menu-icon">
							<i class="iconfont" :class="'icon-' + menu"></i>
						</div>
						<span class="menu-text">{{ MENU_CONVERT[menu] }}</span>
						<div class="menu-new" v-show="menu === 'day' && news > 0">
							<span>5</span>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<div class="menu-other"></div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
const MENU_CONVERT = { 'welfare': '福利', 'day': '每日推荐', 'ios': 'IOS', 'android': 'Android', 'web': '前端'}
export default {
	name: 'v-menu',
	props: {
		show: {
			type: Boolean
		}
	},
	data () {
		return {
			MENU_CONVERT: MENU_CONVERT
		}
	},
	computed: {
		...mapState([
			'menus', 'news'
		])
	},
	methods: {
		updateHeader (title, menu) {
			this.$store.commit('UPDATE_TITLE', title)
			this.$store.commit('UPDATE_MENUSHOW')
			if (menu == 'day') {
				this.$store.commit('UPDATE_NEWS')
			}
		}
	}
}
</script>
<style lang="stylus">
	@import 'menu.styl'
</style>