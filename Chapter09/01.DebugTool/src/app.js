console.time(1);
// 最初のセクション
console.time('first');      
someFunction(1000);
console.timeEnd('first');
// 2番目のセクション
console.time('second');
someFunction(2000);
console.timeEnd('second');
// 全体の時間
console.timeEnd(1);

function someFunction(times) {
    for(var i=0; i<times; i++) {
        var myEl = document.createElement('a');
        myEl.href = 'http://www.yahoo.com/';
        myEl.innerHTML = 'My Link';
        myEl.setAttribute('target', '_blank');

        var myDiv = document.createElement('div');

        myDiv.appendChild(myEl);
        document.body.appendChild(myDiv);
    }
}
