<template>
  <div class="default-layout">
    <div class="nav d-flex justify-content-center">
      <router-link to="/"
        ><span class="material-icons"> manage_accounts </span
        >Home</router-link
      >
      <router-link to="/employees"
        ><span class="material-icons"> manage_accounts </span
        >Employees</router-link
      >
      <router-link to="/former-employees"
        ><span class="material-icons"> person_remove </span>Former
        Employees</router-link
      >
    </div>
    <div class="default-layout__context">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  .nav {
    padding: 30px;
    background-color: white;
    border-radius: 0 0 18px 18px;
    margin-bottom: 15px;
    a {
        position: relative;
      display: flex;
      align-items: center;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      &:not(:last-child) {
        margin-right: 25px;
    //     &:after{
    //       content: '';
    //       position: absolute;
    //       width: 1px;
    //       height: 30px;
    //       background-color: green;
    //       right: -8px;
    //   }
      }
      span {
        margin-right: 4px;
      }

      &.router-link-exact-active {
        color: $primay-color;
      }
      
    }
  }
  &__context {
    padding: 15px;
    background-color: $white-color;
    border-radius: 18px 18px 0 0;
  }
}
</style>
