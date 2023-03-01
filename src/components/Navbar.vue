<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    name: "Navbar",
};
</script>
  
<style>
nav {
    background-color: #333;
    color: #fff;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
}

li {
    padding: 1rem;
}

a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}
</style>
  