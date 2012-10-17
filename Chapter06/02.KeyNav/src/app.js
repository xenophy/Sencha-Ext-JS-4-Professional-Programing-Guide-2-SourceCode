Ext.onReady(function() {

    var viewport = Ext.widget('viewport', {
        layout: {
            type: 'border',
            padding: 5
        },
        items: [{
            title: 'north',
            region: 'north',
            height: 100,
            padding: '0 0 5 0',
            listeners: {
                focus: function(p) {
                    viewport.down('[title="north"]').body.setStyle({ backgroundColor: 'yellow' });
                    viewport.down('[title="west"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="east"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="center"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="south"]').body.setStyle({ backgroundColor: 'white' });
                }
            }
        }, {
            title: 'west',
            region: 'west',
            width: 150,
            padding: '0 5 0 0',
            listeners: {
                focus: function(p) {
                    viewport.down('[title="north"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="west"]').body.setStyle({ backgroundColor: 'yellow' });
                    viewport.down('[title="east"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="center"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="south"]').body.setStyle({ backgroundColor: 'white' });
                }
            }
        }, {
            title: 'east',
            region: 'east',
            width: 150,
            padding: '0 0 0 5',
            listeners: {
                focus: function(p) {
                    viewport.down('[title="north"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="west"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="east"]').body.setStyle({ backgroundColor: 'yellow' });
                    viewport.down('[title="center"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="south"]').body.setStyle({ backgroundColor: 'white' });
                }
            }
        }, {
            title: 'center',
            region: 'center',
            listeners: {
                focus: function(p) {
                    viewport.down('[title="north"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="west"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="east"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="center"]').body.setStyle({ backgroundColor: 'yellow' });
                    viewport.down('[title="south"]').body.setStyle({ backgroundColor: 'white' });
                }
            }
        }, {
            title: 'south',
            region: 'south',
            height: 100,
            padding: '5 0 0 0',
            listeners: {
                focus: function(p) {
                    viewport.down('[title="north"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="west"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="east"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="center"]').body.setStyle({ backgroundColor: 'white' });
                    viewport.down('[title="south"]').body.setStyle({ backgroundColor: 'yellow' });
                }
            }
        }]
    });

    Ext.FocusManager.enable();

    var nav = Ext.create('Ext.util.KeyNav', Ext.getBody(), {
        "left" : function() {
            var cmp = Ext.FocusManager.focusedCmp;
            if(cmp === viewport.down('[title="center"]')) {
                viewport.down('[title="west"]').focus();
            } else if(cmp === viewport.down('[title="east"]')) {
                viewport.down('[title="center"]').focus();
            }

            if(cmp === viewport) {
                viewport.down('[title="center"]').focus();
            }
        },
        "right" : function() {
            var cmp = Ext.FocusManager.focusedCmp;
            if(cmp === viewport.down('[title="center"]')) {
                viewport.down('[title="east"]').focus();
            } else if(cmp === viewport.down('[title="west"]')) {
                viewport.down('[title="center"]').focus();
            }

            if(cmp === viewport) {
                viewport.down('[title="center"]').focus();
            }
        },
        "up" : function() {
            var cmp = Ext.FocusManager.focusedCmp;
            if(cmp === viewport.down('[title="center"]')) {
                viewport.down('[title="north"]').focus();
            } else if(cmp === viewport.down('[title="south"]')) {
                viewport.down('[title="center"]').focus();
            }

            if(cmp === viewport) {
                viewport.down('[title="center"]').focus();
            }
        },
        "down" : function() {
            var cmp = Ext.FocusManager.focusedCmp;
            if(cmp === viewport.down('[title="center"]')) {
                viewport.down('[title="south"]').focus();
            } else if(cmp === viewport.down('[title="north"]')) {
                viewport.down('[title="center"]').focus();
            }

            if(cmp === viewport) {
                viewport.down('[title="center"]').focus();
            }
        },
        scope : this
    });

});
