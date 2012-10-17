Ext.define('MyApp.controller.Navi', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'navi', selector: 'myapp-navi'
    }],
    models: ['Navi'],
    stores: ['Navi'],
    init: function() {
        this.control({
            'myapp-header': {
                doReloadNavi: this.onReload
            },
            'myapp-navi button[action=reload]': {
                click: function(){
                    this.onReload();
                }
            }
        });
    },
    onReload: function() {
        this.getNavi().getStore().load();
    }
});
