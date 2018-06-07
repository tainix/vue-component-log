const VueLogger = {

	beforeCreate() {
		console.info('%s will be create', this.$options.name)
	},
	created() {
		console.info('%s was created', this.$options.name)
	},

	beforeMount() {
		console.info('%s will be mount', this.$options.name)
	},
	mounted() {
		console.info('%s was mounted', this.$options.name)
	},

	beforeUpdate() {
		console.info('%s will ben update', this.$options.name)
	},
	updated() {
		console.info('%s was updated', this.$options.name)
	},

	activated() {
		console.info('%s was activated', this.$options.name)
	},

	deactivated() {
		console.info('%s was deactivated', this.$options.name)
	},

	beforeDestroy() {
		console.info('%s will be destroy', this.$options.name)
	},

	destroyed() {
		console.info('%s was destroyed', this.$options.name)
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