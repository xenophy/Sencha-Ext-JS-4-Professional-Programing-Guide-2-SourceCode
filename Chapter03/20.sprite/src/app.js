Ext.onReady(function() {

    var circle;
    var win = Ext.widget('window', {
        title: 'Ext.draw',
        width: 400,
        height: 300,
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [{
            xtype: 'draw'
        }],
        buttons: [{
            text: 'アニメーション開始',
            handler: function() {
                Ext.create('Ext.fx.Anim', {
                    target: circle,
                    duration: 250,
                    easing: 'ease',
                    to: {
                        x: Math.floor(Math.random()*256),
                        y: Math.floor(Math.random()*256)
                    }
                });
            }
        }]
    }).show();

    circle = win.down('draw').surface.add({
        id: 'circle1',
        type: 'circle',
        fill: Ext.String.format('#{0}{1}{2}',
            Math.floor(Math.random()*256).toString(16),
            Math.floor(Math.random()*256).toString(16),
            Math.floor(Math.random()*256).toString(16)
        ),
        radius: 100,
        x: 100,
        y: 100
    }).show(true);

});
