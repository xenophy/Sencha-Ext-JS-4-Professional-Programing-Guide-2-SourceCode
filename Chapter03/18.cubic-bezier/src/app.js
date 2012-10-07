Ext.onReady(function() {

    Ext.create('Ext.fx.Anim', {
        target: Ext.get('anim'),
        duration: 1000,
        easing: 'cubic-bezier(0, .2, .1, .9)',
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
