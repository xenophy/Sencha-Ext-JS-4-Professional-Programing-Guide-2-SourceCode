Ext.onReady(function() {
    var overrides = {
        isTarget: false,
        alignElWithMouse: function(el, iPageX, iPageY) {
            var oCoord = this.getTargetCoord(iPageX, iPageY),
                fly = el.dom ? el : Ext.fly(el, '_dd'),
                elSize = fly.getSize(),
                EL = Ext.Element,
                vpSize;
            if(!this.deltaSetXY) {
                vpSize = this.cachedViewportSize = {
                    width: EL.getDocumentWidth(),
                    height: EL.getDocumentHeight()
                };
                var aCoord = [
                    Math.max(0, Math.min(oCoord.x, vpSize.width - elSize.width)),
                    Math.max(0, Math.min(oCoord.y, vpSize.height - elSize.height))
                ];
                fly.setXY(aCoord);
                var newLeft = fly.getLeft(true);
                var newTop  = fly.getTop(true);
                this.deltaSetXY = [newLeft - oCoord.x, newTop - oCoord.y];
            } else {
                vpSize = this.cachedViewportSize;
                fly.setLeftTop(
                    Math.min(oCoord.x + this.deltaSetXY[0], vpSize.width - elSize.width),
                    Math.min(oCoord.y + this.deltaSetXY[1], vpSize.height - elSize.height)
                    //Math.max(0, Math.min(oCoord.x + this.deltaSetXY[0], vpSize.width - elSize.width)),
                    //Math.max(0, Math.min(oCoord.y + this.deltaSetXY[1], vpSize.height - elSize.height))
                );
            }
            this.cachePosition(oCoord.x, oCoord.y);
            this.autoScroll(oCoord.x, oCoord.y, el.offsetHeight, el.offsetWidth);
            return oCoord;
        },
        b4StartDrag: function() {
            var me = this, el = me.el;
            if(!el) {
                el = me.el = Ext.get(me.getEl());
            }
            me.originalXY = el.getXY();
            Ext.get('ALPHABETS').select('div').setStyle('zIndex', 0);
            Ext.get('NUMBERS').select('div').setStyle('zIndex', 0);
            el.setStyle('zIndex', 10000);
        },
        onInvalidDrop: function() {
            var me = this;
            me.invalidDrop = true;
        },
        endDrag: function() {
            var me = this, el = me.el;
            if(me.invalidDrop === true) {
                el.removeCls('drop-ok');
                el.moveTo(me.originalXY[0], me.originalXY[1], {
                    easing   : 'easeOut',
                    duration : 200,
                    scope    : this,
                    callback : function() {
                        el.dom.style.position = '';
                    }
                });
                delete me.invalidDrop;
            }
        },
        onDragDrop: function(evtObj, targetElId) {
            var me = this,
                el = me.el,
                dom = el.dom,
                style = dom.style,
                dropEl = Ext.get(targetElId);
            if(dom.parentNode.id != targetElId) {
                dropEl.appendChild(el);
                me.onDragOut(evtObj, targetElId);
                style.position ='';
                style.top = '';
                style.left = '';
            } else {
                me.onInvalidDrop();
            }
        },
        onDragEnter: function(evtObj, targetElId) {
            var me = this,
                el = me.el,
                dom = el.dom;
            if(targetElId != dom.parentNode.id) {
                el.addCls('drop-ok');
            } else {
                me.onDragOut();
            }
        },
        onDragOut: function(evtObj, targetElId) {
            this.el.removeCls('drop-ok');
        }
    };
    Ext.get('ALPHABETS').select('div').each(function(el) {
        Ext.apply(el.initDD('alphabetDDGroup'), overrides);
    });
    Ext.get('NUMBERS').select('div').each(function(el) {
        Ext.apply(el.initDD('numberDDGroup'), overrides);
    });
    var alphabetDDTarget, numberDDTarget,
        dropAlphabetDDTarget, dropNumberDDTarget;
    alphabetDDTarget = new Ext.dd.DDTarget('ALPHABETS', 'alphabetDDGroup');
    numberDDTarget = new Ext.dd.DDTarget('NUMBERS', 'numberDDGroup');
    dropAlphabetDDTarget = new Ext.dd.DDTarget('DROP_ALPHABETS', 'alphabetDDGroup');
    dropNumberDDTarget = new Ext.dd.DDTarget('DROP_NUMBERS', 'numberDDGroup');
});
