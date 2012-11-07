Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    autoCreateViewport: true,
    name: 'MyApp',
    appFolder: 'src/app',
    controllers: ['Main'],
    launch: function() {
    }
});
