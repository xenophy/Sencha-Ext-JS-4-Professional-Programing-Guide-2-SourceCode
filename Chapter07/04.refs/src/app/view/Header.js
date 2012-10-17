Ext.define('MyApp.view.Header', {
    alias: 'widget.myapp-header',
    extend: 'Ext.container.Container',
    defaults: {
        xtype: 'container'
    },
    layout: 'hbox',
    items: [{
        html: {
            tag: 'h1',
            html: 'My Application'
        },
        flex: 1
    }, {
        xtype: 'toolbar',
        items: [{
            text: 'ボタン1',
            enableToggle: true,
            action: 'button1'
        }, {
            text: 'ボタン2',
            action: 'button2'
        }, {
            text: 'ボタン3',
            action: 'button3'
        }]
    }]
});
