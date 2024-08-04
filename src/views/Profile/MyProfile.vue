<template>
    <h2 class="text-xl">My Profile</h2>
    <div class="">
        <div class="grid md:grid-cols-3  ">
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
    <button></button>
</template>

<!-- script section -->
<script>

export default {
    name: "MyProfile",

}
</script>

<!-- style section -->
<style></style>