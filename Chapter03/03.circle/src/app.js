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
                type: 'circle',
                fill: '#FF0000',
                radius: 100,
                x: 100,
                y: 100
            }]
        }]
    }).show();

});
