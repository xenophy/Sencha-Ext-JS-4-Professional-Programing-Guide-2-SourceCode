(function (){
    var myVar = 'This is myVar',
        myObj = {
            name: 'myObj',
            description: 'This is myObje',
            value: '12345'
        },
        myArray = [1,2,3,4,5],
        firstFn = function() {
            console.log('function firstFn');
            console.trace();
            console.log(arguments);
            secondFn(arguments);
        },

        secondFn = function() {
            console.log('function secondFn');
            console.trace();
            console.dir(arguments);
        };

    console.time('sample');

    // log と dir の違い
    console.log('スカラー型の場合');
    console.log(myVar);
    console.dir(myVar);
    console.log('オブジェクトの場合');
    console.log(myObj);
    console.dir(myObj);
    console.log('配列の場合');
    console.log(myArray);
    console.dir(myArray);

    // debug/warn/info/error
    console.debug('Use console.debug:', myVar);
    console.debug(myObj);
    console.debug(myArray);
    console.warn('Use console.warn:', myVar);
    console.warn(myObj);
    console.warn(myArray);
    console.info('Use console.info:', myVar);
    console.info(myObj);
    console.info(myArray);
    console.error('Use console.error:', myVar);
    console.error(myObj);
    console.info(myArray);

    firstFn(myVar, myObj);
    console.timeEnd('sample');

})();
