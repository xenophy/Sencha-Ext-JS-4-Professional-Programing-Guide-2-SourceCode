Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    requires: [
        'MyApp.controller.Main',
        'MyApp.controller.Navi',
        'MyApp.controller.Center',
        'MyApp.controller.Header'
    ],
    autoCreateViewport: true,
    name: 'MyApp',
    appFolder: 'src/app',
    controllers: ['Main', 'Header', 'Navi', 'Center'],
    launch: function() {
    }
});
