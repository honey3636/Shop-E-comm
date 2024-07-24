<template>
    <NavBar2 />

    <div class="2xl:container mx-auto  ">
        <h1 class="text-green-900 mt-[70px] text-3xl ">Profile</h1>
    </div>
    <div>Name:{{ user }}</div>
</template>

<!-- script section -->
<script>
import NavBar2 from "@/components/NavBar2.vue";

export default {
    name: "ProfilePage",
    components: {
        NavBar2,
    },
    data() {
        return {
            user: [],
        }
    },
    methods: {
        getUser() {
            let person = localStorage.getItem("user-info");
            // this.user = JSON.parse(person);
            this.user = person;
        }
    },
    mounted() {
        this.getUser();
    },
}
</script>

<!-- style section -->
<style></style>