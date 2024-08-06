<template>
    <h2 class="text-xl">My Profile</h2>
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
</template>

<!-- script section -->
<script>

export default {
    name: "MyProfile",

}
</script>

<!-- style section -->
<style></style>