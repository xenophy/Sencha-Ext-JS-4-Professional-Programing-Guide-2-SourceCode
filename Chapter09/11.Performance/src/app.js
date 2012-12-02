Ext.onReady(function() {

    var loop=1000000;

    // for

    var arr = [1,2,3,4,5];

    console.time('measure');
    for(var y=0;y<loop;y++) {
        for(var i in arr) {
        }
    }
    console.timeEnd('measure');

    console.time('measure');
    for(var y=0;y<loop;y++) {
        for(var i=0; i<arr.length; i++) {
        }
    }
    console.timeEnd('measure');

    console.time('measure');
    var len = arr.length;
    for(var y=0;y<loop;y++) {
        for(var i=0; i<len; i++) {
        }
    }
    console.timeEnd('measure');

    // ----


    console.time('measure');
    for(var y=0;y<loop;y++) {
    }
    console.timeEnd('measure');

    console.time('measure');
    for(var y=0;y<loop;y++) {
    }
    console.timeEnd('measure');



    /*

    var run = {
TX_PLUS : function(){
    tx_clear(); var html = ''; for (var i = 0; i < count; i++){ html += 'あ'; } $('tx').innerHTML = html;
},
TX_JOIN : function(){
    tx_clear(); var html = []; for (var i = 0; i < count; i++) { html.push('あ'); } $('tx').innerHTML = html.join("");
}
};
*/




    /*


    console.time('measure');
    for(var i=0;i<loop;i++)({}); // 約31ms
    console.timeEnd('measure');
    console.time('measure');
    for(var i=0;i<loop;i++)new Object; // 約55ms
    console.timeEnd('measure');
    console.time('measure');
    for(var i=0;i<loop;i++){}; // 約4ms
    console.timeEnd('measure');


    for(var i=0;i<loop;i++)[]; // 約88ms
    for(var i=0;i<loop;i++)new Array; // 約133ms

    var a=[];
    for(var i=0;i<loop;i++)a[i]=i; // 約13ms
    for(var i=0;i<loop;i++)a[i+""]=i; // 約280ms
    var a={};
    for(var i=0;i<loop;i++)a[i]=i; // 約170ms
    for(var i=0;i<loop;i++)a[i+""]=i; // 約290ms

    var a=[];
    for(var i=0;i<loop;i++)a.push(i); // 約23ms
    var a=[];
    for(var i=0;i<loop;i++)a[a.length]=i; // 約14ms


    function obj(){}
    obj.prototype.callSingle=function(){
        return "hello";
    }
    obj.prototype.callTwice=function(){
        return this.func("hello");
    }
    obj.prototype.func=function(a){
        return a;
    }
    var o = new obj();
    for(var i=0;i<loop;i++)o.callSingle(); // 約33ms
    for(var i=0;i<loop;i++)o.callTwice(); // 約65ms 



    function abs(){
        var a = 100;
        return a>0?a:-a;
    }
    for(var i=0;i<loop;i++)abs(); // 約50ms
    function mathAbs(){
        var a = 100;
        return Math.abs(a);
    }
    for(var i=0;i<loop;i++)mathAbs(); // 約68ms
   */

});
