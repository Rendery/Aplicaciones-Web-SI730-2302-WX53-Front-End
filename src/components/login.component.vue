<template>
  <div class="containe">
    <div class="row">
      <label>email</label>
      <pv-input-text id="email" v-model="email"></pv-input-text>
    </div>
    <br />
    <div class="row">
      <label>password</label>
      <pv-input-text id="username" v-model="password"></pv-input-text>
    </div>
    <pv-button @click="login()">login</pv-button>
  </div>
</template>

<script>
import { SecurityService } from "@/services/security.service";

export default {
  name: "login.component",
  data() {
    return {
      email: "",
      password: "",
      securityService: new SecurityService(),
    };
  },
  methods: {
    login() {
      this.securityService
        .login(this.email, this.password)
        .then((response) => {
          if (response.data.accessToken) this.$router.push("/Home");
          else alert("Error en usuario y/o password");
        })
        .catch((error) => {
          alert("Error en usuario y/o password");
        });
    },
  },
};
</script>

<style scoped>
.containe {
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
