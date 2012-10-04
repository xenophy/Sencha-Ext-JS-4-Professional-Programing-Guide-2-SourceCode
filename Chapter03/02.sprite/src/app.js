Ext.onReady(function() {

    var win = Ext.widget('window', {
        title: 'Ext.draw',
        width: 400,
        height: 300,
        renderTo: Ext.getBody(),
        layout: 'fit',
        resizable: false,
        items: [{
            xtype: 'draw'
        }],
        buttons: [{
            text: 'スプライト追加',
            handler: function() {
                win.down('draw').surface.add({
                    type: 'circle',
                    fill: Ext.String.format('#{0}{1}{2}',
                        Math.floor(Math.random()*256).toString(16),
                        Math.floor(Math.random()*256).toString(16),
                        Math.floor(Math.random()*256).toString(16)
                    ),
                    radius: 100,
                    x: Math.floor(Math.random()*300),
                    y: Math.floor(Math.random()*300)
                }).show(true);
            }
        }]
    }).show();

});

