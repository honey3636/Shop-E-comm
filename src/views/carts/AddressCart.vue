<template>
    <div class="2xl:container mx-auto ">

        <div class=" font-bold text-xl px-6 pb-3">
            Shipping Address
        </div>

        <div class="grid  md:grid-cols-3 px-6 gap-2">
            <div class="md:col-span-2">
                <!-- form-side -->
                <div class="form-side  border bg-white border-green-400 rounded-lg p-6">
                    <div class="grid sm:grid-cols-2 gap-4 mb-6">
                        <!-- using input class of desiy ui -->
                        <label for="name">
                            <p>First Name</p>
                            <input id="name" type="text" placeholder="First Name" class="input border border-green-400 focus:border-green-400 focus:outline-green-400
                             w-full " />
                        </label>
                        <label for="lName">
                            <p>Last Name</p>
                            <input id="lName" type="text" placeholder="Last Name"
                                class="input border border-green-400 focus:border-green-400 focus:outline-green-400 w-full " />
                        </label>

                    </div>
                    <!-- using input class of desiy ui -->
                    <label for="address" class="">
                        <p>Street Address</p>
                        <input id="address" type="text" placeholder="Street Address"
                            class="mb-6 input border border-green-400 focus:border-green-400 focus:outline-green-400 w-full" />
                    </label>

                    <div class="grid sm:grid-cols-3 gap-4 mb-6">
                        <label for="lName">
                            <p>Phone no:</p>
                            <input id="lName" type="text" placeholder="Phone no:"
                                class="input border border-green-400 focus:border-green-400 focus:outline-green-400 w-full " />
                        </label>
                        <label for="city">
                            <p>City</p>
                            <input id="City" type="text" placeholder="Type here"
                                class="input border border-green-400 focus:border-green-400 focus:outline-green-400 w-full " />
                        </label>
                        <label for="zip-code">
                            <p>Zip Code</p>
                            <input id="zip-code" type="text" placeholder="Zip Code"
                                class="input border border-green-400 focus:border-green-400 focus:outline-green-400 w-full " />
                        </label>
                    </div>
                    <div class="flex gap-3">
                        <button class="btn focus:bg-green-400 text-base">Cancel</button>
                        <button @click="scrollToPosition" class="btn bg-green-400 hover:bg-gray-100 text-base">Use This
                            Address</button>
                    </div>
                </div>

                <!-- using payment cart component -->
                <div class="mt-6">
                    <PaymentCart />
                </div>
            </div>

            <!-- items-show-->
            <div class="col-span-1 ">
                <div class="p-3 bg-white rounded-lg">
                    <p class="p-3 bg-gray-50 rounded-lg mb-3 text-center">Order Summary</p>
                    <!-- items  -->
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                            <img class="h-16 w-16 border rounded-lg object-cover" src="@/assets/blog1.jpg" alt="/">
                            <p class="ml-2">Model no: 123lb</p>
                        </div>
                        <p class="text-gray-400 text-sm ">PKR: 200.0 /piece</p>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                            <img class="h-16 w-16 border rounded-lg object-cover" src="@/assets/blog1.jpg" alt="/">
                            <p class="ml-2">Model no: 123lb</p>
                        </div>
                        <p class="text-gray-400 text-sm ">PKR: 200.0 /piece</p>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                            <img class="h-16 w-16 border rounded-lg object-cover" src="@/assets/blog1.jpg" alt="/">
                            <p class="ml-2">Model no: 123lb</p>
                        </div>
                        <p class="text-gray-400 text-sm ">PKR: 200.0 /piece</p>
                    </div>

                    <!-- place Oreder section -->
                    <hr>
                    <div class="flex flex-col gap-2 py-2">
                        <div class="flex items-center justify-between">
                            <p>Items (3):</p>
                            <p>PKR600.23</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <p>Shipping & Handling:</p>
                            <p>PKR200.0</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <p>Before Tax:</p>
                            <p>PKR800.23</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <p>Tax Collected(2%)</p>
                            <p>PKR16.00</p>
                        </div>
                    </div>

                    <hr>

                    <div class="flex  items-center justify-between py-5">
                        <P>Order Total</P>
                        <P>PKR816.23</P>
                    </div>
                    <button class="btn bg-green-400 hover:bg-gray-100 text-base " >Place Order</button>

                </div>

            </div>
        </div>
    </div>



</template>

<!-- script section -->
<script>
import PaymentCart from "@/views/carts/PaymentCart.vue";

export default {
    name: "AddressCart",
    components: {
        PaymentCart,
    },
    methods: {
        scrollToPosition() {
            this.$emit('next-step')
            window.scrollTo({
                top: 600, // Position to scroll to
                behavior: 'smooth' // Smooth scrolling
            });
        }
    },

}
</script>

<!-- style section -->
<style></style>