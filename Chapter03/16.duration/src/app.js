Ext.onReady(function() {

    Ext.get('anim').setWidth(500, {
        duration: Ext.fx.Anim.prototype.duration, // 250
        easing: 'ease'
    });

});
