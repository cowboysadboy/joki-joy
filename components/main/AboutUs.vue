<script setup lang="ts">
import { ABOUT_DATA } from './about.data';

</script>

<template>
    <section v-for="elem, i in  ABOUT_DATA " :key="i" class="about-us flex justify-between">
        <div class="about-us__title flex">
            <h3 class="about-us__h">{{ elem.title }}</h3>
            <img v-if="i % 2 === 0" src="~/assets/images/flower.svg" alt="Иконка">
            <img v-else src="~/assets/images/rhombus.svg" alt="Иконка" />
        </div>
        <div class="about-us__text">
            <p class="about-us__p" v-html="elem.content"></p>
            <u-i-button v-if="elem.buttonText" class="about-us__button" :type="'arrow'" :url="elem.buttonUrl"
                :content="elem.buttonText"></u-i-button>
        </div>
    </section>
</template>
<style scoped lang="scss">
.about-us {
    margin: 90px 0;

    &__title {
        padding: 20px 101px;
        flex-direction: column;
        justify-content: space-between;
        font-family: 'DrukWide', sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 16px;
        text-transform: uppercase;
    }

    &__text {
        column-gap: 141px;
        column-count: 2;

        .about-us__p {
            max-width: 337px;
        }

        .about-us__button {
            margin: 20px 0;
        }
    }
}
</style>