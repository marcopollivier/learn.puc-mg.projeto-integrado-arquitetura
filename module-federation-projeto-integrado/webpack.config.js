const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: "main",
            remotes: {
                // Local para definicao dos microfronts 
            },
            shared: ["react", "react-dom"],
        })
    ]
}