<template>
    <form @submit.prevent="onSubmit" @change="premiumPackage" method="POST">
            <div class="input-lable"> Name </div>
            <div>
            <input  v-model="name" placeholder="Add text" class="input-field"/>
            </div>
            <div class="input-lable"> Age </div>
            <div>
            <input type="number" v-model="age" placeholder="50" class="input-field"/>
            </div>
            <div class="input-lable">Where do you live</div>
            <div>
            <select v-model="country" class="input-field">
                 <option v-for='option in options' :value='option.value' :key="option.value">
                  {{ option.text }}
                 </option>
            </select>
            </div>
            <div class="packages_div">
                  <div class="radio_group_div">
                  <input type="radio" id="one" value="standard" v-model="insurance" class="group_buttons_packages" :checked="checkedValue == 'standard'">
                  <label for="one" class="group_buttons_label" checked>Standard</label>
                  </div>
                  <hr/>
                  <div class="radio_group_div">
                  <input type="radio" id="two" value="safe" v-model="insurance" class="group_buttons_packages" :checked="checkedValue == 'safe'">
                  <label for="two" class="group_buttons_label">Safe(+{{safeInsurance}}{{units}}, 50%)</label>
                  </div>
                  <div class="radio_group_div">
                  <input type="radio" id="three" value="super" v-model="insurance" class="group_buttons_packages" :checked="checkedValue == 'super'">
                  <label for="three" class="group_buttons_label">Super Safe(+{{superInsurance}} {{units}}, 75%)</label>
                  </div>

            </div>
            <div><h1>Your premium is: {{ premium }}</h1>
            </div>

            <div class="group_form_buttons">
             <v-btn class="button_two" @click="()=>$router.push('/')" > Back </v-btn>
             <button class="button_one" type="submit"> Next </button>
             </div>
             </form>
</template>
<script>
const STORAGE_KEY = 'insurance-storage'

export default {
  name: 'DetailsInfo',
  components: {
  },
  data: function () {
    return {
      detailsData: [],
      insuranceDataStore: '',
      insurance: 'standard',
      name: '',
      units: '',
      safeInsurance: 0,
      superInsurance: 0,
      rate: 1,
      age: 30,
      premiumPackageGrouping: 1,
      country: 'Hong Kong',
      options: [
        { text: 'Hong Kong', value: 'Hong Kong' },
        { text: 'USA', value: 'USA' },
        { text: 'Australia', value: 'Australia' }
      ]

    }
  },
  created () {
    this.insuranceDataStore = JSON.parse(localStorage.getItem(STORAGE_KEY) || '')
  },
  methods: {
    premiumPackage () {
      this.safeInsurance = 10 * this.age * 1
      this.superInsurance = 10 * this.age * 2 * (75 / 100)
      if (this.country === 'USA') {
        this.units = 'USD'
        this.premium = 10 * this.age * 2
        this.safeInsurance = parseInt(this.premium) * 0.5
        this.superInsurance = parseInt(this.premium) * (75 / 100)
      } else if (this.country === 'Australia') {
        this.units = 'AUD'
        this.premium = 10 * this.age * 3
        this.safeInsurance = parseInt(this.premium) * 0.5
        this.superInsurance = parseInt(this.premium) * (75 / 100)
      } else if (this.country === 'Hong Kong') {
        this.units = 'HKD'
        this.premium = 10 * this.age * 1 + ' ' + this.units
        this.safeInsurance = parseInt(this.premium) * 0.5
        this.superInsurance = parseInt(this.premium) * (75 / 100)
      }
      if (this.insurance === 'standard') {
        this.premium = parseInt(this.premium) + 0 + ' ' + this.units
      } else if (this.insurance === 'safe') {
        this.premium = parseInt(this.premium) + this.safeInsurance + ' ' + this.units
      } else if (this.insurance === 'super') {
        this.premium = parseInt(this.premium) + this.superInsurance + ' ' + this.units
      }
    },
    onSubmit () {
      this.detailsData.push(this.name)
      this.detailsData.push(this.age)
      this.detailsData.push(this.country)
      this.detailsData.push(this.insurance)
      this.detailsData.push(this.premium)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.detailsData))
      this.$router.push('/summary')
    }
  },
  mounted () {
    this.premiumPackage()
  }
}
</script>
