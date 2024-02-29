<script setup lang="ts">
defineProps({
    content: String,
})
</script>
<template>
    <div class="h1-component">
        <div class="h1-component__h">
            <h1>О <span class="top">Joki Joya</span></h1>
            <span class="back">Joki Joya</span>
        </div>
        <div class="h1-component__pic">
            <svg fill="none" height="100%" viewBox="0 0 24 24" width="55" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 24C11.652 12.6312 11.3688 12.3492 0 12C11.3688 11.652 11.6508 11.3688 12 0C12.3468 11.3688 12.6312 11.6508 24 12C12.6312 12.3492 12.3492 12.6276 12 24Z"
                    fill="#0267FF"></path>
            </svg>
            <svg fill="none" height="100%" viewBox="0 0 24 24" width="55" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 24C11.652 12.6312 11.3688 12.3492 0 12C11.3688 11.652 11.6508 11.3688 12 0C12.3468 11.3688 12.6312 11.6508 24 12C12.6312 12.3492 12.3492 12.6276 12 24Z"
                    fill="#0267FF"></path>
            </svg>
            <svg fill="none" height="100%" viewBox="0 0 24 24" width="55" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 24C11.652 12.6312 11.3688 12.3492 0 12C11.3688 11.652 11.6508 11.3688 12 0C12.3468 11.3688 12.6312 11.6508 24 12C12.6312 12.3492 12.3492 12.6276 12 24Z"
                    fill="#0267FF"></path>
            </svg>
        </div>
    </div>
</template>
<style scoped lang="scss">
.h1-component {
    font-family: 'DrukWide', sans-serif;
    font-size: 73px;
    font-weight: 500;
    line-height: 72px;
    text-transform: uppercase;
    display: flex;

    &__h {
        position: relative;
        width: fit-content;
        margin-right: 25px;

        .top {
            color: #0267FF;
            position: relative;
            z-index: 2;
        }

        .back {
            color: #abec20;
            right: -1%;
            position: absolute;
            top: 8%;
            width: max-content;
            z-index: 1;
            -webkit-text-stroke: 0.3vw #abec20;
            -webkit-text-fill-color: transparent;
        }
    }

    &__pic {
        display: flex;
    }
}
</style>