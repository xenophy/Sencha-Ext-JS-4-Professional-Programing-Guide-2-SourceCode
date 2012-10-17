Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    autoCreateViewport: false,
    name: 'MyApp',
    appFolder: '../../src/app',
    controllers: ['Header'],
    launch: function() {
        var header = Ext.create('MyApp.view.Header', {
            renderTo: Ext.getBody()
        });
        Ext.util.Observable.capture(header, function() {
            console.log(arguments);
        });
    }
});
