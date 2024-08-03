<template>
    <div>
        <hr>
        <div class="font-bold text-xl my-3">
            Payment Methods
        </div>
        <!-- debit and credit card -->
        <div class=" form-side  border bg-white border-green-400 rounded-lg p-6">
            <div class="flex ">
                <input type="radio" v-model="selectedPaymentMethod" id="debit1" value="debit" class="radio radio-success" />
                <label for="debit1">
                    <p class="font-bold ml-3 ">Credit or Debit Card </p>
                </label>
            </div>
            <div ref="debitCard" v-if="selectedPaymentMethod === 'debit'">
                <!-- using input class of desiy ui -->
                <label for="nameOnCard">
                    <p>Name on Card</p>
                    <input id="nameOnCard" type="text" placeholder="Name on Card" class="mb-6 input border border-green-400 focus:border-green-400 focus:outline-green-400
                             w-full " />
                </label>
                <label for="cardNumber">
                    <p>Card Number</p>
                    <input id="cardNumber" type="text" placeholder="Card Number"
                        class="mb-6 input border border-green-400 focus:border-green-400 focus:outline-green-400 w-full " />
                </label>

                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                    <label for="expDate">
                        <p>Expiry Date (MM/YY)</p>
                        <input id="expDate" type="text" placeholder="Expiry Date (MM/YY)"
                            class="input border border-green-400 focus:border-green-400 focus:outline-green-400 w-full " />
                    </label>
                    <label for="cvcCvv">
                        <p>CVC/CVV</p>
                        <input id="cvcCvv" type="text" placeholder="CVC/CVV"
                            class="input border border-green-400 focus:border-green-400 focus:outline-green-400 w-full " />
                    </label>

                </div>
                <div class="flex gap-3">
                    <button class="btn focus:bg-green-400 text-base">Cancel</button>
                    <button class="btn bg-green-400 hover:bg-gray-100 text-base">Use This Method</button>
                </div>
            </div>
        </div>
        <!-- Other payment and Bank -->
        <div class=" form-side  border bg-white border-green-400 rounded-lg p-6 mt-2">
            <div class="flex ">
                <input type="radio" v-model="selectedPaymentMethod" id="bank1" value="bank" class="radio radio-success" />
                <label for="bank1">
                    <p class="font-bold ml-3 ">Bank and Other</p>
                </label>
            </div>
            <div v-if="selectedPaymentMethod === 'bank'">
                hello
            </div>
        </div>

        <!-- Cash on Delivery -->
        <div class=" form-side  border bg-white border-green-400 rounded-lg p-6 mt-2">
            <div class="flex ">
                <input type="radio" v-model="selectedPaymentMethod" id="cash1" value="cash" class="radio radio-success" />
                <label for="cash1">
                    <p class="font-bold ml-3 ">Cash On Delivery</p>
                </label>
            </div>
            <div v-if="selectedPaymentMethod === 'cash'">
                Cash on delivery
            </div>
        </div>
    </div>

</template>

<!-- script section -->
<script>

export default {
    name: "PaymentCart",
    data() {
        return {
            selectedPaymentMethod:"",
        }
    },
    methods: {
      
    },
    

}
</script>

<!-- style section -->
<style></style>