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
                type: 'rect',
                width: 300,
                height: 200,
                fill: '#FFFF00',
                x: 25,
                y: 25
            }]
        }]
    }).show();

});
