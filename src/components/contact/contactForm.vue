<template>
  <div class="container">
    <div class="header">
      <h2>Contactez-nous</h2>
      <p>
        Pour toute demande d'information, merci de renseigner le formulaire
        ci-dessous. Nous vous répondrons dans les meilleurs délais.
      </p>
      <p>Vous pouvez aussi me contacter via ma page Instagram :</p>
      <a href="https://www.instagram.com/s.u.n.jewelry/" target="_blank">
        <img src="../../assets/instaWhite.svg" class="icon" alt="" />
      </a>
    </div>
    <div class="formContainer" v-if="!mailSent">
      <form @submit.prevent="submitForm" id="form" v-if="!loading">
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
          <p
            v-if="$v.form.email.$invalid && $v.form.email.$dirty"
            class="error"
          >
            Champ invalide
          </p>
        </div>
        <div class="formItem">
          <span>Sujet</span>
          <input v-model="$v.form.subject.$model" type="text" />
          <p
            v-if="$v.form.subject.$invalid && $v.form.subject.$dirty"
            class="error"
          >
            Champ invalide
          </p>
        </div>
        <!-- TODO Messages reçu dans le mail en une ligne, voir si moyen de garde le format -->
        <div class="formItem">
          <span>Message</span>
          <textarea
            v-model="$v.form.message.$model"
            rows="10"
            cols="33"
          ></textarea>
          <p
            v-if="$v.form.message.$invalid && $v.form.message.$dirty"
            class="error"
          >
            Champ invalide
          </p>
        </div>
        <button :disabled="$v.$invalid" type="submit">Envoyer</button>
      </form>
      <div class="loaderContainer" v-if="loading">
        <p>Envoi du mail...</p>
        <spinner v-if="loading" />
        <!-- <ring-loader
          :loading="loading"
          :color="'#d44a7b'"
          :size="'50px'"
        ></ring-loader> -->
      </div>
    </div>
    <div class="informationContainer" v-if="mailSent">
      <div class="info successContainer" v-if="mailSentSuccess">
        <h2>Message envoyé !</h2>
        <p>
          Votre message m'a bien été envoyé ! Je vous répondrais dans les plus
          brefs délais. <br />Typhen
        </p>
      </div>
      <div class="info failedContainer" v-if="mailSentFailed">
        <h2>Une erreur est survenue</h2>
        <p>
          Une erreur est survenue et votre message ne m'a pas été envoyé. Vous
          pouvez retenter de m'envoyer votre message ou me contactez via ma page
          instagram ! <br />Typhen
        </p>
        <a href="https://www.instagram.com/s.u.n.jewelry/" target="_blank">
          <img src="../../assets/insta.svg" class="icon" alt="" />
        </a>
        <button @click="retry()">Réessayer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import contactService from "@/shared/services/contact.services";
import Spinner from "../../shared/components/spinner.vue";

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      loading: false,
      mailSent: false,
      mailSentSuccess: false,
      mailSentFailed: false,
      form: {
        firstname: null,
        lastname: null,
        email: null,
        subject: null,
        message: null,
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
      subject: {
        required,
      },
      message: {
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
        this.loading = true;
        contactService.sendMail(this.form).then(
          (res) => {
            this.loading = false;
            this.mailSent = true;
            this.mailSentSuccess = true;
          },
          (err) => {
            this.loading = false;
            this.mailSent = true;
            this.mailSentFailed = true;
            console.log(err);
          }
        );
      }
    },

    retry() {
      this.mailSent = false;
      this.mailSentSuccess = false;
      this.mailSentFailed = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/shared/styles/form.scss";
@import "../../shared/styles/variables.scss";

.container {
  .icon {
    width: 40px;
  }

  .header {
    width: 100%;
    background-color: #66859d;
    text-align: center;
    padding: 3% 0;

    h2 {
      margin-top: 0;
      color: white;
    }

    p {
      width: 33%;
      margin: auto;
      margin-bottom: 15px;
      color: white;

      @media screen and (max-width: 660px) {
        width: 75%;
      }
    }
  }

  .formContainer {
    #form {
      margin: auto;
      width: 75%;
    }

    .loaderContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .informationContainer {
    width: 50%;
    margin: auto;
    text-align: center;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      button {
        margin-top: 3%;
        width: fit-content;
        background-color: $mainColor;
        color: white;
        border: none;
        padding: 2% 3%;
        font-size: 18px;
        cursor: pointer;
      }
    }

    .successContainer {
      h2 {
        color: #3ea84b;
      }
    }

    .failedContainer {
      h2 {
        color: #c43737;
      }
    }
  }

  margin-bottom: 3%;
}
</style>