Ext.onReady(function() {

    var p = Ext.widget('panel', {
        title: 'Toolbar',
        width: 500,
        height: 300,
        renderTo: Ext.getBody(),
        tbar: [{
            text: 'ボタン1'
        }, {
            text: 'ボタン2'
        }, {
            text: '保存',
            itemId: 'saveBottun'
        }],
        buttons: [{
            text: '実行',
            handler: function() {
                var ret = p.query('toolbar[dock=top] button#saveBottun');
                Ext.iterate(ret, function(btn) {
                    btn.getEl().highlight();
                });
            }
        }]
    });

});
