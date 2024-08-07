<template>
    <div>
        <h2 class="text-xl">Manage Profile</h2>
        <div class=" mt-4">
            <div>
                <div class="grid md:grid-cols-3  mt-3">
                    <!-- profile -->
                    <div class="bg-white rounded-lg p-4 m-2  flex flex-col gap-3">
                        <div class="flex ">
                            <h3>Personal Profile </h3>
                            <p  class="ml-2 border-l-2 pl-2 text-blue-600 hover:cursor-pointer text-base"><router-link to="/myprofile">Edit</router-link></p>

                        </div>
                        <h2>Hanzala</h2>
                        <label for="checksms" class="flex items-center gap-2 hover:cursor-pointer">
                            <input type="checkbox" name="" id="checksms">
                            <span class="text-sm ">Receive marketing SMS</span>
                        </label>
                    </div>
                    <!-- Address -->
                    <div class="md:col-span-2 flex  m-2 bg-white rounded-lg">

                        <div class="p-4  h-60 flex flex-col gap-3">
                            <div class="flex ">
                                <h3>Address Book </h3>
                                <p class="ml-2 border-l-2 pl-2 text-blue-600 hover:cursor-pointer text-base"><router-link to="/addressbook">Add</router-link></p>

                            </div>
                            <h2 class=" text-gray-500">Save you shipping address here</h2>
                            <div class="flex items-center gap-3">
                                <img class="h-12 w-12" src="/Icons/address.svg" alt="/">
                                <div class="flex flex-col text-sm text-gray-400">
                                    <span>Province: Punjab</span>
                                    <span>City: Sargodha</span>
                                    <span>Full Address: sadiqa abad street no 3 sargodha</span>
                                </div>

                            </div>

                        </div>
                        <div class="p-4 border-t  md:border-t-0 border-gray-400  ">
                            <div class="md:border-l md:pl-3 h-full flex flex-col gap-3"> 
                                <h3>Billing Address </h3>
                                <h2 class=" text-gray-500">Save you billing address here</h2>
                                <label for="checkaddress" class="flex items-center gap-2 hover:cursor-pointer">
                                    <input type="checkbox" name="" id="checkaddress">
                                    <span class="text-sm">Same as shipping Address</span>
                                </label>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>

        <!--Recent orders section -->
        <div class="bg-white p-4 rounded-lg mt-4">
            <h2 class="text-xl mb-2">Recent Orders</h2>
            <table class="table-auto text-xs text-gray-500 text-start w-full ">
                <thead class="bg-gray-100 ">
                    <tr class=" border-b ">
                        <th class="p-3 text-start ">Order #</th>
                        <th class="p-2 text-start">Placed On</th>
                        <th class="p-2 text-start">Items</th>
                        <th class="p-2 text-start">Total</th>
                        <th class="p-2 text-start"></th>


                    </tr>
                </thead>
                <tbody>
                    <tr class="h-16 border-b hover:bg-gray-100">
                        <td class="p-2">177759</td>
                        <td class="p-2">08/05/2024</td>
                        <td class="p-2 flex gap-1">
                            <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                            <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                            <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                        </td>
                        <td class="p-2">Rs. 1,732</td>
                        <td class="p-2 text-blue-600 hover:cursor-pointer text-base">Manage</td>
                    </tr>
                    <tr class="h-16 border-b hover:bg-gray-100">
                        <td class="p-2">177759</td>
                        <td class="p-2">08/05/2024</td>
                        <td class="p-2 flex gap-1">
                            <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                            <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                            <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                        </td>
                        <td class="p-2">Rs. 1,732</td>
                        <td class="p-2 text-blue-600 hover:cursor-pointer text-base">Manage</td>
                    </tr>
                    <tr class="h-16 border-b hover:bg-gray-100">
                        <td class="p-2">177759</td>
                        <td class="p-2">08/05/2024</td>
                        <td class="p-2 flex gap-1">
                            <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                            <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                            <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                        </td>
                        <td class="p-2">Rs. 1,732</td>
                        <td class="p-2 text-blue-600 hover:cursor-pointer text-base">Manage</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>


</template>

<!-- script section -->
<script>

export default {
    name: "ManageProfile",

}
</script>

<!-- style section -->
<style></style>