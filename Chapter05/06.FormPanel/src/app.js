Ext.ns('Ext.app');
Ext.app.REMOTING_API = {
    "url": "./router.php",
    "type": "remoting",
    "actions": {
        "MyAction": [{
            "name": "getInfo",
            "len": 1
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
            load: MyAction.getInfo
        },
        paramOrder: ['uid'],
        items: [{
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'メールアドレス'
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '氏名'
        }],
        buttons: [{
            text: '読み込み',
            handler: function() {
                form.getForm().load({
                    params: {
                        uid: 5
                    }
                });
            }
        }]
    });

});
