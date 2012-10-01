Ext.onReady(function() {

    Ext.widget('panel', {
        id: 'myPanel',
        title: 'MyPanel',
        width: 500,
        height: 300,
        renderTo: Ext.getBody()
    });

    var p = Ext.getCmp('myPanel');

});
