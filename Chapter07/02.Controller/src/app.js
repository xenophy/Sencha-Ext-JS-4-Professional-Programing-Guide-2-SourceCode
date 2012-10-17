Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'MyApp',
    appFolder: 'src/app',
    controllers: ['Main'],
    launch: function() {
        alert('Launch My App.');
    }
});
