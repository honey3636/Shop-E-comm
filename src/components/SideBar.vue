<template>
    <div class="px-0 m-0  fixed top-[65px]">
        <div  class="pt-2 m-0 ">
            <!--Sticky-top class can make sidebar stick to top but it will overlap the a tag-->
            <ul v-if="selectedAccount==='switchToBuying'" class="flex flex-col gap-2">
                
                <li  v-for="(item, index) in sidebarMenuItems " :key="index" class=" p-2  hover:bg-gray-200">
                    <router-link :to="item.path" class="  p-2 text-muted a-Link ps-3" active-class="active">
                        <img class="h-5 inline" :src="item.image" />
                        <span class="ms-2 hidden sm:inline">{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
            <ul v-if="selectedAccount==='switchToSeller'" class="flex flex-col gap-2">
                
                <li  v-for="(item, index) in itemsForSeller " :key="index" class=" p-2  hover:bg-gray-200">
                    <router-link :to="item.path" class="  p-2 text-muted a-Link ps-3" active-class="active">
                        <img class="h-5 inline" :src="item.image" />
                        <span class="ms-2 hidden sm:inline">{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- Buyer list -->
        <!-- <div v-if="selectedAccount==='switchToSeller'" class="pt-2 m-0 ">
            Sticky-top class can make sidebar stick to top but it will overlap the a tag
            <ul class="flex flex-col gap-2">
                
                <li  v-for="(item, index) in itemsForSeller " :key="index" class=" p-2  hover:bg-gray-200">
                    <router-link :to="item.path" class="  p-2 text-muted a-Link ps-3" active-class="active">
                        <img class="h-5 inline" :src="item.image" />
                        <span class="ms-2 hidden sm:inline">{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<!-- script section -->
<script>
import { mapGetters } from "vuex";
export default {
    name: "SideBar",
    
    data() {
        return {
            selectedAccount: "",
            // for user
            sidebarMenuItems: [
                {
                    name: 'Manage Account',
                    path: '/manageprofile',
                    image: '/Icons/profile.svg'

                },
                {
                    name: 'My Profile',
                    path: '/myProfile',
                    image: '/Icons/profile.svg'
                },
                {
                    name: 'Address Book',
                    path: '/addressbook',
                    image: '/Icons/address.svg'

                },

            ],

            // for seller
            itemsForSeller: [
                {
                    name: 'Dash Board',
                    path: '/sellerdashboard',
                },
                {
                    name: 'Profile',
                    path: '/myProfile',
                    // image: '/Icons/profile.svg'
                },
                {
                    name: 'Products',
                    path: '/products',
                    // image: '/Icons/profile.svg'
                },

            ],
        }
    },
    computed:{
        ...mapGetters({
            getSelectedAccount:'getSelectedAccount'
        })
    },
    watch: {
        getSelectedAccount(newVal) {
            console.log("Account changed to:", newVal);
            this.selectedAccount = newVal;
            this.navigateToFirstRoute();
        }
    },
    methods: {
        navigateToFirstRoute() {
            if (this.selectedAccount === 'switchToBuying' && this.sidebarMenuItems.length > 0) {
                this.$router.push(this.sidebarMenuItems[0].path);
            } else if (this.selectedAccount === 'switchToSeller' && this.itemsForSeller.length > 0) {
                this.$router.push(this.itemsForSeller[0].path);
            }
        }
    },
    mounted() {
        this.selectedAccount = this.getSelectedAccount;
        this.navigateToFirstRoute();
        // console.log("Mounted with account:", this.selectedAccount);
    }
}
</script>

<!-- style section -->
<style></style>