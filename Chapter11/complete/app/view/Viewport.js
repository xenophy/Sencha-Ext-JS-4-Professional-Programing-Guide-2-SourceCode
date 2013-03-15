Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'MyApp.view.Header'
    ],
    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'myapp-header',
        region: 'north',
        height: 150
    },{
        xtype: 'container',
        region: 'center'
    }]
});
