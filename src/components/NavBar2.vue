<template>
    <div>
        <div class="bg-transparent text-white fixed w-full border-b-[1px] border-gray-400 z-50 top-0" ref="navbar">
            <div class="2xl:container mx-auto">
                <div class="grid grid-cols-3 md:grid-cols-7 p-3 ">

                    <!-- menu and logo -->
                    <div class="md:col-span-3 lg:col-span-2 order-2 md:order-1">
                        <div class="flex items-center justify-center md:justify-start">
                            <div>
                                <img class="h-10 w-14" src="../assets/logo.png" alt="logo" />
                            </div>
                            <div class=" hidden md:flex md:items-center mx-2 gap-3 font-bold">
                                <router-link class="cursor-pointer" to="/">Home</router-link>
                                <router-link class="cursor-pointer" to="/shop">Shops</router-link>
                                <router-link class="cursor-pointer" to="/contact">Contact Us</router-link>
                            </div>

                        </div>
                    </div>
                    <!-- hamburger and Search -->
                    <div class="md:col-span-3  order-1  md:order-2">
                        <div class="hidden md:hidden w-full " ref="searchC">
                            <SearchCom class="outline-none text-black placeholder:text-black" />
                        </div>
                        <div class="flex items-center md:hidden ">
                            <div class=" inline-block p-2 ">
                                <div class="line h-0.5 w-6 my-1 bg-black" ref="l1"></div>
                                <div class="line h-0.5 w-6 my-1 bg-black" ref="l2"></div>
                                <div class="line h-0.5 w-6 my- bg-black" ref="l3"></div>
                            </div>
                            <div>search</div>
                        </div>
                    </div>
                    <!-- Cart and Account -->
                    <div class="md:col-span-1 md:col-start-7 flex items-center justify-end order-4">
                        <div class="cursor-pointer flex items-center gap-2">
                            <!-- cart -->

                            <div>

                                <router-link to="/cart">
                                    <font-awesome-icon :icon="['fas', 'cart-shopping']" /></router-link>
                            </div>

                            <!-- Profile and setting part -->
                            <div @mouseover="showList" @mouseleave="hideList" class=" h-8 w-8 rounded-full bg-black">
                                <div class="absolute cursor-pointer top-8 right-0 text-black ">

                                    <span ref="list" class="p-2 hidden  relative z-60 ">
                                        <ul
                                            class="bg-gray-200 w-32 text-center font-bold py-3 rounded hover:scale-105 duration-300 ease-in-out">
                                            <li class="hover:bg-gray-300">
                                                <router-link to="/profile">Profile</router-link>
                                            </li>
                                            <li class="hover:bg-gray-300">
                                                <router-link to="/">Home</router-link>
                                            </li>
                                            <li @click="logOut" class="hover:bg-gray-300">Logout</li>
                                            <li class="hover:bg-gray-300">other</li>

                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- script section -->
<script>
import SearchCom from './SearchCom.vue';

export default {
    name: "NavBar2",
    components: {
        SearchCom,
    },
    methods: {
        navChange() {
            if (this.$route.fullPath != "/") {
                if (this.$refs.navbar) {



                    this.$refs.navbar.classList.remove("bg-transparent", "text-white");
                    this.$refs.navbar.classList.add("bg-white", "text-black");
                    this.$refs.searchC.classList.add("md:block");
                    this.$refs.searchC.classList.remove("md:hidden");


                    console.log(this.$refs.navbar)

                }

            }
            else {

                if (this.$refs.navbar) {
                    if (window.scrollY >= 300) {
                        this.$refs.navbar.classList.remove("bg-transparent", "text-white");
                        this.$refs.navbar.classList.add("bg-white", "text-black");
                        this.$refs.searchC.classList.remove("md:hidden");
                        this.$refs.searchC.classList.add("md:block");
                        this.$refs.navbar.classList.add("border-b-[1px]");

                        console.log(this.$refs.navbar)
                    }
                }

                if (this.$refs.navbar) {
                    if (window.scrollY < 300) {
                        this.$refs.navbar.classList.add("bg-transparent", "text-white");
                        this.$refs.navbar.classList.remove("bg-white", "text-black");
                        this.$refs.searchC.classList.remove("md:block");
                        this.$refs.searchC.classList.add("md:hidden");
                        this.$refs.navbar.classList.remove("border-b-[1px]");

                        console.log(this.$refs.navbar)
                    }
                }
            }

        },
        logOut() {
            // clearing the local storage
            localStorage.clear();
            this.$router.push('/login');
        },
        showList() {
            this.$refs.list.classList.remove("hidden");
        },
        hideList() {
            this.$refs.list.classList.add("hidden");
        },
    },
    mounted() {
        window.addEventListener("scroll", this.navChange)
        this.navChange();

        let user = localStorage.getItem("user-info");
        if (!user) {
            //redirect the SignUp page if logout 
            this.$router.push('/signup');


        }
    },
}
</script>

<!-- style section -->
<style></style>