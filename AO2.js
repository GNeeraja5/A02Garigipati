
        function myfunction()
        {
         var i = document.getElementById('brand').value;
         var j;
         var req;
        if(document.getElementById('mode1').value=="Regular")
        req=0;
        if(document.getElementById('mode2').value=="Customize")
        req=10;
        var noofitem= document.getElementById('items').value;
         var k=(parseInt(i)+parseInt(req))*noofitem;
         document.getElementById('demo').innerHTML=k;
        }