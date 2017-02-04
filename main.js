
var content = {
    launch:function()
    {
       content.getBrand();
       content.getReq();
       content.getNoofItems();
       content.calculatePrice();
       content.getMailingAddress();
    },
    getBrand:function()
    {
       // var index=document.getElementById("brand").selectedIndex;
        //var brand=document.getElementsByTagName("option")[index].value;
        //$("#mode1").html();
        var brand=document.getElementById('brand').value;
        
    },
    getReq:function()
    {
        var req;
        if(document.getElementById('mode1').value=="Regular")
        req=0;
        if(document.getElementById('mode2').value=="Customize")
        req=10;
    },
    getNoofItems:function()
    {
        var noofitem= document.getElementById('item').value;
    },
    calculatePrice:function()
    {
        var price=parseInt(brand)+parseInt(req);
        //let price=(parseInt(brand)+parseInt(req))*parseInt(noofitem);
        document.getElementById('demo').innerHTML()=price;
       //document.write(5+6);
    },
    //getMailingAddress:function()
    
        
    


}



