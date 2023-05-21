// window.addEventListener('load', function() {
//     document.querySelector('input').addEventListener('change', function() {
//         {
//             var img = document.querySelector('img');
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//             // img.onload = () => {
//             //     URL.revokeObjectURL(img.src);  // no longer needed, free memory
//             // }
//         }
//     });
//   });
 

  window.addEventListener('load', function() {
    document.querySelector('input').addEventListener('change', function() {
      var img = document.querySelector('img');
      img.src = URL.createObjectURL(this.files[0]); // set src to blob url
  
      //he event fires when the image has finished loading.
      img.onload = function() {
        //first define the canvas
        // Create a canvas element
        //sets its width and height to match the dimensions of the loaded image.
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
  
        // Get the 2D drawing context
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0); // Draw the image on the canvas
  
        // Add the watermark text
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'; // Set the text color and opacity
        ctx.textAlign = 'center';
        ctx.fillText('www.yourcompany.com', canvas.width / 2, canvas.height - 20);
  
        // Replace the image source with the canvas data URL
        img.src = canvas.toDataURL();
      };
    });
  });
  

  //Exapmles
//   <!DOCTYPE html>
// <html>
// <body>

// <canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;">
// Your browser does not support the HTML canvas tag.</canvas>

// <script>
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(50,0);
// ctx.lineTo(200,5);
// ctx.stroke();
// </script>
// </body>
// </html>

//
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    
    const changeBackground = () => {
      // Generate a random 6 character hexadecimal color value
      const Val = Math.floor(Math.random() * 0xffffff).toString(16);
      // Set the background color of the page to the generated color
      document.body.style.background = `#${Val}`;
    };
    
    button.addEventListener("click", changeBackground);
  });
  
