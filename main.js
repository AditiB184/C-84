
var last_position_of_x, last_position_of_y;
var mouseEvent = "";

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
  
    color = "black";
    width_of_line = 2;

var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;


if(width<992){

    document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        alert("inside touchstart");
        console.log("my_touchstart");
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
        //Addictonal Activity start
      //  color = document.getElementById("color").value;
      //  width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

    }

    canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e)
    {
                alert("inside touchmove");
        console.log("my_touchmove");
        current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
        current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveto(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineto(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

