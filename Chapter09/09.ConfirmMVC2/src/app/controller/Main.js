Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            'button[action=reload]': {
                click: function(btn) {
                    this.fireEvent('myreload');
                }
            }
        });
        this.on('myreload', function() {
            Ext.Msg.confirm(
                '確認',
                '再読み込みを行います。<br>よろしいですか？',
                function() {
                    // some process
                }
            );
        });
    }
});
