<template>
       <div class="main-card" id="home">
            <h1>Hello There</h1>
            <p>Let's buy some insurance. It is going to take only a few steps</p>
             <v-btn class="button_one" @click="()=>$router.push('details')" > Start </v-btn>

        </div>
</template>
<script>

export default {
  name: 'WelcomeNote'

}
</script>
