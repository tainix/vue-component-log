const VueLogger = {

	beforeCreate() {
		console.debug('%s will be create', this.$options.name)
	},
	created() {
		console.debug('%s was created', this.$options.name)
	},

	beforeMount() {
		console.debug('%s will be mount', this.$options.name)
	},
	mounted() {
		console.debug('%s was mounted', this.$options.name)
	},

	beforeUpdate() {
		console.debug('%s will be update', this.$options.name)
	},
	updated() {
		console.debug('%s was updated', this.$options.name)
	},

	activated() {
		console.debug('%s was activated', this.$options.name)
	},

	deactivated() {
		console.debug('%s was deactivated', this.$options.name)
	},

	beforeDestroy() {
		console.debug('%s will be destroy', this.$options.name)
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