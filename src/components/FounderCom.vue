<template>

    <div class="2xl:container mx-auto  bg-gray-100 p-6">
        <div class=" bg-white p-3 md:h-80  rounded-2xl flex justify-center items-center px-2">
            <!-- left arrow -->
            <button @click="slideLeft" class="hidden md:block w-20 h-20 bg-gray-100 hover:bg-gray-200 rounded  ">
                        <font-awesome-icon :icon="['fas', 'less-than']" />
                    </button>

             <!-- main -->
            <div class="grid sm:grid-cols-4">
                <div class="sm:col-span-2 flex justify-center items-center gap-3">
                    <div>
                        <img class="h-44 w-44 rounded-full border object-cover" src="../assets/founder.png" alt="">
                    </div>
                    <div>
                        <div class="text-2xl font-bold">Hanzala Yaseen</div>
                        <div class="text-sm text-gray-300">Founder of this webSite</div>
                    </div>
                </div>
                <div class=" sm:col-span-2 flex justify-center items-center">
                    <div class="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta eveniet debitis ad
                        autem
                        dicta fuga dolore, nisi odit ab blanditiis harum, mollitia voluptatibus natus eos similique,
                        commodi
                        tenetur est?
                    </div>
                </div>
            </div>

            <!-- right arrow -->
             <button @click="slideLeft" class="hidden md:block  w-20 h-20 bg-gray-100 hover:bg-gray-200 rounded  ">
                        <font-awesome-icon :icon="['fas', 'greater-than']" />
                    </button>
        </div>
    </div>
</template>

<!-- script section -->
<script>

export default {
    name: "FounderCom"

}
</script>

<!-- style section -->
<style></style>