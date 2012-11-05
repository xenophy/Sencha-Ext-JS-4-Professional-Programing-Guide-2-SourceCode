Ext.onReady(function() {

    Ext.create('Ext.container.Viewport', {
        title: 'Layout Optimized',
        layout: 'fit',
        padding: 10,
        items: [{
            xtype: 'container',
            layout: 'fit',
            items: [{
                xtype: 'container',
                items: [{
                    xtype: 'button',
                    text: 'ボタン'
                }]
            }]
        }]
    });
});
