Ext.onReady(function() {

    var p = Ext.widget('panel', {
        title: 'Toolbar',
        width: 500,
        height: 300,
        renderTo: Ext.getBody(),
        tbar: {
            itemId: 'target',
            items: [{
                text: 'ボタン1'
            }, {
                xtype: 'panel',
                title: 'パネル1',
                width: 80,
                tbar: [{
                    text: 'ボタン2'
                }]
            }, {
                xtype: 'panel',
                title: 'パネル2',
                width: 80,
                tbar: [{
                    text: 'ボタン3'
                }]
            }]
        },
        buttons: [{
            text: '実行',
            handler: function() {
                var ret = p.query('toolbar[dock=top]#target > button');
                Ext.iterate(ret, function(btn) {
                    btn.getEl().highlight();
                });
            }
        }]
    });

});
