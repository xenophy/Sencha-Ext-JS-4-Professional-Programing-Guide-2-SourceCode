Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'container',
        region: 'north',
        height: 150
    }]


    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    region: 'center'
                },
            ]
        });

        me.callParent(arguments);
    }
});
