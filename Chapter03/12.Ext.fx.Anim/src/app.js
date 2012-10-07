Ext.onReady(function() {

    Ext.create('Ext.fx.Anim', {
        target: Ext.get('anim'),
        duration: 1000,
        to: {
            width: 300,
            height: 300
        }
    });

});
