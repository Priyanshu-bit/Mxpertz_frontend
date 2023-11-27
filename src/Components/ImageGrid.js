import React from 'react';
import './ImageGrid.css';

const ImageGrid = () => {
  return (
    <>
    <div className="image-gallery">
      <div className="image-row">


        <div className="image">
          <img src="grilled.jpg" alt="grilled" />
         
        </div>
        <div className="image">
          <p></p>
          <div className="image-info">
          <p class='reserve-align'>$ 26.95</p>
            <h3 class='reserve-align1'>Grilled Fillet</h3>
            <p class='reserve-align'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint, expedita eaque doloribus accusantium laboriosam consequatur quisquam veritatis est nemo repellendus eius minima molestiae molestias quia possimus ullam architecto totam.</p>
           
          </div>
        </div>


        <div className="image">
          <img src="chicken.jpg" alt="chicken" />
          
        </div>


        <div className="image">
          <p></p>
          <div className="image-info">
          <p class='reserve-align'>$ 53.3</p>
            <h3 class='reserve-align1'>Chicken Breast</h3>
            <p class='reserve-align'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint, expedita eaque doloribus accusantium laboriosam consequatur quisquam veritatis est nemo repellendus eius minima molestiae molestias quia possimus ullam architecto totam.</p>
          </div>
        </div>
       
        

        <div className="image">
          <img src="crab.jpg" alt="Image 5" />
          
        </div>
        <div className="image">
          <p class='reserve-align'></p>
<div className="image-info">
<p class='reserve-align'>$ 40.5</p>
            <h3 class='reserve-align1'>King Crab</h3>
            <p class='reserve-align'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint, expedita eaque doloribus accusantium laboriosam consequatur quisquam veritatis est nemo repellendus eius minima molestiae molestias quia possimus ullam architecto totam.</p>
          </div>
        </div>



        <div className="image">
          <img src="fish.jpg" alt="fish" />
          
        </div>
       
        
        <div className="image">
          <p class='reserve-align'></p>
<div className="image-info">
<p class='reserve-align'>$ 26.95</p>
            <h3 class='reserve-align1'>Sea Trout</h3>
            <p class='reserve-align'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint, expedita eaque doloribus accusantium laboriosam consequatur quisquam veritatis est nemo repellendus eius minima molestiae molestias quia possimus ullam architecto totam.</p>
          </div>
        </div>

        <div className="image">
          <img src="bakra.jpg" alt="bakra" />
          
        </div>      


      </div>
    </div>
    </>
  );
};

export default ImageGrid;