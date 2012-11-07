Ext.define('MyApp.view.Navi', {
    alias: 'widget.myapp-navi',
    extend: 'Ext.tree.Panel',
    requires: [
        'MyApp.store.Navi'
    ],
    title: 'Navi',
    store: 'Navi',
    hideHeaders: true,
    columns: [{
        xtype    : 'treecolumn',
        text     : 'Name',
        flex     : 1,
        dataIndex: 'textdata'
    }],
    rootVisible: false,
    animate: false,
    tbar: [{
        xtype: 'button',
        action: 'reload',
        text: 'リロード'
    }]
});
