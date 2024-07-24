<template>
    <NavBar2 />
    <!-- <h2 class="mt-[70px]">contact us</h2> -->
    <div class="2xl:container mx-auto mt-[70px] ">
        <div class="grid sm:grid-cols-4 lg:grid-cols-6  p-3 ">

            <!-- message Section -->
            <div class="sm:col-span-2 lg:col-start-2 rounded-lg bg-yellow-300">

                <div class=" flex flex-col h-full  justify-center gap-4 p-5">
                    <h3 class="text-5xl font-bold">Contact Us</h3>
                    <input type="email" class="w-full border shadow-lg  rounded  p-2" placeholder="email address">
                    <input type="password" class="w-full border shadow-lg  rounded  p-2 " placeholder="message">
                    <div>
                        <button
                            class=" bg-yellow-500 w-28 p-3 rounded-full mb-10 mx-auto hover:bg-yellow-600 font-bold">Submit</button>
                    </div>
                </div>

            </div>

            <!-- image Section -->
            <div class="sm:col-span-2 ">
                <img class="h-[440px] mx-auto " src="../assets/contactUs.jpg" alt="/">
            </div>

        </div>
       
        <FounderCom/>
        <FooterCom/>
    </div>

</template>

<!-- script section -->
<script>
import NavBar2 from "@/components/NavBar2.vue";
import FooterCom from "@/components/FooterCom.vue";
import FounderCom from "@/components/FounderCom.vue";
export default {
    name: "HomePage",
    components: {
        NavBar2,
        FooterCom,
        FounderCom,
        
    }

}
</script>

<!-- style section -->
<style></style>