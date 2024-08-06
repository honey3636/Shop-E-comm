<template>
    <div>
        <h2 class="text-xl">Manage Profile</h2>
        <div class="bg-white p-4 rounded-lg mt-4">
            <div>
                <div class="grid md:grid-cols-3  mt-3">
                    <label for="fullname" class="mx-2">
                        <p>Full Name</p>
                        <input id="fullname" type="text" placeholder="Full Name" class="mb-6 input border border-green-400 focus:border-green-400 focus:outline-green-400
                             w-full " />
                    </label>
                    <label for="email" class="mx-2">
                        <p>Email Address</p>
                        <input id="email" type="text" placeholder="Email Address" class="mb-6 input border border-green-400 focus:border-green-400 focus:outline-green-400
                             w-full " />
                    </label>
                    <label for="mobile" class="mx-2">
                        <p>Mobile</p>
                        <input id="mobile" type="text" placeholder="Mobiel" class="mb-6 input border border-green-400 focus:border-green-400 focus:outline-green-400
                             w-full " />
                    </label>
                    <label for="date" class="mx-2">
                        <p>Birthday</p>
                        <input type="date" id="date" placeholder="Month" class="mb-6 input border border-green-400 focus:border-green-400 focus:outline-green-400
                             w-full " />
                    </label>
                    <label for="gender" class="mx-2">
                        <p>Gender</p>
                        <select id="gender"
                            class=" select mb-6 input border border-green-400 focus:border-green-400 focus:outline-green-400 w-full">
                            <option disabled selected>Your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>

                        </select>

                    </label>

                </div>
            </div>
            <div class="flex flex-col gap-3 mx-2">
                <button class="block bg-yellow-300 hover:bg-yellow-400 rounded-lg p-3 max-w-52">Edit Profile</button>
                <button class=" bg-yellow-300 hover:bg-yellow-400 rounded-lg p-3 max-w-52">Change Password</button>
            </div>
        </div>

        <!-- orders section -->
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