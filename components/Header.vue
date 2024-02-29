
<template>
    <header class="header py-3 bg-color-red w-full relative">
        <div class="logo px-3">
            <nuxt-link to="#">
                <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5248 24.1667H14.3004C24.352 24.1667 26.6667 17.4768 26.6667 12.5475V0H19.2469V12.3554C19.2469 15.9724 17.4396 18.245 13.5711 18.245H13.1906C8.08561 18.245 7.57828 14.7241 7.48315 13.6678H0V13.8598C0 18.3731 2.6952 24.1667 12.5248 24.1667Z"
                        fill="#0267FF"></path>
                    <path
                        d="M25.8578 39.9997H27.6334C37.685 39.9997 39.9997 33.3098 39.9997 28.3805V15.833H32.5799V28.1884C32.5799 31.8054 30.7726 34.078 26.9042 34.078H26.5237C21.4186 34.078 20.9113 30.5571 20.8162 29.5008H13.333V29.6928C13.333 34.2061 16.0282 39.9997 25.8578 39.9997Z"
                        fill="#F269AF"></path>
                </svg></nuxt-link>
        </div>
        <div class="buttons-section container flex  justify-between">
            <div class="buttons-left flex">
                <u-i-button :type="'phone'" :url="'tel:8889889'" :content="'+7988988898'"></u-i-button>
                <u-i-button :type="'place'" :url="'#'" :content="'Москва'"></u-i-button>
            </div>
            <div class="button-right flex">
                <u-i-button :bg_color="'green'" :url="'#'" :content="'Заказать праздник'"></u-i-button>
                <u-i-button :bg_color="'pink'" :url="'#'" :content="'Купить билеты'"></u-i-button>
            </div>
        </div>
        <div class="burger-menu px-3">
            <div class="burger-menu__burger">
                <svg data-v-a81738bd="" xmlns="http://www.w3.org/2000/svg" width="45" height="35" viewBox="0 0 24 24">
                    <path data-v-a81738bd="" fill="#0267FF" d="M3 0h18v2H3zm0 6h15v2H3zm0 6h18v2H3z"></path>
                </svg>
            </div>
            <span class="burger-menu__text">меню</span>
        </div>
    </header>
</template>
<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(5px);
    z-index: 9999;

    .burger-menu {
        cursor: pointer;

        &__burger {
            margin-top: -12px;
            margin-bottom: -5px;
            transform: rotate(180deg) translate(0%);
        }

        &__text {
            font-family: 'Montserrat', sans-serif;
            font-size: 11px;
            font-weight: 700;
            line-height: 16px;
            text-transform: uppercase;
            color: #0267FF;

        }
    }
}
</style>
