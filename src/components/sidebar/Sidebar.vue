<template>
	<div class="sidebar" :style="{ width: sidebarWith }">ss</div>
</template>

<script>
export default {
	name: "name",
	props: {},
	computed: {
		sidebarWith() {
			console.log(this.$store.getters.Sidebarwiths);
			return this.$store.getters.Sidebarwiths;
		},
	},
};
</script>
<style>
:root {
	--sidebar-bg-color: #2f855a;
	--sidebar-item-hover: #38a169;
	--sidebar-item-active: #276749;
}
</style>
<style scoped>
.sidebar {
	color: white;
	background-color: var(--sidebar-bg-color);

	float: left;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	bottom: 0;
	padding: 0.5em;

	transition: 0.3s ease;

	display: flex;
	flex-direction: column;
}
</style>
