Ext.define('MyApp.view.Viewport', {
    uses: [
        'MyApp.view.Header',
        'MyApp.view.Center'
    ],
    layout: 'border',
    extend: 'Ext.container.Viewport',
    items: [{
        xtype: 'myapp-header',
        height: 80,
        padding: '0 0 5 0',
        region: 'north'
    }, {
        xtype: 'myapp-center',
        region: 'center'
    }]
});
