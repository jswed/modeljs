define(function(){

    return {
        'string': function(str) {
          return ((undefined || null) !== str) ? String(str) : '';
        },
        'number': function(n) {
          return Number(n) || '';
        },
        'object': function(source) {
          return (source && ('object' === typeof source)) ? source : {};
        },
        'boolean': function(fl) {
          return Boolean(fl) || false;
        }

    };
});
