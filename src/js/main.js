require.config({
    baseUrl: './js/',
    paths: {
        'swiper': './libs/swiper.min',
        'index': './app/index'
    }
});
require(['index']);