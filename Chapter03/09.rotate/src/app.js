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
                width: 200,
                height: 100,
                fill: '#FF00FF',
                x: 100,
                y: 20,
                rotate: {
                    x: 100,
                    y: 100,
                    degrees: 30
                }
            }]
        }]
    }).show();

});
