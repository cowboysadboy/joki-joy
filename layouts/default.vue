<template>
    <div class="flex flex-wrap">
        <Header />
        <div class="sidebar">
            <LayoutSidebar />
        </div>
        <div class="content">
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>
<style lang="scss">

.content {
    @media screen and (max-width:1385px) {
        margin-left: 64px;
    }

    width: 100%;
}
</style>