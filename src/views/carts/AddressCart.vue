<template>
    <div class="2xl:container mx-auto ">

        <div class=" font-bold text-3xl px-6 pb-6">
            Shoping Cart
        </div>
    </div>
    <button @click="$emit('next-step')">Next </button>
</template>

<!-- script section -->
<script>

export default {
    name: "AddressCart"

}
</script>

<!-- style section -->
<style></style>