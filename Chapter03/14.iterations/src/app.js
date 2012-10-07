Ext.onReady(function() {

    Ext.create('Ext.fx.Anim', {
        target: Ext.get('anim'),
        duration: 1000,
        iterations: 5,
        from: {
            width: 100,
            height: 100
        },
        to: {
            width: 300,
            height: 300
        }
    });

});
