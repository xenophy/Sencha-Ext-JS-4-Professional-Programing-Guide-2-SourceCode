Ext.define('MyApp.view.Viewport', {
    uses: [
        'MyApp.view.Header',
        'MyApp.view.Navi',
        'MyApp.view.Center'
    ],
    layout: {
        type: 'border',
        padding: 5
    },
    extend: 'Ext.container.Viewport',
    items: [{
        xtype: 'myapp-header',
        height: 80,
        padding: '0 0 5 0',
        region: 'north'
    }, {
        xtype: 'myapp-navi',
        region: 'west',
        split: true,
        width: 240
    }, {
        xtype: 'myapp-center',
        region: 'center'
    }]
});
