Ext.onReady(function() {

    var win = Ext.widget('window', {
        title: 'Ext.draw',
        width: 500,
        height: 300,
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [{
            xtype: 'draw',
            viewBox: false,
            items: [{
                type: 'text',
                text: 'Text',
                scale: {
                    x: 10,
                    y: 10
                },
                x: 330,
                y: 100
            }]
        }]
    }).show();

});
