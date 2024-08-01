<template>
    <!-- NavBar -->

    <NavBar2 />





    <!-- Hero Section -->



    <div class="bg-gray-500  relative ">
        <div
            class="2xl:container mx-auto h-80 sm:h-[440px] w-full bg-gradient-to-r from-gray-900 via-gray-700 to-transparent relative flex items-center">

            <!-- filter section -->
            <!-- <div class="bg-white absolute z-30  w-full top-[70px] p-2 cursor-pointor"> -->

            <!-- first filter -->
            <!-- <div @mouseover="showList" @mouseleave="hideList" class="relative z-30 top-0 cursor-pointer ml-4">
                    <div>Select Order</div>
                    <span ref="list" class="p-2 hidden  absolute z-30 ">
                        <ul class="bg-gray-200 w-auto px-2 text-center font-bold py-3 rounded">
                            <li class="hover:bg-gray-300" value="lowtohigh">Low to high(price)</li>
                            <li class="hover:bg-gray-300" value="hightolow">high to low(price)</li>

                        </ul>
                    </span> -->

            <!-- second filter -->

            <!-- </div>
            </div> -->

            <img src="@/assets/heroImg.jpg" alt="/" class="h-full w-full object-cover absolute z-20 mix-blend-overlay">
            <div class="inline-block p-5 ">
                <div class="  md:ml-32 absolute z-30 border-white text-white">
                    <h3 class="text-2xl md:text-5xl mb-2 ">This is the best plateform <br> for global trade</h3>
                    <SearchCom />
                </div>
            </div>
        </div>
    </div>

    <!-- Other Hero Section -->
    <div class="bg-orange-100">
        <div class="2xl:container mx-auto  ">

            <div class="grid  sm:grid-cols-3 md:grid-cols-4   bg-orange-100 p-8 gap-5">
                <div class="backdrop-blur-xl	">
                    <div class="rounded-xl p-7 h-60 sm:h-72 bg-orange-200 hover:bg-orange-300 cursor-pointer">
                        <div>

                        </div>
                        <h3 class="text-2xl mb-4 font-bold">Millions of business offerings</h3>
                        <p>Explore products and suppliers for your business from millions of offerings worldwide.</p>
                    </div>
                </div>
                <div class="backdrop-blur-xl	">
                    <div class="rounded-xl p-7 h-60 sm:h-72 bg-orange-200 hover:bg-orange-300 cursor-pointer">
                        <div>

                        </div>
                        <h3 class="text-2xl mb-4 font-bold">Millions of business offerings</h3>
                        <p class="">Explore products and suppliers for your business from millions of offerings
                            worldwide.</p>
                    </div>
                </div>
                <div class="backdrop-blur-xl	">
                    <div class="rounded-xl p-7 h-60 sm:h-72 bg-orange-200 hover:bg-orange-300 cursor-pointer">
                        <div>

                        </div>
                        <h3 class="text-2xl mb-4 font-bold">Millions of business offerings</h3>
                        <p>Explore products and suppliers for your business from millions of offerings worldwide.</p>
                    </div>
                </div>
                <div class="backdrop-blur-xl	">
                    <div class="rounded-xl p-7 h-60 sm:h-72 bg-orange-200 hover:bg-orange-300 cursor-pointer">
                        <div>

                        </div>
                        <h3 class="text-2xl mb-4 font-bold">Millions of business offerings</h3>
                        <p>Explore products and suppliers for your business from millions of offerings worldwide.</p>
                    </div>
                </div>

            </div>


        </div>
    </div>





    <!-- card section -->
    <div class="2xl:container mx-auto my-4">
        <div class="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mx-3">

            <!-- cards -->
            <div class="card border relative shadow-lg hover:scale-105 duration-300 ease-in-out cursor-pointer pt-1"
                v-for="item in displayProduct" :key="item.id" @click="slugPage(item.slug)">
                <div>
                    <img v-if="localImageExists(item.id)" class="h-40 w-full object-cover"
                        :src="getLocalImagePath(item.id)" alt="cart img">
                    <img v-else :src="item.image_url" class="h-40 w-full object-cover " alt="card image">
                </div>
                <div class="p-3 ">
                    <p class="my-2 text-sm  truncate-text">{{ item.title }}</p>
                    <h3 class="text-xl ">MM Interior</h3>
                    <h4 class="mb-3">{{ item.sales_price1 }}</h4>

                    <a class="text-blue-500 hover:underline cursor-pointer absolute  bottom-0 my-1" href="#">Shop
                        Now+</a>
                </div>
            </div>

        </div>

    </div>

    <div class="2xl:container mx-auto my-4 flex justify-center">
        <button v-if="displayProduct.length < products.length" @click="loadMore"
            class="bg-yellow-300 p-2 rounded-lg hover:bg-yellow-400">Load more</button>
    </div>


    <FounderCom />

    <FooterCom />
</template>


<!-- script section -->
<script>
import NavBar2 from "@/components/NavBar2.vue";
import axios from "axios";
import FooterCom from "@/components/FooterCom.vue";
import SearchCom from "@/components/SearchCom.vue";
import FounderCom from "@/components/FounderCom.vue";
import { mapState } from "vuex";

export default {
    name: "HomePage",
    components: {
        NavBar2,
        FooterCom,
        SearchCom,
        FounderCom,
    },
    data() {
        return {
            products: [],
            displayCount: 12,

        }
    },
    mounted() {
        this.fetchingProduct();

    },
    computed: {
        ...mapState({
            selectedFilter: (state) => state.selectedFilter,
        }),

        sortedProducts() {
            if (this.selectedFilter === 'lowtohigh') {
                return [...this.products].sort((a, b) => a.sales_price1 - b.sales_price1);
            } else if (this.selectedFilter === 'hightolow') {
                return [...this.products].sort((a, b) => b.sales_price1 - a.sales_price1);
            } else {
                return this.products;
            }
        },

        displayProduct() {
            return this.sortedProducts.slice(0, this.displayCount)
        },


    },

    methods: {
        async fetchingProduct() {

            try {
                const response = await axios.get("https://mobilo.shop/api/products", {
                    headers: {
                        'Authorization': 'Bearer 3|L0uQdpBThZFQ5McRKbvKjCA13kmzvV0BLY5Nfxvz'
                    }
                });
                this.products = response.data.data;
                console.log(response.data.data)
            }
            catch (error) {
                console.log("error while fetching product" + error);
            }


        },
        getLocalImagePath(id) {
            return require(`@/assets/proImages/${id}.jpg`);
        },
        localImageExists(id) {
            try {
                this.getLocalImagePath(id);
                return true;
            } catch (error) {
                return false;
            }
        },
        slugPage(slug) {
            this.$router.push({ path: `/slug/${slug}` });
        },

        loadMore() {
            this.displayCount += 12;
        },

        // filter on hover
        showList() {
            this.$refs.list.classList.remove("hidden");
        },
        hideList() {
            this.$refs.list.classList.add("hidden");
        },
       


    }
};
</script>

<!-- style section -->
<style>
.truncate-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>