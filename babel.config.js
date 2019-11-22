module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [
        [
            "import",
            {
                libraryName: "ant-design-vue",
                libraryDirectory: "es",
                // tangtao: 配置加载 less
                // 如果写成 style: "css" 就会加载css 那么覆盖就要使用 css  更加复杂
                style: true
            }
        ]
    ]
};
