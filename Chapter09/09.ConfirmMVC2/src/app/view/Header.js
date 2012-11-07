Ext.define('MyApp.view.Header', {
    alias: 'widget.myapp-header',
    extend: 'Ext.panel.Panel',
    tbar: [{
        xtype: 'tbtext',
        cls: 'header_title',
        text: 'Header'
    }, '->', {
        text: 'リロード',
        action: 'reload'
    }]
});
