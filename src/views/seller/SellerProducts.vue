<template>
    <div class="flex justify-between items-center">
        <h2 class="text-xl">Products</h2>
        <div class="flex justify-end">
            <!-- Add product model another page  -->
            <button onclick="my_modal_3.showModal()"
                class="bg-yellow-300 hover:bg-yellow-400 rounded-lg p-3 max-w-52 font-bold ">+Add New
                Product</button>
            <!-- You can open the modal using ID.showModal() method -->
            <dialog id="my_modal_3" class="modal">
                <div class="modal-box max-w-[90%]">
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 class="text-lg font-bold mb-2">Add Product</h3>
                    <!-- using grid -->
                    <div class="grid md:grid-cols-3 gap-5">

                        <!-- <input type="file" @change="onFileChange"> -->
                        <div class="order-2  md:order-1  md:col-span-2">
                            <label for="title " class="">Title
                                <input id="title" class=" mb-4 p-2  border-gray-400 border w-full rounded-md"
                                    placeholder="Title" type="text">
                            </label>

                            <label for="description " class="">Description
                                <textarea id="description" class="p-2 border-gray-400 border w-full rounded-md"
                                    cols="30" rows="5" placeholder="Description"></textarea>
                            </label>

                            <div>
                                <h3>Additional Information</h3>
                                <table
                                    class="table-auto border-collapse border-spacing-1 border border-gray-400  w-full ">
                                    <thead class=" ">
                                        <tr class="">
                                            <th class="p-2 border border-gray-400 text-start w-28 sm:w-40">key</th>
                                            <th class="p-2 border border-gray-400 text-start">value</th>
                                            <th class="p-2 border border-gray-400 text-start w-20"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class=" border border-gray-400 p-1">
                                                <input type="text" class="p-1 border border-gray-400 w-full rounded-md">
                                            </td>
                                            <td class=" border border-gray-400 p-1">
                                                <input type="text" class="p-1 border border-gray-400 w-full rounded-md">
                                            </td>
                                            <td
                                                class=" border border-gray-400 text-red-600 text-center hover:cursor-pointer">
                                                X</td>
                                        </tr>
                                        <tr>
                                            <td class=" border border-gray-400 p-1">
                                                <input type="text" class="p-1 border border-gray-400 w-full rounded-md">
                                            </td>
                                            <td class=" border border-gray-400 p-1">
                                                <input type="text" class="p-1 border border-gray-400 w-full rounded-md">
                                            </td>
                                            <td
                                                class=" border border-gray-400 text-red-600 text-center hover:cursor-pointer">
                                                X</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <!-- Second Grid-col Start -->
                        <div class="order-1 md:order-2 flex flex-col gap-3">
                            <button class="self-center bg-blue-400 hover:bg-blue-500 rounded-lg h-12 p-3 ">Save
                                Changes</button>

                            <div class="grid grid-cols-2 gap-3 ">
                                <label for="stockCount">
                                    Stock Count
                                    <input type="text" id="stockCount"
                                        class="p-2 border border-gray-400 w-full rounded-md">
                                </label>
                                <label for="tfo">
                                    TFO Price
                                    <input type="text" id="tfo" class="p-2 border border-gray-400 w-full rounded-md">
                                </label>


                            </div>

                            <div class="grid grid-cols-3 gap-3 ">
                                <label for="saleP1">
                                    Sale Price1
                                    <input type="text" id="saleP1" class="p-2 border border-gray-400 w-full rounded-md">
                                </label>
                                <label for="saleP2">
                                    Sale Price2
                                    <input type="text" id="saleP2" class="p-2 border border-gray-400 w-full rounded-md">
                                </label>
                                <label for="saleP3">
                                    Sale Price3
                                    <input type="text" id="saleP3" class="p-2 border border-gray-400 w-full rounded-md">
                                </label>
                            </div>

                            <div>
                                <!-- <TreeSelect/> -->
                            </div>
                            


                            <div @click="triggerFileInput"
                                class="h-20 w-20 rounded-lg border-2 border-dotted border-gray-400 bg-gray-100 flex justify-center items-center hover:cursor-pointer">
                                <img v-if="imageUrl" :src="imageUrl" alt="Selected Image"
                                    class="h-full w-full object-cover" />
                                <span v-if="!imageUrl">+</span>
                                <!-- hidden file input -->
                                <input type="file" ref="fileInput" @change="onFileChange"
                                    class="file-input file-input-bordered   hidden" />
                            </div>
                        </div>
                    </div>

                </div>
            </dialog>
        </div>
    </div>

    <!--items tabel -->
    <div class="bg-white p-4 rounded-lg mt-4 overflow-x-auto  ">

        <table class="table-auto text-xs text-gray-500 text-start w-[865px]  lg:w-full">
            <thead class="bg-gray-100 ">
                <tr class=" border-b ">
                    <th class="p-3 text-start ">Order #</th>
                    <th class="p-2 text-start">Item Name</th>
                    <th class="p-2 text-start">Images</th>
                    <th class="p-2 text-start">Price</th>
                    <th class="p-2 text-start">Uploaded on</th>
                    <th class="p-2 text-start"></th>
                    <th class="p-2 text-start"></th>



                </tr>
            </thead>
            <tbody>
                <tr class="h-16 border-b hover:bg-gray-100">
                    <td class="p-2">177759</td>
                    <td class="p-2">Air 31</td>
                    <td class="p-2 flex gap-1">
                        <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                        <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                        <img class="h-10 w-10" src="@/assets/1.jpg" alt="/">
                    </td>
                    <td class="p-2">Rs. 1,732</td>
                    <td class="p-2">08/05/2024</td>
                    <td class="p-2 text-blue-600 hover:cursor-pointer text-base">Edit</td>
                    <td class="p-2 text-blue-600 hover:cursor-pointer text-base">
                        <div @click="removeItem" class="w-20 flex justify-center hover:bg-gray-100 p-2 rounded-md">
                            <font-awesome-icon :icon="['fas', 'trash']" />
                        </div>
                    </td>

                </tr>

            </tbody>
        </table>

    </div>
</template>

<!-- script section -->
<script>
// import TreeSelect from '@riophae/vue-treeselect'
// import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
    name: "SellerProducts",
    components:{
        // TreeSelect
    },
    data() {
        return {
            imageUrl: null
        }
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.imageUrl = URL.createObjectURL(file);
            }
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        }
    },
}
</script>

<!-- style section -->
<style></style>