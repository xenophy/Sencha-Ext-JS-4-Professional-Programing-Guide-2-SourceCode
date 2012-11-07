Ext.define('MyApp.view.Center', {
    alias: 'widget.myapp-center',
    extend: 'Ext.panel.Panel',
    title: 'データ一覧',
    tbar: [{
        text: 'リロード',
        action: 'reload'
    }],
    bbar: [{
        text: 'リロード',
        action: 'reload'
    }]
});
