$(function(){
    $('#slides .slide').hide();
    $('#slides .slide:nth-child(1)').show();
    var currentIndex= 0;
    var maxIndex=$('#slides-container').length=1;

    function slideshow(){
        if(currentIndex==maxIndex){
            $($('#slides .slide')[maxIndex]).fadeToggle(500,function(){
                $($('#slides .slide')[0]).fadeToggle(500);
                currentIndex=0;
            });
            
        }else{
            $($('#slides .slide')[currentIndex]).fadeToggle(500,function(){
                $($('#slides .slide')[currentIndex+1]).fadeToggle(500);
                currentIndex++;
            });
        }
    }

    setInterval(function(){
            slideshow();
        },2000);
});