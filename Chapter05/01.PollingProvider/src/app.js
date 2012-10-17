Ext.onReady(function() {

    var poll = Ext.create('Ext.direct.PollingProvider', {
        url: 'poll.php',
        interval: 1000,
        listeners: {
            data: function(provider, event){
                Ext.getBody().update(event.data);
            }
        }
    });

    Ext.getBody().on('click', function() {
        poll.disconnect();
    });

    poll.connect();

});
