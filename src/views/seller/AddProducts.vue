<template>
    <div class="flex justify-between items-center">
        <h2 class="text-xl">Products</h2>
        <div class="flex justify-end">
            <!-- Add product model -->
            <button onclick="my_modal_3.showModal()" class="bg-yellow-300 hover:bg-yellow-400 rounded-lg p-3 max-w-52 font-bold ">+Add New
                Product</button>
            <!-- You can open the modal using ID.showModal() method -->
            <dialog id="my_modal_3" class="modal">
                <div class="modal-box w-auto">
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 class="text-lg font-bold mb-2">Add Product</h3>
                    <div class="flex flex-col">
                        <div @click="triggerFileInput" class="h-20 w-20 rounded-lg bg-gray-100 flex justify-center items-center hover:cursor-pointer">
                            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="h-full w-full object-cover"/>
                            <span v-if="!imageUrl">+</span>
                        </div>
                        <!-- <input type="file" @change="onFileChange"> -->
                        <input type="file" ref="fileInput" @change="onFileChange" class="file-input file-input-bordered w-full max-w-xs hidden" />
                        <input type="text">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Description"></textarea>
                    </div>
                </div>
            </dialog>
        </div>
    </div>
    <!--items tabel -->
    <div class="bg-white p-4 rounded-lg mt-4 overflow-hidden ">

        <table class="table-auto text-xs text-gray-500 text-start w-full ">
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

export default {
    name: "AddProduct",
    data() {
        return{
            imageUrl:null
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