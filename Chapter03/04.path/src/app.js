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
                type: 'path',
                path: 'M 10 10 L 200 10 L 10 100 z',
                stroke: '#0000FF'
            }]
        }]
    }).show();

});
