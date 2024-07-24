<template>

    <div class="flex justify-center items-center min-h-screen ">
        <div class="grid grid-cols-1 w-80 p-5 rounded-xl shadow-lg border bg-white  ">
            <img src="../assets/logo.png" class="w-16 h-16 object-cover rounded-lg mx-auto" alt="/">
            <h2 class="text-center text-3xl font-bold mb-4">Login</h2>
            <div class=" flex flex-col gap-4">
                <input v-model="email" type="email" class="w-full border shadow-lg  rounded-lg  p-1"
                    placeholder="email address">
                <input v-model="password" type="password" class="w-full border rounded-lg shadow-lg p-1 "
                    placeholder="password">

            </div>
            <button @click="login"
                class=" bg-yellow-300 w-28 p-3 rounded-full mt-9 mb-10 mx-auto hover:bg-yellow-400 font-bold"> LOGIN
            </button>

            <div class="border-t-[1px] border-gray-300 p-2 text-center">
                <p>Create new account. <span class="text-blue-500 cursor-pointer hover:underline"><router-link
                            to="/signup">SignUp</router-link></span></p>

            </div>
        </div>
    </div>
</template>

<!-- script section -->
<script>
import axios from "axios";
export default {
    name: "LoginPage",
    data() {
        return {
            password: '',
            email: '',
        }
    },
    methods: {
        async login() {
            if (this.email === "" || this.password === "") {
                alert("Please fill all the fields");
            } else {
                try {
                    let result = await axios.get(`http://localhost:3000/check?email=${this.email}&password=${this.password}`);
                    console.log(result);
                    if (result.status === 200 && result.data) {
                        alert("Login Successful");
                        localStorage.setItem("user-info", JSON.stringify(result.data.name));
                        this.$router.push('/');
                    } else {
                        alert("Invalid email or password");
                    }
                } catch (error) {
                    console.error("Error during login:", error);
                    if (error.response && error.response.status === 401) {
                        alert("Invalid email or password");
                    } else {
                        alert("An error occurred during login. Please try again.");
                    }
                }
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info")
        if (user) {
            this.$router.push('/')
        }
    }

}
</script>

<!-- style section -->
<style></style>