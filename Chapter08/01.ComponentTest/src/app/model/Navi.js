Ext.define('MyApp.model.Navi', {
    extend : 'Ext.data.Model',
    fields: [
        {name: 'textdata', type: 'string'}
    ],
    proxy: {
        type: 'ajax',
        url : './navi.php',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});
