Ext.define('MyApp.view.Navi', {
    alias: 'widget.myapp-navi',
    extend: 'Ext.tree.Panel',
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
    animate: false
});
