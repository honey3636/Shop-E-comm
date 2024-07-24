<template>
    <NavBar2 />
    <h1 class="text-green-600 mt-[70px]">shops Page</h1>
    <div @mouseover="showList" @mouseleave="hideList" class="absolute cursor-pointer ml-4">
        <div>hover me!</div>
        <span ref="list" class="p-2 hidden  relative z-30 ">
            <ul class="bg-gray-200 w-32 text-center font-bold py-3 rounded">
                <li class="hover:bg-gray-300">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="hover:bg-gray-300">setting</li>
                <li class="hover:bg-gray-300">other</li>

            </ul>
        </span>
    </div>
</template>

<!-- script section -->
<script>
import NavBar2 from "@/components/NavBar2.vue"
export default {
    name: "ShopsPage",
    components: {
        NavBar2,

    },
    methods: {
        showList() {
            this.$refs.list.classList.remove("hidden");
        },
        hideList() {
            this.$refs.list.classList.add("hidden");
        }

    },
}
</script>

<!-- style section -->
<style></style>