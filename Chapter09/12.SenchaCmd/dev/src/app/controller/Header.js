Ext.define('MyApp.controller.Header', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'header',
        selector: 'myapp-header'
    }],
    init: function() {
        this.control({
            'myapp-header button[action=button1]': {
                toggle: function(btn, pressed) {
                    this.getHeader().fireEvent('toggleCollapseNavigation', pressed);
                }
            },
            'myapp-header button[action=button2]': {
                click: function() {
                    var header = this.getHeader();
                    header.getEl().ghost('b', {
                        callback: function() {
                            header.hide();
                            Ext.Function.defer(function() {
                                header.show();
                            }, 3000);
                        }
                    });
                }
            },
            'myapp-header button[action=button3]': {
                click: function() {
                    this.getHeader().fireEvent('reloadNavigation');
                }
            }
        });
    }
});
