Ext.onReady(function() {

    Ext.widget('window', {
        title: 'Ext.draw',
        width: 400,
        height: 300,
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [{
            xtype: 'draw',
            items: [{
                type: 'rect',
                fill: '#ffffff',
                x: 45,
                y: 30,
                width: 300,
                height: 200
            },{
                type: 'circle',
                fill: '#ff0000',
                radius: 60,
                x: 200,
                y: 130
            }]
        }]
    }).show();

});
