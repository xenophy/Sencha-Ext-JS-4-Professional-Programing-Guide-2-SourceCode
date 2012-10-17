Ext.define('MyApp.controller.Navi', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'navi', selector: 'myapp-navi'
    }],
    models: ['Navi'],
    stores: ['Navi'],
    init: function() {
    }
});
