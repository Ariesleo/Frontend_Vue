<template>
  <div class="signup-form">
    <h2>Let's sign you in</h2>
    <p>Welcome back, you've been missed!</p>
    <hr />
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <b-icon icon="person-fill"></b-icon>
          </span>
        </div>
        <input
          type="email"
          class="form-control"
          name="email"
          v-model="email"
          placeholder="Email Address"
          required="required"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <b-icon icon="lock-fill"></b-icon>
          </span>
        </div>
        <input
          type="password"
          class="form-control"
          name="password"
          v-model="password"
          placeholder="Password (must be atleast six characters long)"
          required="required"
        />
      </div>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-lg">
        SignIn
        <b-icon icon="box-arrow-in-right"></b-icon>
      </button>
    </div>
    <div class="text-center">
      Don't have an account?
      <router-link to="/register">Register HERE!</router-link>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-lg">
        <i class="fa fa-google"></i>Sign in with Google
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  }
};
</script>
<style scoped>
.form-control {
  font-size: 15px;
}
.form-control,
.form-control:focus,
.input-group-text {
  border-color: #e1e1e1;
}
.form-control,
.btn {
  border-radius: 3px;
}
.btn:hover {
  -webkit-box-shadow: 0 5px 11px 0 rgba(130, 85, 255, 0.28),
    0 4px 15px 0 rgba(113, 36, 255, 0.15);
  box-shadow: 0 5px 11px 0 rgba(144, 85, 255, 0.28),
    0 4px 15px 0 rgba(113, 36, 255, 0.15);
}
.signup-form {
  float: left;
  width: 600px;
  margin: 80px auto;
  padding: 30px 100px;
}
.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.signup-form h2 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
}
.signup-form hr {
  margin: 0 -30px 20px;
}
.signup-form .form-group {
  margin-bottom: 20px;
}
.signup-form label {
  font-weight: normal;
  font-size: 15px;
}
.signup-form .form-control {
  min-height: 38px;
  box-shadow: none !important;
}
.signup-form .input-group-addon {
  max-width: 42px;
  text-align: center;
}
.signup-form .btn,
.signup-form .btn:active {
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  width: 340px;
  background: linear-gradient(180deg, #a95efa 0%, #8a49f7 100%) !important;
  border: none;
  min-width: 140px;
}
.signup-form .btn:hover,
.signup-form .btn:focus {
  background: #7944be !important;
}
.signup-form a {
  color: rgb(15, 14, 14);
  text-decoration: underline;
}
.signup-form a:hover {
  text-decoration: none;
}
.signup-form form a {
  color: #81d8d0;
  text-decoration: none;
}
.signup-form form a:hover {
  text-decoration: underline;
}
.signup-form .fa {
  font-size: 21px;
}
.signup-form .fa-paper-plane {
  font-size: 18px;
}
.signup-form .fa-check {
  color: #fff;
  left: 17px;
  top: 18px;
  font-size: 7px;
  position: absolute;
}
</style>
