<template>
       <div class="details-card" id="home">
            <h1>Tell us About yourself</h1>
            <DetailsForm />
        </div>
</template>
<script>
import DetailsForm from './DetailsForm.vue'

export default {
  name: 'DetailsInfo',
  components: {
    DetailsForm
  }
}
</script>
