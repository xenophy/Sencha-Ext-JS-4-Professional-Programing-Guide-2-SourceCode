Ext.onReady(function() {

    var p = Ext.widget('panel', {
        title: 'Toolbar',
        width: 500,
        height: 320,
        renderTo: Ext.getBody(),
        tbar: [{
            text: 'ボタン'
        }],
        bodyPadding: 10,
        layout: 'hbox',
        defaults: {
            margin: 10
        },
        items: [{
            xtype: 'datepicker'
        }, {
            xtype: 'colorpicker'
        }, {
            xtype: 'button',
            text: 'ボタン'
        }],
        buttons: [{
            text: '実行',
            handler: function() {
                var ret = p.query('toolbar button, colorpicker');
                Ext.iterate(ret, function(btn) {
                    btn.getEl().highlight();
                });
            }
        }]
    });

});
