<template>
    <div class="px-0 m-0 sticky top-0">
        <div class="pt-2 m-0 ">
            <!--Sticky-top class can make sidebar stick to top but it will overlap the a tag-->
            <ul class="flex flex-col" id="menu">
                <li v-for="(item, index) in sidebarMenuItems " :key="index" class="nav-item block pb-2">
                    <router-link :to="item.path" class="nav-link deco text-muted a-Link ps-3" active-class="active">
                        <img class="svg-size" :src="item.image" /> <span
                            class="ms-2 none sm:inline">{{ item.name }}</span>
                    </router-link>
                </li>
                <!-- <li>Profile</li>
                <li>Setting</li>
                <li>Help</li> -->
            </ul>
        </div>
    </div>
</template>

<!-- script section -->
<script>

export default {
    name: "SideBar",
    data(){
        return{
            UserProfile:"",
            sidebarMenuItems: [{
                    name: 'My Profile',
                    path: '/myProfile',
                    // image: '/src/assets/images/home.svg'
                },
                {
                    name: 'Orders',
                    path: '/orders',
                    // image: '/src/assets/images/client.svg'
                },
                // {
                //     name: 'Setting',
                //     // path: '/settings',
                //     // image: '/src/assets/images/setting-2.svg'
                // },
            ],
        }
    },
}
</script>

<!-- style section -->
<style></style>