<template>
	<sidebar></sidebar>
	<div :style="{ 'margin-left': sidebarWith }">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="about">About</router-link>
		</nav>

		<router-view />
	</div>
</template>
<script>
import sidebar from "./components/sidebar/Sidebar.vue";
export default {
	components: { sidebar },
	computed: {
		sidebarWith() {
			/* console.log(this.$store.getters.Sidebarwiths); */
			return this.$store.getters.Sidebarwiths;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
