// vue.config.js
module.exports = {
    // https://cli.vuejs.org/config/#devserver-proxy
    devServer: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            }
        }
    },
    pages : {
        'index' : {
            entry: 'src/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Welcome',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
        // 'admin-dashboard' : {
        //     entry: 'src/admin-dashboard/dash.js',
        //     template: 'public/index.html',
        //     filename: 'index.html',
        //     title: 'Admin Dashboard',
        //     chunks: ['chunk-vendors', 'chunk-common', 'index'],
        // }
    }
}