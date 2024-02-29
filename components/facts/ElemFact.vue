
<script setup lang="ts">
import { FACT_DATA } from './fact.data';

</script>
<template>
    <div class="fact-wrapper flex flex-wrap">
        <div v-for="elem in FACT_DATA" :class="{
            'fact flex': true,
            'bg-purple': elem.bgColor === 'purple',
            'bg-black': elem.bgColor === 'black',
            'bg-red': elem.bgColor === 'red',
            'bg-pink': elem.bgColor === 'pink',
            'bg-green': elem.bgColor === 'green',
            'bg-blue': elem.bgColor === 'blue'
        }">
            <div class="fact__title flex">
                <div class="text" v-html="elem.text"></div>
                <u-i-button class="button" :type="'arrow'" :url="'#'" :content="elem.buttonText"></u-i-button>
            </div>
            <div class="fact__img">
                <img :src="`_nuxt/assets/images/facts/${elem.img}.png`" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.fact-wrapper {
    justify-content: flex-end;
    .fact {
        position: relative;
        padding: 30px 40px 25px;
        width: fit-content;
        min-height: 240px;
        width: 33%;
        max-width: 354px;
        background-repeat: no-repeat;
        background-size: cover;

        &__title {
            flex-direction: column;
            justify-content: space-between;
            text-transform: uppercase;
            z-index: 9;

            .text {
                font-family: 'DrukWide', sans-serif;
                font-size: 13px;
                font-weight: 500;
                line-height: 16px;
            }

            .button {
                margin: 0;
            }

        }

        &__img {
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }

    .bg-black {
        background-color: #000000;

    }

    .bg-green {
        background-color: #ABEC20;
        mix-blend-mode: lighten;

    }

    .bg-purple {
        background-color: #A66EFF;
    }

    .bg-blue {
        background-color: #0267ff;
    }

    .bg-red {
        background-color: #f55e20;

    }

    .bg-pink {
        background-color: #F269AF;
    }
}
</style>