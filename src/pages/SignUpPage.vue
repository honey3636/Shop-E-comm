<template>

    <div class="flex justify-center items-center min-h-screen ">
        <div class="grid grid-cols-1 w-80 p-5 rounded-xl shadow-lg border bg-white  ">
            <img src="../assets/logo.png" class="w-16 h-16 object-cover rounded-lg mx-auto" alt="/">
            <h2 class="text-center text-3xl font-bold mb-4">SignUp</h2>
            <div class=" flex flex-col gap-2">
                <input v-model="nameI" type="text" class="w-full border rounded-lg shadow-lg p-1"
                    placeholder="Your Name">
                <input v-model="emailI" type="email" class="w-full border shadow-lg  rounded-lg p-1 "
                    placeholder="email address">
                <input v-model="passwordI" type="password" ref="pass1" class="w-full border rounded-lg shadow-lg p-1 "
                    placeholder="password">
                <input v-model="passwordI2" @change="checkPass" type="password" ref="pass2"
                    class="w-full border rounded-lg shadow-lg p-1 " placeholder="Conform password">
                <p v-if="missMatch" class="text-[11px] text-red-500 ">Password must be same</p>
                <input v-model="phoneI" type="text" class="w-full border rounded-lg shadow-lg p-1 "
                    placeholder="phone no">

                <span>
                    <label for="check">
                        <input @change="checkFields" v-model="check1" class="mr-2" type="checkbox" name="check"
                            id="check">Are you sure?
                    </label>
                </span>
            </div>
            <button :disabled="!check1" @click="signUpbtn"
                class=" bg-yellow-300 w-28 p-3 rounded my-4 mx-auto hover:bg-yellow-400 font-bold">SignUp</button>

            <div class=" border-t-[1px] border-gray-300 p-2 text-center">
                <p>Already have an account? <span class="text-blue-500 cursor-pointer hover:underline"><router-link
                            to="/login">Login</router-link></span>

                </p>
            </div>
        </div>
    </div>
</template>

<!-- script section -->
<script>
import axios from 'axios';

export default {
    name: "SignUpPage",
    data() {
        return {
            nameI: '',
            emailI: '',
            passwordI: '',
            passwordI2: '',
            phoneI: '',
            check1: false,
            missMatch: false,
        }
    },
    methods: {
        checkPass() {
            if (this.$refs.pass1.value != this.$refs.pass2.value) {
                this.missMatch = true;
                if (this.$refs.pass1.value == "" || this.$refs.pass2.value == "") {
                    this.missMatch = false;
                }
            }
            else {
                this.missMatch = false;
            }
        },
        checkFields() {
            if (this.nameI == "" || this.emailI == "" || this.passwordI == "" || this.passwordI2 == "" || this.phoneI == "") {
                alert("Please fill all the fields");
                this.check1 = false;

            }


        },
        async signUpbtn() {
            
            try {
                let result = await axios.post("http://localhost:3000/signups", {
                    name: this.nameI,
                    email: this.emailI,
                    password: this.passwordI,
                    phone: this.phoneI,
                });
                console.log(result);

                if (result.status == 200) {
                    alert("User SignUp successfully");
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push("/");
                }
            } catch (error) {
                console.error("Error signing up:", error);
                alert("Error signing up. Please try again.");
            }
        }
    },

}
</script>

<!-- style section -->
<style></style>