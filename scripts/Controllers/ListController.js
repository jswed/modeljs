define(['Views/ListView'], function(ListView){

    function start(){
        var task = JSON.parse(localStorage.tasks || '[]');
        ListView.render({task:task});
    }

    return {
        start: start
    };
});
