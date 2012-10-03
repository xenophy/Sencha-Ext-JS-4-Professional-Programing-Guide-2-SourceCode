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
            mark: true,
            fieldLabel: 'TextField1'
        }, {
            fieldLabel: 'TextField2'
        }, {
            mark: true,
            fieldLabel: 'TextField3'
        }, {
            xtype: 'textarea',
            fieldLabel: 'TextArea1'
        }],
        buttons: [{
            text: '実行',
            handler: function() {
                Ext.iterate(p.query('[mark]'), function(item, i) {
                    item.setValue(Ext.String.format('mark{0}', i));
                });
            }
        }]
    });

});
