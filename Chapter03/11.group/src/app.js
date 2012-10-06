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
                group: 'mygroup',
                type: 'rect',
                width: 20,
                height: 20,
                fill: '#FF0000',
                x: 20,
                y: 20
            }, {
                group: 'mygroup',
                type: 'rect',
                width: 20,
                height: 20,
                fill: '#FFFF00',
                x: 50,
                y: 50
            }, {
                group: 'mygroup',
                type: 'rect',
                width: 20,
                height: 20,
                fill: '#00FFFF',
                x: 50,
                y: 90
            }]
        }],
        buttons: [{
            text: '移動',
            enableToggle: true,
            toggleHandler: function(btn, toggle) {
                win.down('.draw').surface.getGroup('mygroup').animate({
                    duration: 750,
                    to: {
                        translate: {
                            y: toggle ? 200 : 0
                        }
                    }
                });
            }
        }]
    }).show();

});
