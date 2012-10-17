Ext.Loader.setConfig({
    enabled: true,
    paths: {
        MyApp: '../../src/app/'
    }
});

Ext.onReady(function() {
    Ext.create('MyApp.view.Header', {
        renderTo: Ext.getBody()
    });
});
