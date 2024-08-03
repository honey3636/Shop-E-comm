<template>
    <div class="2xl:container mx-auto ">

        <div class=" font-bold text-xl px-6 pb-6">
            Shoping Cart
        </div>
        <div class="grid md:grid-cols-3  px-6 ">

            <!-- cart items section -->
            <div class="md:col-span-2 pr-3 ">

                <!-- select all section -->
                <div class="h-6 flex items-center">
                    <input type="checkbox" name="" id="selectAll">
                    <label for="selectAll">
                        <p class="mx-3 font-bold">Select All Items(1)</p>
                    </label>
                    <div class="flex-grow border-t border-gray-300 "></div>
                </div>

                <!-- Cart items -->
                <div class="my-3 bg-white p-2 rounded-lg">
                    <p class=" font-bold text-lg px-6 mb-3">MM Interior.Ltd</p>
                    <label for="check1">
                        <div class="grid sm:grid-cols-3 lg:grid-cols-4 items-center mb-1 gap-2 hover:cursor-pointer">
                            <div class="sm:col-span-1 flex ">
                                <input type="checkbox" name="" id="check1">
                                <img class="h-32 w-32 border rounded-lg mx-auto md:ml-3 object-cover"
                                    src="@/assets/blog1.jpg" alt="/">

                            </div>
                            <div class="sm:col-span-2 lg:col-span-3 flex items-center mx-3 sm:mx-0">
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, magni sed ducimus
                                        magnam
                                        inventore dignissimos reprehenderit maxime nesciunt
                                    </p>
                                    
                                    <p class="text-gray-400 text-sm">Min. order: 3 pieces</p>
                                </div>
                                <div @click="removeItem" class="w-20 flex justify-center hover:bg-gray-100 p-2 rounded-md">
                                    <font-awesome-icon :icon="['fas', 'trash']" />
                                </div>
                            </div>

                        </div>
                    </label>
                    <!-- second item info card -->
                    <div class="bg-gray-200 mx-auto  sm:ml-6 rounded-lg p-3 mb-2 flex items-center justify-between">
                        <div class="flex items-center">
                            <img class="h-16 w-16 border rounded-lg object-cover" src="@/assets/blog1.jpg" alt="/">
                            <div class="ml-2">
                                <p>Model no: 123lb</p>
                                <p class="text-gray-400 text-sm ">PKR: 200.0 /piece</p>

                            </div>
                        </div>
                        <!-- counter -->
                        <div class="flex gap-2  ml-2 items-center border-2  border-white rounded-md">
                            <button @click="decQuantity" class="w-6 bg-white hover:bg-gray-50 text-lg ">-</button>
                            <p class="w-10 text-center">{{ quantity }}</p>
                            <button @click="incQuantity" class="w-6 bg-white hover:bg-gray-50 text-lg ">+</button>
                        </div>
                        <p class="font-bold text-lg mx-1">PKR 8,740.0</p>

                    </div>
                    <hr>
                </div>


            </div>

            <!-- Order Summary -->
            <div class="shadow-xl rounded-xl md:ml-2 p-6 flex flex-col bg-white">
                <p class="font-bold text-lg py-4">Order Summary (0 items)</p>
                <div class="flex justify-between text-lg mb-3">
                    <p>item subtotal</p>
                    <p>0.00</p>
                </div>
                <hr>
                <div class="flex justify-between text-lg font-bold mt-4">
                    <p>Subtotal excl. tax</p>
                    <p>0.00</p>
                </div>
                <p class="text-sm text-gray-400 mb-5">(Excluding shiping fee and tax)</p>
                <button @click="$emit('next-step')" class="p-3 bg-yellow-300 rounded-full font-bold ">
                    Check Out
                </button>
            </div>


        </div>
    </div>
</template>

<!-- script section -->
<script>
import Swal from 'sweetalert2';


export default {
    name: "ItemsCart",
    data() {
        return {
            quantity: 1,
        }
    },
    methods: {
        incQuantity() {
            if (this.quantity >= 1) {
                return this.quantity++;
            }
        },
        decQuantity() {

            if (this.quantity > 1) {
                return this.quantity--;
            }
        },
        removeItem() {
            Swal.fire({
                title: "remove item!",
                text: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes !"
            }).then((result) => {
                if (result.isConfirmed) {

                    //condition code
                   

                    Swal.fire({
                        title: "item removed",
                        
                        icon: "success"
                    });
                }
        
            });
            },
    },
}
</script>

<!-- style section -->
<style></style>