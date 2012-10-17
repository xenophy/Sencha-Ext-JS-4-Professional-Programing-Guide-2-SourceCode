Ext.Loader.setConfig({
    enabled: true,
    paths: {
        MyApp: './app/'
    }
});

Ext.require(['Ext.app.Application', 'MyApp.store.Navi', 'MyApp.model.Navi']);

var Application = null;

Ext.onReady(function() {
    Ext.create('MyApp.store.Navi', {
        storeId: 'Navi',
        proxy: {
            type: 'ajax',
            url : '../navi.php',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });
});

Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        autoCreateViewport: true,
        name: 'MyApp',
        appFolder: './app',
        controllers: ['Main', 'Header', 'Navi', 'Center'],
        launch: function() {
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
        }
    });
});
