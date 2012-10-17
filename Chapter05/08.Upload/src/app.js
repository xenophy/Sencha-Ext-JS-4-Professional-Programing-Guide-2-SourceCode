Ext.ns('Ext.app');
Ext.app.REMOTING_API = {
    "url": "./router.php",
    "type": "remoting",
    "actions": {
        "MyAction": [{
            "name": "updateInfo",
            "len": 2,
            "formHandler": true
        }]
    }
};
Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);

Ext.onReady(function() {

    var form = Ext.widget('form', {
        title:  'FormPanel with Ext Direct',
        width:  350,
        renderTo: Ext.getBody(),
        bodyPadding: 20,
        api: {
            submit: MyAction.updateInfo
        },
        paramOrder: ['uid'],
        items: [{
            xtype       : 'filefield',
            emptyText   : '写真を選択してください',
            labelWidth  : 50,
            fieldLabel  : '写真',
            name        : 'photo-path',
            anchor      : '100%'
        }],
        buttons: [{
            text: '送信',
            handler: function() {
                form.getForm().submit({
                    params: {
                        uid: 5
                    },
                    success: function(form, event) {
                        alert(event.result.message);
                    }
                });
            }
        }]
    });

});
