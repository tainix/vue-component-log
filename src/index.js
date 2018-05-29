const VueLogger = {

	mounted() {
		console.debug('%s was mounted', this.$options.name)
	},

	updated() {
		console.debug('%s was updated', this.$options.name)
	},

	destroyed() {
		console.debug('%s was destroyed', this.$options.name)
	}
}

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(AppMixin)
}

export default function install(Vue) {

	if (process.env.NODE_ENV !== 'production') {
		Vue.mixin(VueLogger)
	}

}