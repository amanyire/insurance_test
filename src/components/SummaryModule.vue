<template>
       <div class="main-card">
            <h1 >Summary</h1>
            <p > Name: {{name}}</p>
            <p >Age: {{age}}</p>
            <p>Where do you live: {{country}}</p>
            <p>Package: {{insurance}}</p>
            <p>Premium: {{premium}}</p>
            <div class="group_form_buttons">
             <v-btn class="button_two" @click="()=>$router.push('/details')" > Back </v-btn>
             <v-btn class="button_one" @click="buyInsurance()" > Buy </v-btn>
             </div>
            <p class="success_message">{{successfulTransaction}}</p>

        </div>
</template>
<script>
const STORAGE_KEY = 'insurance-storage'

export default {
  name: 'SummaryModule',
  components: {},
  data: function () {
    return {
      insuranceDataStore: [],
      name: '',
      age: 0,
      country: 'USA',
      insurance: 'Standard',
      premium: '500USD',
      successfulTransaction: '',
      itemsObject: {},
      itemsArray: []

    }
  },
  created () {
    this.insuranceDataStore = JSON.parse(localStorage.getItem(STORAGE_KEY) || '')
    this.name = this.insuranceDataStore[0]
    this.age = this.insuranceDataStore[1]
    this.country = this.insuranceDataStore[2]
    this.insurance = this.insuranceDataStore[3]
    this.premium = this.insuranceDataStore[4]
  },
  methods: {
    buyInsurance () { // Method called to process the insurance. Displays a sucess message else an error if the age is above 100
      if (this.age < 100) {
        this.successfulTransaction = 'Your payment for insurance policy was successful.'
      } else {
        this.$router.push('/error')
      }
    }
  }
}
</script>
