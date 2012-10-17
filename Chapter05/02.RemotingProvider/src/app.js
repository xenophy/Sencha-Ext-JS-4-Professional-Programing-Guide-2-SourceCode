Ext.ns('Ext.app');
Ext.app.REMOTING_API = {
    "url": "./router.php",
    "type": "remoting",
    "actions": {
        "MyAction": [{
            "name": "doEcho",
            "len": 1
        }]
    }
};
Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);

Ext.onReady(function() {

    Ext.getBody().on('click', function() {
        MyAction.doEcho('client message!!', function(result, event) {
            alert(result);
        });
    });

});
