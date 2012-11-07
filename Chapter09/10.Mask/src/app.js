Ext.onReady(function() {

    var onMask = function() {
        /*
        Ext.Msg.alert(
            '確認',
            '○○しますか？',
            function() {
                // some process
            }
        );
        */
        alert('○○しますか？');
        // some process
    };

    Ext.create('Ext.container.Viewport', {
        title: 'Mask',
        layout: 'fit',
        items: [{
            tbar: [{
                text: 'マスク',
                handler: onMask
            }]
        }]
    });
});
