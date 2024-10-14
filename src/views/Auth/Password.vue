<template>
	<Navbar />

	<section class="py-16 md:flex md:h-screen md:items-center">
		<div class="mx-4 md:container md:mx-auto">
			<div class="md:mx-auto md:w-4/12">
				<div class="mb-4 text-[2rem] font-bold">Update Password</div>
				<form>
					<div class="mb-4">
						<label>Current Password</label>
						<Input type="password" placeholder="Current Password" />
					</div>
					<div class="mb-4">
						<label>New Password</label>
						<Input type="password" placeholder="New Password" />
					</div>
					<Button type="button" class="w-full">Update</Button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import { RouterLink } from "vue-router";
	import Navbar from "@/components/Auth/Navbar.vue";
	import Input from "@/components/Input.vue";
	import Button from "@/components/Button.vue";

	export default {
		components: { RouterLink, Navbar, Input, Button },
	}
</script>

<style></style>

<style></style>
