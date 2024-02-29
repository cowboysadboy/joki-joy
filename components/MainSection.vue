
<template>
    <div class="main flex justify-center">
        <div class="main__right">
            <MainAboutUs />
            <section>
                <FactsElemFact />

            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main {
    padding-left: 65px;
    background: url(~/assets/images/main.svg) repeat-y;

    &__left {
        width: 5%;
        min-width: 72px;
        // background: url(~/assets/images/main.svg) repeat-y;
        background-size: 100% auto;
        grid-area: sidebar;
        position: relative;
    }

    &__right {
        width: -webkit-fill-available;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
}
</style>