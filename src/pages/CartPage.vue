<template>
    <div class="border-black border border-b-2">
        <NavBar2 />
    </div>

    <div class="2xl:container mx-auto mt-[70px]">
        <div class="flex justify-center">
            <!-- step component -->
            <ul class="steps ">
                <li @click="currentStep = 1" :class="{ 'step-success': currentStep >= 1 }"
                    class="step hover:cursor-pointer hover:step-info">Cart</li>
                <li @click="currentStep = 2" :class="{ 'step-success': currentStep >= 2 }"
                    class="step hover:cursor-pointer  hover:step-info">Address</li>
                <li @click="currentStep = 3" :class="{ 'step-success': currentStep >= 3 }"
                    class="step hover:cursor-pointer hover:step-info">Payment</li>
                <!-- <li class="step">Receive Product</li> -->
            </ul>
        </div>
        <div class="px-3 pb-3 inner-layout">
            <ItemsCart v-if="currentStep == 1" @next-step="nextStep" />
            <AddressCart v-if="currentStep >= 2" @next-step="nextStep" />
            <!-- <PaymentCart v-if="currentStep == 3" /> -->

        </div>
    </div>


</template>

<!-- script section -->
<script>
import NavBar2 from "@/components/NavBar2.vue"
import AddressCart from "@/views/carts/AddressCart.vue";
import ItemsCart from "@/views/carts/ItemsCart.vue";
// import PaymentCart from "@/views/carts/PaymentCart.vue";

export default {
    name: "CartPage",
    components: {
        NavBar2,
        ItemsCart,
        AddressCart,
        // PaymentCart,
    },
    data() {
        return {
            currentStep: 1
        };
    },
    methods: {
        nextStep() {
            this.currentStep++;
        },
        

    },
   


}
</script>

<!-- style section -->
<style></style>