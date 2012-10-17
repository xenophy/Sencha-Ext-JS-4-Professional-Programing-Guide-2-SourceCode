Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'header',
        selector: 'myapp-header'
    }, {
        ref: 'navi',
        selector: 'myapp-navi'
    }],
    views: ['Header', 'Navi', 'Center'],
    init: function() {
        this.control({
            'myapp-header': {
                toggleCollapseNavigation: function(pressed) {
                    this.getNavi().toggleCollapse();
                },
                reloadNavigation: this.reloadNavi
            },
            'myapp-navi': {
                reloadNavigation: this.reloadNavi
            }
        });
    },
    reloadNavi: function() {
        this.getNavi().getStore().load();
    }
});
