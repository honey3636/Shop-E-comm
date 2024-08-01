<template>
    <NavBar2 />

    <div class="2xl:container mx-auto  ">
        <h1 class="text-green-900 mt-[70px] text-3xl ">Profile</h1>
    </div>
    <div>Name:{{ user }}</div>

    <button @click="handleAlertClick" class="bg-yellow-200 p-2">Alert dialog</button>
    <button @click="threeBtnDia" class="bg-yellow-200 p-2">Alert dialog</button>

</template>

<!-- script section -->
<script>
import NavBar2 from "@/components/NavBar2.vue";
import Swal from "sweetalert2";
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
        },
        handleAlertClick() {
            Swal.fire("You are wellcome");
        },
        threeBtnDia() {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire("Saved!", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        }
    },
    mounted() {
        this.getUser();
    },
}
</script>

<!-- style section -->
<style></style>