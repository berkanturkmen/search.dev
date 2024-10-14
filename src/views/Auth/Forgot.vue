<template>
	<Navbar />

	<section class="py-16 md:flex md:h-screen md:items-center">
		<div class="mx-4 md:container md:mx-auto">
			<div class="md:mx-auto md:w-4/12">
				<div class="mb-4 rounded bg-green-900/25 p-4 text-green-900/75">Success!</div>
				<div class="mb-4 text-[2rem] font-bold">Reset Password</div>
				<form>
					<div class="mb-4">
						<label>Email</label>
						<Input type="email" placeholder="Email" />
					</div>
					<Button type="button" class="w-full">Send Password Reset Link</Button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import { RouterLink } from "vue-router";
	import Navbar from "@/components/Guest/Navbar.vue";
	import Input from "@/components/Input.vue";
	import Button from "@/components/Button.vue";

	export default {
		components: { RouterLink, Navbar, Input, Button },
	}
</script>

<style></style>
