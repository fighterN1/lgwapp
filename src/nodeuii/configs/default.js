import path from 'path';
const config = {
    port: process.env.PORT || 3000,
    controllerConf: path.join(__dirname, '../controllers/'),
    assetsConf: path.join(__dirname, '../assets'),
    viewsConf: path.join(__dirname, '../views'),
    log: {
        appenders: {
            everything: { type: 'datefile',
                filename: path.join(__dirname, '../logs/cheese.log'),
                layout: {type:'basic'},
                pattern: '.yyyy-MM-dd',
                alwaysIncludePattern: true, }
        },
        categories: {
            default: { appenders: [ 'everything' ], level: 'info'}
        },
    },
};

export default config;