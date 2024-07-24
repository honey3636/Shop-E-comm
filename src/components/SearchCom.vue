<template>
    <div class="w-full p-1 rounded-full border-blackLight border ">
        <div class="grid grid-cols-4 ">


            <input class=" col-span-3 mx-2 h-7 w-full border-none bg-transparent   truncate outline-none"
                placeholder="What are you looking for?" type="search" name="" id="">

            <div class=" col-span-1  flex justify-end w-full ">
                <button class="  bg-yellow-300  rounded-full  px-2  " type="button">Search</button>
            </div>

            
        </div>

    </div>
</template>

<!-- script section -->

<script>

export default {
    name: "SearchCom",

}
</script>

<!-- style section -->
<style></style>