Ext.Loader.setConfig({
    enabled: true
});

Ext.onReady(function() {

//    Ext.create(123, {});
    var p = Ext.create('Ext.panel.Panel', {
        title: 'Ext.Loader Debug',
        collapsed: true,
        placeholder: 'foo',
        width: 500,
        height: 300,
        renderTo: Ext.getBody()
    });
    p.hide();


});
