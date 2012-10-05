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
                stroke: '#FF0000',
                'stroke-width': 5,
                radius: 100,
                x: 150,
                y: 130
            }]
        }]
    }).show();

});
