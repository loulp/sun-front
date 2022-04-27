<template>
  <div class="container">
    <form id="form" @submit.prevent="submitForm">
      <div class="formItem">
        <span>Prénom</span>
        <input v-model="$v.form.firstname.$model" type="text" />
        <p
          v-if="$v.form.firstname.$invalid && $v.form.firstname.$dirty"
          class="error"
        >
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Nom</span>
        <input v-model="$v.form.lastname.$model" type="text" />
        <p
          v-if="$v.form.lastname.$invalid && $v.form.lastname.$dirty"
          class="error"
        >
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Email</span>
        <input v-model="$v.form.email.$model" type="text" />
        <p v-if="$v.form.email.$invalid && $v.form.email.$dirty" class="error">
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Adresse</span>
        <input v-model="$v.form.address.$model" type="text" />
        <p
          v-if="$v.form.address.$invalid && $v.form.address.$dirty"
          class="error"
        >
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Ville</span>
        <input v-model="$v.form.city.$model" type="text" />
        <p v-if="$v.form.city.$invalid && $v.form.city.$dirty" class="error">
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Code postal</span>
        <input v-model="$v.form.postalCode.$model" type="text" />
        <p
          v-if="$v.form.postalCode.$invalid && $v.form.postalCode.$dirty"
          class="error"
        >
          Champ invalide
        </p>
      </div>
      <button :disabled="$v.$invalid" type="submit">Valider</button>
    </form>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        firstname: null,
        lastname: null,
        email: null,
        address: null,
        city: null,
        postalCode: null,
      },
    };
  },

  validations: {
    form: {
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      address: {
        required,
      },
      city: {
        required,
      },
      postalCode: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },

  methods: {
    submitForm() {
      if (!this.$v.$invalid) {
        console.log(this.form);
        this.$emit("submitted", this.form);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.formItem {
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 2% auto;
  width: 50%;
  span {
    margin: 3%;
  }

  input {
    border-radius: 25px;
    border: 1px solid #707070;
    padding: 8px;

    &:focus {
      outline: none;
      border-color: #efdebd;
    }
  }

  .error {
    font-size: 12px;
    color: red;
  }
}

button {
  width: fit-content;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  margin: 5%;
  background-color: #efdebd;
  color: white;

  &:disabled {
    background: grey;
  }

  &:focus {
    outline: none;
  }
}
</style>