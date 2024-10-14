<template>
	<Navbar />

	<section class="py-16">
		<div class="mx-4 md:container md:mx-auto">
			<div class="md:mx-auto md:w-6/12">
				<div class="mb-4">
					<div class="text-[2rem] font-bold">Explore</div>
					<div class="text-neutral-900/50">Expand your interests with curated content selected based on the articles you've explored.</div>
				</div>
				<a href="#" class="mb-4 block rounded border p-4">
					<div class="mb-4 font-medium">Lorem Ipsum</div>
					<div class="mb-4">Lorem Ipsum</div>
					<div class="flex flex-col justify-between md:flex-row">
						<div class="text-neutral-900/50">Published on 14/10/2024</div>
						<div class="text-neutral-900/50">Business / The Guardian</div>
					</div>
				</a>
				<a href="#" class="mb-4 block rounded border p-4">
					<div class="mb-4 font-medium">Lorem Ipsum</div>
					<div class="mb-4">Lorem Ipsum</div>
					<div class="flex flex-col justify-between md:flex-row">
						<div class="text-neutral-900/50">Published on 14/10/2024</div>
						<div class="text-neutral-900/50">Business / New York Times</div>
					</div>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
	import { RouterLink } from "vue-router";
	import Navbar from "@/components/Auth/Navbar.vue";
	import Input from "@/components/Input.vue";
	import Select from "@/components/Select.vue";
	import Button from "@/components/Button.vue";

	export default {
		components: { RouterLink, Navbar, Input, Select, Button },
	}
</script>

<style></style>

<style></style>
