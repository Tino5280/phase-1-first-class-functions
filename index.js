function receivesAFunction(callBackFunction) {
    callBackFunction('Jeffy likes apples')
}

function returnsANamedFunction() {
    function namedFunction() {
        return 'Jeffy likes apples';
    }
    return namedFunction;
    
        
    
    
}


function returnsAnAnonymousFunction(){
    return function() {
        console.log('Jeffy likes apples')
    }
}