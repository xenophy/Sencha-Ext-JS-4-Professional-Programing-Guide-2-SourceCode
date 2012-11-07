Ext.define('MyApp.store.Navi', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'MyApp.model.Navi'
    ],
    model: 'MyApp.model.Navi'
});
