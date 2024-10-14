<template>
	<nav class="border-b border-neutral-900/10">
		<div class="container mx-auto">
			<div class="flex flex-col md:flex-row">
				<div class="flex justify-between">
					<RouterLink :to="{ name: 'Index' }" class="p-4 md:shrink-0 font-mono">Laravel</RouterLink>
					<a href="#" @click.prevent="ToggleNavbar = !ToggleNavbar" class="md:hidden p-4">Menu</a>
				</div>
				<div :class="{ 'flex': ToggleNavbar || Desktop, 'hidden': !ToggleNavbar && !Desktop }" class="flex-col md:flex-row md:justify-between w-full">
					<div class="flex flex-col md:flex-row">
						<RouterLink :to="{ name: 'Explore' }" class="block p-4">Explore</RouterLink>
					</div>
					<div class="flex flex-col md:flex-row">
						<RouterLink :to="{ name: 'Search' }" class="block p-4">Search</RouterLink>
						<RouterLink :to="{ name: 'Auth.Profile' }" class="block p-4">Profile</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	import { RouterLink } from "vue-router";

	export default {
		components: { RouterLink },
		data() {
			return {
				ToggleNavbar: false,
				Desktop: false,
			};
		},
		methods: {
			windowWith() {
				this.Desktop = window.innerWidth >= 768;
			},
		},
		mounted() {
			this.windowWith();

			window.addEventListener('resize', this.windowWith());
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.windowWith());
		},
	}
</script>

<style></style>
