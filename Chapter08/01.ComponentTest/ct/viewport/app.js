Ext.Loader.setConfig({
    enabled: true,
    paths: {
        MyApp: '../../src/app/'
    }
});

Ext.require(['MyApp.store.Navi', 'MyApp.model.Navi']);

Ext.onReady(function() {
    Ext.create('MyApp.store.Navi', {
        storeId: 'Navi',
        proxy: {
            type: 'ajax',
            url : '../../navi.php',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });
});

Ext.application({
    autoCreateViewport: true,
    name: 'MyApp',
    appFolder: '../../src/app',
    controllers: ['Main', 'Header', 'Navi', 'Center'],
    launch: function() {
    }
});
