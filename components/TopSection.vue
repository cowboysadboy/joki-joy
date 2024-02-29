<template>
    <div class="header-section">
        <img class="header-section__img" src="~/assets/images/img-header.png" alt="picture">
        <div class="header-section__h flex justify-between items-start">
            <UIH1Component />
            <div class="img-block">
                <img class="" src="~/assets/images/welvome.png" alt="picture">
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.header-section {
    margin-top: -80px;

    &__img {
        width: 100%;
        border-radius: 28px;
    }

    &__h {
        margin-top: 40px;
    }
}
</style>