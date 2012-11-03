Ext.onReady(function() {

    var p = Ext.widget('form', {
        title: 'Fields',
        bodyPadding: 10,
        width: 500,
        renderTo: Ext.getBody(),
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items: [{
            fieldLabel: 'TextField1'
        }, {
            fieldLabel: 'TextField2'
        }, {
            fieldLabel: 'TextField3'
        }, {
            xtype: 'textarea',
            fieldLabel: 'TextArea1'
        }],
        buttons: [{
            text: '実行',
            handler: function() {
                var items = p.query('.textfield');
                Ext.iterate(items, function(item, i) {
                    item.setValue(
                        Ext.String.format(".textfield{0}", i)
                    );
                });
            }
        }]
    });

});
