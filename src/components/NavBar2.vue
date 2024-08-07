<template>
    <div>
        <div class="bg-transparent text-white fixed w-full border-b-[1px] border-gray-400 z-50 top-0" ref="navbar">
            <div class="2xl:container mx-auto">
                <div class="grid grid-cols-3 md:grid-cols-7 p-1 md:p-3 ">

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
                            <!-- <div @mouseover="showSmNav = true" class=" inline-block p-2">
                                <font-awesome-icon :icon="['fas', 'bars']" />
                            </div> -->

                            <!-- dasiy ui component using -->
                            <div class="drawer-content inline-block p-2">
                                <label for="my-drawer"><font-awesome-icon :icon="['fas', 'bars']" /></label>
                                <div class="drawer">
                                    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

                                    <div class="drawer-side">
                                        <label for="my-drawer" aria-label="close sidebar"
                                            class="drawer-overlay"></label>
                                        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                            <!-- Sidebar content here -->
                                            <li><router-link class="cursor-pointer p-2 " to="/">Home</router-link></li>
                                            <li><router-link class="cursor-pointer p-2" to="/contact">Contact
                                                    Us</router-link></li>
                                            <li><router-link class="cursor-pointer p-2" to="/shop">Shops</router-link>
                                            </li>
                                            <li><router-link class="cursor-pointer p-2"
                                                    to="/profile">Profile</router-link></li>
                                        </ul>
                                    </div>
                                </div>
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
                            <!-- <div @mouseover="showList" @mouseleave="hideList" class=" h-8 w-8 rounded-full bg-black">
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
                            </div> -->
                            <div class="dropdown dropdown-hover text-black">
                                <div tabindex="0" role="button" class="bg-gray-100 h-8 w-8 m-1 rounded-full"></div>
                                <ul tabindex="0"
                                    class="dropdown-content  top-10 right-0 menu bg-base-100 rounded-box z-50  p-2 shadow">
                                    <li><a class="flex">
                                            <div class="h-8 w-8 m-1 rounded-full bg-gray-100 "> </div>
                                            <div>
                                                <p>Hanzala Mughal</p>
                                                <p class="text-gray-300 text-sm">hanzalamughal@gmail.com</p>
                                            </div>
                                        </a></li>
                                    <li @click="switchAccount(selectedAccount)"
                                        v-if="selectedAccount === 'switchToSeller'"><a
                                            class="flex justify-center border border-gray-400 hover:bg-gray-600 hover:text-white mb-2">Switch
                                            to Buying</a></li>
                                    <li @click="switchAccount(selectedAccount)"
                                        v-if="selectedAccount === 'switchToBuying'"><a
                                            class="flex justify-center border border-gray-400 hover:bg-gray-600 hover:text-white mb-2">Switch
                                            to Seller</a></li>
                                    <hr>
                                    <li ><router-link to="/profile">Profile</router-link></li>
                                    <li><router-link to="/">Home</router-link></li>
                                    <li><a @click="logOut">logout</a></li>


                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- mobile device show nav list -->
            <!-- <div v-if="showSmNav" @mouseleave="showSmNav = false"
                class=" flex flex-col md:hidden w-[80vh] bg-white  font-bold py-2 text-black h-[100vh]  ">
                <p @click="showSmNav = false" class="text-sm p-3"> <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    close menu</p>
                <router-link class="cursor-pointer p-2 hover:bg-gray-300 " to="/">Home</router-link>
                <router-link class="cursor-pointer p-2  hover:bg-gray-300" to="/contact">Contact Us</router-link>
                <router-link class="cursor-pointer p-2 hover:bg-gray-300" to="/shop">Shops</router-link>
            </div> -->


        </div>
    </div>

</template>

<!-- script section -->
<script>
import SearchCom from './SearchCom.vue';
import Swal from 'sweetalert2';
import { mapMutations } from "vuex";

export default {
    name: "NavBar2",
    components: {
        SearchCom,
    },
    data() {
        return {
            selectedAccount: "switchToBuying"
        }
    },
    // watch: {
    //     getSelectedAccount(newVal) {
    //         console.log("Account changed to:", newVal);
    //         this.selectedAccount = newVal;
            
    //     }
    // },
    methods: {
        ...mapMutations({
            setSelectedAccount: "setSelectedAccount"
        }),

        switchAccount(selectedAccount) {
            if (selectedAccount === 'switchToBuying') {
                this.selectedAccount = 'switchToSeller';  // Update local state if needed
                this.setSelectedAccount(selectedAccount);
            }
            else  {
                this.selectedAccount = 'switchToBuying';  // Update local state if needed
                this.setSelectedAccount(selectedAccount);
            }
            console.log(this.selectedAccount)
        },
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

                    if (window.scrollY >= 50) {
                        this.$refs.navbar.classList.remove("bg-transparent", "text-white");
                        this.$refs.navbar.classList.add("bg-white", "text-black");
                    }
                    else {
                        this.$refs.navbar.classList.add("bg-transparent", "text-white");
                        this.$refs.navbar.classList.remove("bg-white", "text-black");

                    }




                }

                if (this.$refs.navbar) {

                    if (window.scrollY >= 300) {

                        this.$refs.searchC.classList.remove("md:hidden");
                        this.$refs.searchC.classList.add("md:block");
                        this.$refs.navbar.classList.add("border-b-[1px]");

                        // console.log(this.$refs.navbar)
                    }
                    else {

                        this.$refs.searchC.classList.remove("md:block");
                        this.$refs.searchC.classList.add("md:hidden");
                        this.$refs.navbar.classList.remove("border-b-[1px]");

                        // console.log(this.$refs.navbar)
                    }
                }
            }

        },
        // logOut() {
        //     // clearing the local storage
        //     localStorage.clear();
        //     this.$router.push('/login');
        // },
        // showList() {
        //     this.$refs.list.classList.remove("hidden");
        // },
        // hideList() {
        //     this.$refs.list.classList.add("hidden");
        // },
        logOut() {
            Swal.fire({
                title: "LogOut !",
                text: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes !"
            }).then((result) => {
                if (result.isConfirmed) {

                    // logout code
                    localStorage.clear();
                    this.$router.push('/login');

                    Swal.fire({
                        title: "LogOut Done",

                        icon: "success"
                    });
                }
            });



        },
        
    },
    mounted() {
        // this.selectedAccount=this.setSelectedAccount;
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