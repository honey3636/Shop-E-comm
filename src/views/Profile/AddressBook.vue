<template>
    <h2 class="text-xl">Address Book</h2>
    <div class="bg-white p-4 rounded-lg mt-4">
        <table class="table-auto text-xs text-gray-500 text-start w-full ">
            <thead class="bg-gray-100 ">
                <tr class=" border-b ">
                    <th class="p-3 text-start ">Full Name</th>
                    <th class="p-2 text-start">Address</th>
                    <th class="p-2 text-start">Postcode</th>
                    <th class="p-2 text-start">Phone Number</th>
                    <th class="p-2 text-start"></th>
                    <th class="p-2 text-start"></th>

                </tr>
            </thead>
            <tbody>
                <tr class="h-16 border-b hover:bg-gray-100">
                    <td class="p-2">Hanzala</td>
                    <td class="p-2">street no3 sadiqa abad</td>
                    <td class="p-2">Punjab-Sargodha-Kot Farid</td>
                    <td class="p-2">03220628040</td>
                    <td class="p-2 text-gray-400 ">
                        <p>Default shipping Address</p><p>Default Billing Address</p>
                    </td>
                    <td class="p-2 text-blue-600 hover:cursor-pointer text-base">Edit</td>
                </tr>
                
            </tbody>
        </table>
        <div class="flex justify-end">
            <button class="bg-yellow-300 hover:bg-yellow-400 rounded-lg p-3 max-w-52 font-bold mt-3">+Add New Address</button>
        </div>
    </div>
</template>

<!-- script section -->
<script>

export default {
    name: "AddressBook",

}
</script>

<!-- style section -->
<style></style>