define(['./forEach'], function (forEach) {

    /**
     * Return minimum value inside array
     */
    function min(arr, iterator){
        if (arr.length && !iterator) {
            return Math.min.apply(Math, arr);
        } else if (!arr.length) {
            return -Infinity;
        } else {
            var result,
                compare = Infinity,
                tmp;
            forEach(arr, function(val, i, list){
                tmp = iterator(val, i, list);
                if (tmp < compare) {
                    compare = tmp;
                    result = val;
                }
            });
            return result;
        }
    }

    return min;

});
