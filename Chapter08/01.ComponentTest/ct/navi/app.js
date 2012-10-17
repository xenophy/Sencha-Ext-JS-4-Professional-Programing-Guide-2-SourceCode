Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    autoCreateViewport: false,
    name: 'MyApp',
    appFolder: '../../src/app',
    controllers: ['Navi'],
    launch: function() {
        var store = Ext.StoreManager.get('Navi');
        store.proxy.url = '../../navi.php';
        var navi = Ext.create('MyApp.view.Navi', {
            width: 250,
            height: 400,
            renderTo: Ext.getBody()
        });
        Ext.util.Observable.capture(navi, function() {
            console.log(arguments);
        });
    }
});
