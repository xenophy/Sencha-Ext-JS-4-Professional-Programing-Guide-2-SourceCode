Ext.onReady(function() {

    var win = Ext.widget('window', {
        title: 'anim',
        width: 500,
        height: 300,
        buttons: [{
            text: '実行',
            handler: function() {
                Ext.create('Ext.fx.Anim', {
                    target: win,
                    duration: 250,
                    easing: 'ease',
                    to: {
                        width: 300,
                        height: 100
                    }
                });
            }
        }]
    }).show();

});
