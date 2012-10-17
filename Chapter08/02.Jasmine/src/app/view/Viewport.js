Ext.define('MyApp.view.Viewport', {
    layout: {
        type: 'border',
        padding: 5
    },
    uses: [
        'MyApp.view.Header',
        'MyApp.view.Navi',
        'MyApp.view.Center'
    ],
    extend: 'Ext.container.Viewport',
    items: [{
        xtype: 'myapp-header',
        padding: '0 0 5 0',
        region: 'north'
    }, {
        xtype: 'myapp-navi',
        region: 'west',
        collapsible: true,
        split: true,
        width: 240
    }, {
        xtype: 'myapp-center',
        region: 'center'
    }]
});
