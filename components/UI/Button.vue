
<script setup lang="ts">
defineProps({
    content: String,
    type: String,
    bg_color: String,
    url: String,
})
</script>

<template>
    <a :href="url" :class="{
        'menu-button-link': true,
        'bg-green': bg_color === 'green',
        'bg-pink': bg_color === 'pink',
        'arrow': type === 'arrow',
        'phone': type === 'phone',
    }">
        <div v-if="type === 'phone'" class="phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 26 26">
                <path fill="#5834A4"
                    d="M22.386 18.026c-1.548-1.324-3.119-2.126-4.648-.804l-.913.799c-.668.58-1.91 3.29-6.712-2.234c-4.801-5.517-1.944-6.376-1.275-6.951l.918-.8c1.521-1.325.947-2.993-.15-4.71l-.662-1.04C7.842.573 6.642-.552 5.117.771l-.824.72c-.674.491-2.558 2.087-3.015 5.119c-.55 3.638 1.185 7.804 5.16 12.375c3.97 4.573 7.857 6.87 11.539 6.83c3.06-.033 4.908-1.675 5.486-2.272l.827-.721c1.521-1.322.576-2.668-.973-3.995z" />
            </svg>
        </div>
        <div v-if="type === 'place'" class="place">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28">
                <path fill="#5834A4"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
            </svg>
        </div>
        {{ content }}
        <div v-if="type === 'arrow'" class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                <path fill="black"
                    d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z" />
            </svg>
        </div>
    </a>
</template>

<style scoped lang="scss">
.menu-button-link {
    margin: 0 10px;
    width: fit-content;
    box-sizing: border-box;
    border: 2px solid rgb(88, 52, 164);
    color: rgb(88, 52, 164);
    border-radius: 30px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    font-family: 'DrukCyr', sans-serif;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 3%;
}

.bg-green {
    padding: 0 30px;
    background: #ABEC20;
    color: black;
    border: none;
}

.bg-pink {
    padding: 0 30px;
    background: #F269AF;
    color: white;
    border: none;
}

.arrow {
    color: black;
    border-color: black;
}

.phone {
    font-family: 'DrukWide', sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 3%;

}
</style>