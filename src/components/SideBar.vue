<template>
    <div class="px-0 m-0  fixed top-[65px]">
        <div class="pt-2 m-0 ">
            <!--Sticky-top class can make sidebar stick to top but it will overlap the a tag-->
            <ul class="flex flex-col gap-2" >
                <li v-for="(item, index) in sidebarMenuItems " :key="index" class=" p-2  hover:bg-gray-200">
                    <router-link :to="item.path" class="  p-2 text-muted a-Link ps-3" active-class="active">
                        <img class="h-5 inline" :src="item.image" />
                         <span class="ms-2 hidden sm:inline">{{ item.name}}</span>
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
    data() {
        return {
            UserProfile: "",
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
        }
    },
}
</script>

<!-- style section -->
<style></style>