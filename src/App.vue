<template>
    <div>
        <router-view />
        <!-- 加入空白占位符 -->
        <div style="height: 1000px;"></div>
        <!-- 底部版权栏 -->
        <footer>
            <p style="color: #fff;">&copy; 2023 ProPep. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
export default {};
</script>

<style>
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css";
</style>
