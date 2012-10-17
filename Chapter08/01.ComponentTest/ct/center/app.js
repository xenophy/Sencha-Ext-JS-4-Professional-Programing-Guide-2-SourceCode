Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    autoCreateViewport: false,
    name: 'MyApp',
    appFolder: '../../src/app',
    controllers: ['Center'],
    launch: function() {
        var center = Ext.create('MyApp.view.Center', {
            renderTo: Ext.getBody()
        });
        Ext.util.Observable.capture(center, function() {
            console.log(arguments);
        });
    }
});
