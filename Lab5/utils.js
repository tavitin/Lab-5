(() => {
    const Utils = {
        methods: {
            fibonacci: (n) => {
                const arr = [];
                var n1 = 0,n2 = 1,result = 0;
                for(let i = 1; i <= n; i++){
                    arr.push(result);
                    result = n1 + n2;
                    n1 = n2;
                    n2 = result;
                    if(result==1){
                        arr.push(result);
                    }
                }
                return arr;
            }
        }
    }
    document.Utils = Utils;
})();