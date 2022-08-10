var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");


block_image_object = "";

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function (img){
        block_image_object = img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            left:0,
            top:0
        });
      canvas.add(block_image_object);  
    })	
	
}

function playSound(){
x.play();	
}
