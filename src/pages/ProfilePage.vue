<template>
    <NavBar2 />

    <div class="2xl:container px-0 mt-[65px] ">
        <div class="grid grid-cols-12 gap-0 m-0 p-0 h-full ">
            <!-- g-col-xxl-2 g-col-xl-2 g-col-lg-2 g-col-md-3 g-col-sm-4 g-col-xs-2 g-col-2 p-0 bg-light bg-gradient border-end start-0 -->
            <div
                class="lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-2">
                <SideBar/>
            </div>
            <!-- g-col-xxl-10 g-col-xl-10 g-col-lg-10 g-col-md-9 g-col-sm-8 g-col-xs-10 g-col-10 px-0 h-100 -->
            <div class="lg:col-span-10 md:col-span-9 sm:col-span-8 col-span-10 px-0 h-full">
                
                <!-- <div>
                    Profile
                </div> -->
                <!-- <bread-crumbs /> -->
                <div class="p-3">
                    <router-view />
                    <!-- <div>Name:{{ user }}</div> -->
                </div>
            </div>
        </div>
    </div>
    



</template>

<!-- script section -->
<script>
import NavBar2 from "@/components/NavBar2.vue";
import SideBar from "@/components/SideBar.vue";
// import Swal from "sweetalert2";
export default {
    name: "ProfilePage",
    components: {
        NavBar2,
        SideBar,
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
        },

    },
    mounted() {
        this.getUser();
    },
}
</script>

<!-- style section -->
<style></style>