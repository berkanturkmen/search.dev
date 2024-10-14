<template>
	<Navbar />

	<section class="py-16">
		<div class="mx-4 md:container md:mx-auto">
			<div class="md:mx-auto md:w-6/12">
				<div class="mb-4">
					<div class="text-[2rem] font-bold">Quick and Filtered Article Search</div>
					<div class="text-neutral-900/50">Searching for articles in "The Guardian" and "The New York Times" allows you to narrow down results using filters such as category and date. This way, you can find content that matches your interests and quickly access the information you're looking for.</div>
				</div>
				<div class="mb-4 flex flex-col gap-4 md:flex-row">
					<Input type="text" placeholder="Search" />
					<Button type="button" class="md:w-3/12">Search</Button>
				</div>
				<a href="#" @click.prevent="ToggleFilters = !ToggleFilters" class="mb-4 block underline">Toggle Filters</a>
				<div v-if="ToggleFilters" class="mb-4 flex flex-col gap-4 md:flex-row">
					<div class="w-full">
						<label>Start</label>
						<Input type="date" />
					</div>
					<div class="w-full">
						<label>End</label>
						<Input type="date" />
					</div>
					<div class="w-full">
						<label>Category</label>
						<Select>
							<option value="">Choose</option>
							<option value="Finance">Finance</option>
							<option value="Economy">Economy</option>
							<option value="Politics">Politics</option>
							<option value="Business">Business</option>
							<option value="Artificial Intelligence">Artificial Intelligence</option>
						</Select>
					</div>
				</div>
				<div class="mb-4 text-[2rem] font-bold">Results:</div>
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
		data() {
			return {
				ToggleFilters: false,
			};
		},
	}
</script>

<style></style>

<style></style>
