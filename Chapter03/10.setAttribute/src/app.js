Ext.onReady(function() {

    var win = Ext.widget('window', {
        title: 'Ext.draw',
        width: 500,
        height: 500,
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [{
            xtype: 'draw',
            viewBox: false,
            items: [{
                id: 'rect1',
                type: 'rect',
                width: 300,
                height: 200,
                fill: '#FF00FF',
                x: 100,
                y: 100
            }]
        }],
        buttons: [{
            text: '属性変更',
            handler: function() {

                var draw = win.down('.draw'),
                    surface = draw.surface,
                    sprites = surface.items,
                    sprite;

                sprite = sprites.get('rect1');

                sprite.setAttributes({
                    translate: {
                        x: 10,
                        y: 10
                    }
                }, true);

                sprite.setAttributes({
                    fill: '#FF0000',
                    rotate: {
                        degrees: 30
                    }
                }, true);

                sprite.setAttributes({
                    scale: {
                        cx: 0,
                        cy: 0,
                        x: 1.2,
                        y: 0.8
                    }
                }, true);

            }
        }]

    }).show();

});
