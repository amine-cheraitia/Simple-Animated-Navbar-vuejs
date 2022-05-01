<template>
	<div class="sidebar" :style="{ width: sidebarWith }">
		<h1>
			<span v-if="collapsed">
				<div>V</div>
				<div>S</div>
			</span>
			<span v-else>Vue Sidebar</span>
		</h1>
		<sidebarlink to="home" icon="fas fa-home"> home </sidebarlink>
		<sidebarlink to="about" icon="fas fa-columns"> Dashboard </sidebarlink>
		<sidebarlink to="charts" icon="fas fa-chart-bar"> Analytics </sidebarlink>
		<sidebarlink to="friends" icon="fas fa-users"> Friends </sidebarlink>
		<sidebarlink to="images" icon="fas fa-image"> Images </sidebarlink>
		<span
			class="collapse-icon"
			:class="{ 'rotate-180': collapsed }"
			@click="toggleSidebar"
		>
			<i class="fa fa-angle-double-left" aria-hidden="true"></i>
		</span>
	</div>
</template>

<script>
import sidebarlink from "./SidebarLink.vue";
export default {
	name: "name",
	components: { sidebarlink },
	methods: {
		toggleSidebar() {
			this.$store.dispatch("toggleSidebar");
		},
	},
	computed: {
		sidebarWith() {
			/* console.log(this.$store.getters.Sidebarwiths); */
			return this.$store.getters.Sidebarwiths;
		},
		collapsed() {
			/* console.log(this.$store.getters.collapsed); */
			return this.$store.getters.collapsed;
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
.collapse-icon {
	position: absolute;
	bottom: 0;
	padding: 0.75em;
	color: rgba(255, 255, 255, 0.7);

	transition: 0.2s linear;
}

.rotate-180 {
	transform: rotate(180deg);
	transition: 0.2s linear;
}
</style>
