Ext.onReady(function() {

    var onReload = function() {
        Ext.Msg.confirm(
            '確認',
            '再読み込みを行います。<br>よろしいですか？',
            function() {
                // some process
            }
        );
    };

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'north',
            bbar: [{
                xtype: 'tbtext',
                cls: 'header_title',
                text: 'Header'
            }, '->', {
                text: 'リロード',
                handler: onReload
            }]
        }, {
            region: 'center',
            title: 'データ一覧',
            tbar: [{
                text: 'リロード',
                handler: onReload
            }],
            bbar: [{
                text: 'リロード',
                handler: onReload
            }]
        }]
    });


/*
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'north',
            bbar: [{
                xtype: 'tbtext',
                cls: 'header_title',
                text: 'Header'
            }, '->', {
                text: 'リロード',
                handler: function() {
                    Ext.Msg.confirm(
                        '確認',
                        '再読み込みを行います。<br>よろしいですか？',
                        function() {
                            // some process
                        }
                    );
                }
            }]
        }, {
            region: 'center',
            title: 'データ一覧',
            tbar: [{
                text: 'リロード',
                handler: function() {
                    Ext.Msg.confirm(
                        '確認',
                        '再読み込みを行います。<br>よろしいですか？',
                        function() {
                            // some process
                        }
                    );
                }
            }],
            bbar: [{
                text: 'リロード',
                handler: function() {
                    Ext.Msg.confirm(
                        '確認',
                        '再読み込みを行います。<br>よろしいですか？',
                        function() {
                            // some process
                        }
                    );
                }
            }]
        }]
    });
   */

});
