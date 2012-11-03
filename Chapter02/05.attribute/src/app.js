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
            mark: 0,
            fieldLabel: 'TextField1'
        }, {
            mark: 1,
            fieldLabel: 'TextField2'
        }, {
            mark: 2,
            fieldLabel: 'TextField3'
        }, {
            mark: 3,
            xtype: 'textarea',
            fieldLabel: 'TextArea1'
        }],
        buttons: [{
            text: '実行',
            handler: function() {
                var items = p.query('[mark=1]');
                Ext.iterate(items, function(item, i) {
                    item.setValue(Ext.String.format('mark{0}', i));
                });
            }
        }]
    });

});
