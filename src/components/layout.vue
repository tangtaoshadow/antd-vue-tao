<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1>Layout</h1>
        <h2>子组件显示</h2>
        <router-view />

        <!-- <p>
            111
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </p>

        <p>{{ label }}</p>
        <button @click="switchLang">切换</button> -->
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "layout",
    props: {
        msg: String
    },
    computed: {
        ...mapState(["lang"]),
        label() {
            return this.$t("global.username");
        }
    },
    methods: {
        switchLang() {
            // console.log(mapState(["lang"]));
            let lang = "";
            if (this.lang === "zhCN") {
                lang = "en";
            } else {
                lang = "zhCN";
            }
            console.log("switchLang");
            this.$store.commit("switchLang", lang);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
