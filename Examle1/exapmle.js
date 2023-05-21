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
  
      //the event fires when the image has finished loading.
      img.onload = function() {
        // Create a canvas element
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
  
        // Get the 2D drawing context
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0); // Draw the image on the canvas
  
        // Add the watermark text
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Set the text color and opacity
        ctx.textAlign = 'center';
        ctx.fillText('www.yourcompany.com', canvas.width / 2, canvas.height - 20);
  
        // Replace the image source with the canvas data URL
        img.src = canvas.toDataURL();
  
        // Clean up the temporary canvas
        URL.revokeObjectURL(img.src);
      };
    });
  });
  