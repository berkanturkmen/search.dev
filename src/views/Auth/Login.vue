<template>
	<Navbar />

	<section class="py-16 md:flex md:h-screen md:items-center">
		<div class="mx-4 md:container md:mx-auto">
			<div class="md:mx-auto md:w-4/12">
				<div class="mb-4 text-[2rem] font-bold">Login with Email</div>
				<form>
					<div class="mb-4">
						<label>Email</label>
						<Input type="email" placeholder="Email" />
					</div>
					<div class="mb-4">
						<label>Password</label>
						<Input type="password" placeholder="Password" />
					</div>
					<div class="mb-4">
						<RouterLink :to="{ name: 'Auth.Forgot' }" class="underline">Forgot Password</RouterLink>
					</div>
					<Button type="button" class="w-full">Login</Button>
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
