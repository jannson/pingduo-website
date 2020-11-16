
const title = "品多PINTOS智能锁 - 官网"
const keywords = `品多智能锁,智能锁,指纹锁,人脸识别智能锁,华为智能锁`
const description = `PINTOS智能门锁,联动华为HiLink智能家居,全屋智能指纹门锁,3D结构光人脸识别智能锁。`
export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    router: {
        base: '/'
    },
    head: {
        title: title || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
            { name: "keywords", content: keywords },
            { hid: 'description', name: 'description', content: description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '~/css/main.css',
        '~/css/normalize.css',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
        '@nuxtjs/bulma',
    ],
    //   rootDir: 'dist/',
    /*
    ** Build configuration
    */
    build: {
        //   publicPath: 'https://pintos.cn/dist/',
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
        ** You can extend webpack config here
        */
        // extend(config, ctx) {
        //     if(!ctx.isDev){
        //         config.output.publicPath = './_nuxt/';
        //     }
        // }
    },
    generate: {
        dir: 'dist'
    }
}
