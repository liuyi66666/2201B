<template>
	<div class="login">
		<div class="center">
			<h1>iHRM 后台登陆系统</h1>
			<!-- 登录表单 -->
			<el-form
				ref="ruleFormRef"
				:model="ruleForm"
				:rules="rules"
				label-width="40px"
				class="demo-ruleForm"
				status-icon
				v-if="flag == true"
			>
				<el-form-item prop="username">
					<el-input
						:prefix-icon="ElementPlusIconsVue.UserFilled"
						v-model="ruleForm.mobile"
						style="height: 50px; opacity: 0.5"
					/>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						:prefix-icon="ElementPlusIconsVue.Lock"
						v-model="ruleForm.password"
						style="height: 50px; opacity: 0.5"
						show-password
					/>
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						class="click-login"
						@click="submitForm(ruleFormRef)"
					>
						登录
					</el-button>
				</el-form-item>
			</el-form>
			<!-- 注册表单 -->
			<el-form
				ref="ruleFormRef"
				:model="ruleForm1"
				:rules="rules1"
				label-width="40px"
				class="demo-ruleForm"
				status-icon
				v-else
			>
				<el-form-item prop="mobile">
					<el-input
						placeholder="11位手机号"
						style="height: 50px; opacity: 0.5"
						v-model="ruleForm1.mobile"
					/>
				</el-form-item>
				<el-form-item prop="code">
					<el-input
						placeholder="输入验证码"
						style="height: 50px; opacity: 0.5"
						v-model="ruleForm1.code"
					>
						<template #append>
							<button
								style="
									width: 100px;
									height: 40px;
									border-radius: 15px;
									background: #fff;
									border: 0;
								"
							>
								获取验证码
							</button>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						placeholder="6-16位密码"
						style="height: 50px; opacity: 0.5"
						v-model="ruleForm1.password"
					/>
				</el-form-item>
				<el-form-item prop="password1">
					<el-input
						placeholder="确定密码"
						style="height: 50px; opacity: 0.5"
						v-model="ruleForm1.password1"
					/>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="click-login">下一步</el-button>
				</el-form-item>
			</el-form>
			<h4
				style="text-align: center; color: #ffffff"
				@click="register"
				v-if="flag == true"
			>
				还没有账号？立即注册
			</h4>
			<h4 style="text-align: center; color: #ffffff" @click="register" v-else>
				使用已有帐户登录
			</h4>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, reactive, toRefs } from 'vue';
	import { useRouter, useRoute } from 'vue-router';
	/**引入封装好的登录校验 */
	import * as TS from '../untils/defind/Login';
	/**引入封装的cookie */
	import { setToken } from '@/untils/api';
	/**element-plus图标库 */
	import * as ElementPlusIconsVue from '@element-plus/icons-vue';
	/**引入封装得状态码 */
	import { STATUS } from '@/untils/status';
	/**引入element-plus 弹出框提示 */
	import {
		FormInstance,
		FormRules,
		ElMessage,
		ElNotification,
	} from 'element-plus';
	/**引入封装的登录接口 */
	import { LoginPost } from '@/untils/httprequest';
	const router = useRouter();

	/**登录按钮的校验 */
	const ruleFormRef = ref<FormInstance>();

	/**账号密码双向绑定 */
	const ruleForm = reactive<TS.LoginForm>({
		mobile: '13800000002',
		password: '123456',
	});

	/**注册双向绑定 */
	const ruleForm1 = reactive<TS.LoginForm1>({
		mobile: '',
		code: '',
		password: '',
		password1: '',
	});

	/**账号密码的校验 */
	const rules = reactive<FormRules>({
		mobile: [
			{
				required: true,
				message: '用户名不能为空',
				trigger: 'blur',
			},
		],
		password: [
			{
				required: true,
				message: '密码不能为空',
				trigger: 'blur',
			},
		],
	});

	/**账号密码的校验 */
	const rules1 = reactive<FormRules>({
		mobile: [
			{
				required: true,
				message: '请输入正确的手机号',
				trigger: 'blur',
			},
			{ max: 11, message: 'Length should be 3 to 5', trigger: 'blur' },
		],
		code: [
			{
				required: true,
				message: '验证码不能为空',
				trigger: 'blur',
			},
		],
		password: [
			{
				required: true,
				message: '请至少输入 6 个字符。请不要使用容易被猜到的密码',
				trigger: 'blur',
			},
			{
				min: 6,
				max: 16,
				message: '请至少输入 6 个字符。请不要使用容易被猜到的密码',
				trigger: 'blur',
			},
		],
		password1: [
			{
				required: true,
				message: '两次输入的密码不一致',
				trigger: 'blur',
			},
			{ min: 6, max: 16, message: '两次输入的密码不一致', trigger: 'blur' },
		],
	});

	/**登录按钮的事件 */
	const submitForm = async (formEl: FormInstance | undefined) => {
		if (!formEl) return;
		await formEl.validate((valid, fields) => {
			if (valid) {
				if (ruleForm.mobile == '13800000002' && ruleForm.password == '123456') {
					LoginPost(ruleForm).then((res) => {
						// console.log(res)
						if (res.status == STATUS.SUCCESS) {
							setToken(res.data.data);
							router.push('/Homepage');
							ElNotification({
								title: '登录成功',
								message: '登录成功',
								type: 'success',
							});
						} else {
							ElMessage.error('请求失败');
						}
					});
				} else {
					ElMessage.error('用户名或密码错误');
				}
			}
		});
	};

	/**绑定是登录还是注册 */
	let flag = ref<boolean>(true);
	/**注册事件 */
	const register = () => {
		flag.value = !flag.value;
	};
</script>

<style lang="scss" scoped>
	// 全局
	.login {
		width: 100vw;
		height: 100vh;
		background: url(../assets/背景图.jpg);
		background-size: 100% 100%;
		/**中间内容 */
		.center {
			width: 500px;
			height: 500px;
			// background: #fff;
			position: absolute;
			// opacity: 0.5;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			// box-shadow: 0 0 10px #ddd;
			border-radius: 5%;

			h1 {
				color: #fff;
				font-size: 45px;
				text-align: center;
				margin-top: 10px;
			}
			.click-login {
				width: 460px;
				height: 50px;
			}
		}
	}

	.demo-ruleForm {
		width: 460px;
		margin-top: 20px;
	}
</style>

function token(token: any, data: any) { throw new Error('Function not
implemented.') }
