<template>
	<div class="big">
		<div class="top">
			<h1>iHRM后台登录系统</h1>
			<div class="inp">
				<el-form
					ref="ruleFormRef"
					:model="ruleForm"
					:rules="rules"
					label-width="120px"
					class="demo-ruleForm"
					:size="formSize"
					status-icon
				>
					<el-form-item label="姓名" prop="name">
						<el-input v-model="ruleForm.name" />
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input v-model="ruleForm.password" show-password />
					</el-form-item>
					<el-form-item>
						<el-button
							class="log"
							type="primary"
							@click="submitForm(ruleFormRef)"
						>
							登录
						</el-button>
					</el-form-item>
				</el-form>
			</div>
			<!-- <div class="log" @click="goto">登录</div> -->
			<div class="zc">还没有账号？立即注册</div>
		</div>
	</div>
</template>

<script>
	import { ref, reactive, toRefs } from 'vue';
	import { Login } from '@/untils/logine.ts';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router'
	export default {
		setup(props, ctx) {
			const ruleForm = reactive({
				name: '',
				password: '',
				count: '',
			});

			const rules = reactive({
				name: [
					{ required: true, message: '不能为空', trigger: 'blur' },
					{
						min: 3,
						max: 20,
						message: 'Length should be 3 to 5',
						trigger: 'blur',
					},
				],
				password: [
					{ required: true, message: '不能为空', trigger: 'blur' },
					{
						min: 3,
						max: 6,
						message: 'Length should be 3 to 5',
						trigger: 'blur',
					},
				],
			});
			const router = useRouter()
			const submitForm = () => {
                 Login(ruleForm).then((res) => {
                      console.log(res)
                     if (res.status == 200) {
                    localStorage.setItem('token', res.data.data) // 存储token
                    router.replace('/Home') // 跳转页面
                  }
                })
            }
			return {
				ruleForm,
				rules,
				submitForm,
				router
			};
		},
	};
</script>

<style lang="scss">
	.big {
		width: 100vw;
		height: 100vh;
		background-image: url('http://ihrm-java.itheima.net/static/img/login.c75bab6.jpg');
		background-size: 100% 100%;
		overflow: hidden;
	}
	.top {
		width: 500px;
		height: 400px;
		// background: #fc011a;
		margin: 150px auto;
	}
	.top h1 {
		font-size: 28px;
		height: 30px;
		line-height: 30px;
		color: #fff;
		font-weight: normal;
	}
	.inp {
		width: 400px;
		height: 80px;
		margin: 25px 0;
	}
	.log {
		width: 300px;
		height: 40px;
		color: #fff;
		line-height: 40px;
		text-align: center;
		margin: 10px auto;
		background-color: #407ffe;
	}
	.zc {
		width: 240px;
		height: 20px;
		color: #fff;
		font-size: 12px;
		margin: 80px auto;
	}
</style>
