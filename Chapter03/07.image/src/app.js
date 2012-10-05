Ext.onReady(function() {

    var win = Ext.widget('window', {
        title: 'Ext.draw',
        width: 500,
        height: 300,
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [{
            xtype: 'draw',
            viewBox: false,
            items: [{
                type: 'image',
                x: 50,
                y: 50,
                width: 372,
                height: 140,
                src: 'http://www.sencha.com/img/sencha-large.png'
            }]
        }]
    }).show();

});
