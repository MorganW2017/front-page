function FrontController(){
    var frontService = new FrontService()
    function getFront(){
        frontService.getFront(draw)
    }
    function draw(fronts){
        var frontElem = document.getElementById('front');
        var template = ''
        template = `
        

        `
    }
    frontElem.innerHTML = template
}