Ext.onReady(function() {
    var drag, drop;
    var el = Ext.get('BOXES_CT');
    el.ddScrollConfig = {
        vthresh: 50,
        hthresh: -1,
        frequency: 100,
        increment: 200
    };
    Ext.dd.ScrollManager.register(el);
    drag = {
        ddGroup: 'ddBoxes',
        scroll: true,
        getDragData: function(e) {
            var t = e.getTarget('div.box');
            if(t) {
                return {ddel: t};
            }
        }
    };
    drop = {
        ddGroup: 'ddBoxes',
        onContainerOver: function() {
            return Ext.dd.DropZone.prototype.dropAllowed;
        },
        onContainerDrop: function(source, e, data) {
            this.getEl().appendChild(data.ddel);
            Ext.fly(data.ddel).highlight();
        }
    };
    new Ext.dd.DragZone('BOXES', drag);
    new Ext.dd.DragZone('DROPZONE', drag);
    new Ext.dd.DropZone('BOXES', drop);
    new Ext.dd.DropZone('DROPZONE', drop);
});
