<template>
	<router-link :to="to" class="link" :class="{ active: isActive }">
		<i class="icon" :class="icon"></i>
		<transition name="fade">
			<span v-if="collapsed == false">
				<slot />
			</span>
		</transition>
	</router-link>
</template>

<script>
export default {
	props: ["to", "icon"],
	computed: {
		isActive() {
			console.log(" route actuel " + this.$route.name + this.to);
			return this.$route.name == this.to;
		},
		collapsed() {
			/* console.log(this.$store.getters.collapsed); */
			return this.$store.getters.collapsed;
		},
	},
};
</script>

<style>
.link {
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
	font-weight: 400;
	user-select: none;

	margin: 0.1em 0;
	padding: 0.4em;
	border-radius: 0.25em;
	height: 1.5em;

	color: white;
	text-decoration: none;
}

.link:hover {
	background-color: var(--sidebar-item-hover);
}
.link.active {
	background-color: var(--sidebar-item-active);
}

.link .icon {
	flex-shrink: 0;
	width: 25px;
	margin-right: 10px;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
