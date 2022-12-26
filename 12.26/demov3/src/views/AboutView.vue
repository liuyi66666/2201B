<template>
	<div class="">
		<h1>{{ text }}</h1>
		<button @click="getage">事件</button>
	</div>
</template>

<script>
	import { ref, reactive, toRefs } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter, useRoute } from 'vue-router';
	export default {
		// beforeCreate() {
		// 	console.log('beforeCreate');
		// },
		// setup(props, ctx) {
		// 	const text = '张三你好6';
		// 	const getage = () => {
		// 		alert('事件弹出');
		// 	};
		// 	console.log('setup');
		// 	const store = useStore();
		// 	const router = useRouter();
		// 	const route = useRoute();
		// 	const data = reactive({});
		// 	return { ...toRefs(data), text, getage };
		// },
		// data() {
		// 	return {
		// 		text: '我是vue3',
		// 	};
		// },

		// beforeCreate() {
		// 	console.log('beforeCreate');
		// },
		// setup(props, ctx) {
		// 	const text = '张三你好6';
		// 	const getage = () => {
		// 		alert('事件弹出');
		// 	};
		// 	console.log('setup');
		// 	const store = useStore();
		// 	const router = useRouter();
		// 	const route = useRoute();
		// 	const data = reactive({});
		// 	return { ...toRefs(data), text, getage };
		// },
		// data() {
		// 	return {
		// 		text: '我是vue3',
		// 	};
		// },

	// 	beforeCreate() {
	// 		console.log('beforeCreate');
	// 	},
	// 	setup(props, ctx) {
	// 		const text = '张三你好6';
	// 		const getage = () => {
	// 			alert('事件弹出');
	// 		};
	// 		console.log('setup');
	// 		const store = useStore();
	// 		const router = useRouter();
	// 		const route = useRoute();
	// 		const data = reactive({});
	// 		return { ...toRefs(data), text, getage };
	// 	},
	// 	data() {
	// 		return {
	// 			text: '我是vue3',
	// 		};
	// 	},
	};
</script>

<style lang="scss" scoped></style>
