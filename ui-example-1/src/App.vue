<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/shop">Shop</router-link>|
      <router-link to="/collaboration">Collaboration</router-link>|
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(204, 169, 139);
  /* display: grid;
  align-items: center;
  justify-content: center; */
  
}
#nav {
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(100%, 100%);
  padding: 30px;
  z-index: 10;
}

#nav a {
  font-weight: bold;
  font-size: 34px;
  color: #db853f;
}

#nav a.router-link-exact-active {
  color: #5d7477;
}
</style>
