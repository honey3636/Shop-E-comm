<template>
    <div>
        <NavBar2 />
    </div>

    <!-- slug detail section -->
    <div class="xl:container m-2 sm:mx-auto ">
        <div class="grid sm:grid-cols-2  md:mx-2 mt-[70px]">
            <!-- Images Section -->
            <div class=" ">
                <div class="border-b-2 pb-1">
                    <img ref="mainImg" class="sm:h-80 mx-auto" :src="mainImage" alt="card image" preview>
                </div>

                <!-- other images -->
                <div class="relative flex items-center  ">
                    <button @click="slideLeft" class="w-10 h-20 bg-gray-100 hover:bg-gray-200 rounded  ">
                        <font-awesome-icon :icon="['fas', 'less-than']" />
                    </button>
                    <div id="slider"
                        class="w-full h-full overflow-x-auto scroll whitespace-nowrap scrollbar-hide border-none ">
                        <img v-for="item in product.images" :key="item"
                            class="w-28 inline-block p-2 cursor-pointer hover:scale-105 duration-300 ease-in-out hover:border-2 m-1"
                            @mouseover="mainImage = item.image_url" :src="item.image_url" alt="/">

                    </div>
                    <button @click="slideRight" class="w-10 h-20 bg-gray-100 hover:bg-gray-200 rounded  ">
                        <font-awesome-icon :icon="['fas', 'greater-than']" />
                    </button>
                </div>


            </div>
            <!-- Description Section -->
            <div class="des-section p-2 mx-2 flex flex-col justify-center gap-5">
                <div class="title border-b-2 p-1  sm:text-2xl">
                    {{ product.title }}
                </div>
                <div class="flex text-3xl py-3">
                    <pre class="text-red-500 ">Rs. </pre>
                    <p class="text-red-500">{{ product.sales_price1 }}</p>
                </div>
                <!-- Quantity Section-->
                <div class=" flex items-center">
                    <p class="text-gray-400">Quantity</p>
                    <div class="flex gap-2 ml-2 items-center border-2 rounded-md">
                        <button @click="decQuantity" class="w-6 bg-gray-200 hover:bg-gray-300 text-lg ">-</button>
                        <p class="w-10 text-center">{{ quantity }}</p>
                        <button @click="incQuantity" class="w-6 bg-gray-200 hover:bg-gray-300 text-lg ">+</button>
                    </div>
                </div>
                <div class="grid grid-cols-2 mx-2 gap-2 my-2 text-xl ">
                    <button class="bg-blue-400 hover:bg-blue-300 py-2">Buy Now</button>
                    <button class="bg-yellow-400 hover:bg-yellow-300">Add to Cart</button>
                </div>
            </div>

        </div>

        <!-- More info -->
        <div class="grid  sm:grid-cols-2  md:mx-2  bg-gray-100 p-4 sm:p-8 rounded-lg">
            <div class="flex flex-col justify-center items-center mx-auto">
                <p class="my-2 font-bold text-2xl text-center">Description</p>
                <p class="mx-2">{{ product.description }}</p>
            </div>

            <!-- table -->
            <div class=" flex justify-center mt-5 md:mt-0 ">
                <div class="">
                    <table class="table-auto border-collapse border box-border">
                        <caption class="caption-top my-2 font-bold text-2xl">
                            More info about product
                        </caption>
                        <thead class="text-start">
                            <tr>
                                <th class="border px-1">Items</th>
                                <th class="border px-1">Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, key) in prop" :key="key">
                                <td class="border px-1">{{ key }}</td>
                                <td class="border px-1">{{ value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>


    <div class="xl:container m-2 sm:mx-auto ">

    </div>


</template>

<!-- script section -->
<script>
import NavBar2 from '@/components/NavBar2.vue';
import axios from 'axios';
export default {
    name: "SlugPage",
    components: {
        NavBar2,
    },

    data() {
        return {
            product: [],
            quantity: 1,
            mainImage: '',
            prop: [],

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
        slideLeft() {
            const slider = document.querySelector("#slider");
            slider.scrollLeft = slider.scrollLeft - 400
        },
        slideRight() {
            const slider = document.querySelector("#slider");
            slider.scrollLeft = slider.scrollLeft + 400
        },
        handleScroll() {
            if (window.scrollY > 1) {
                this.$refs.navbar.style.color = "black";
                this.$refs.navbar.style.backgroundColor = "white";
            }
        }

    },
    async mounted() {
        const result = await axios.get("https://mobilo.shop/api/product/" + this.$route.params.slug, {
            headers: {
                'Authorization': 'Bearer 3|L0uQdpBThZFQ5McRKbvKjCA13kmzvV0BLY5Nfxvz'
            }
        })
        this.product = result.data.data;
        this.prop = result.data.data.properties;
        console.log(result.data.data);
        // for showing the product we click
        if (this.product.images) {
            this.mainImage = this.product.images[0].image_url;
        }



    }
}
</script>

<!-- style section -->
<style>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>