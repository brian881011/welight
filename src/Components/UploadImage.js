import React, { useState } from "react";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div >
      {selectedImage && (
        <div>
        <img id="uploadedImg" style={{width:"100px", height:"100px", borderRadius:"100%"}} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button className="imageRemoveButton" onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}

      {!selectedImage &&(
        <button className="imgUploadButton" onClick={()=>{document.getElementById('imgUploader').click()}}></button>
      )
      }
        <input
          id="imgUploader"
          style={{visibility: "hidden"}}
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          } }/>
          
      
    </div>
  );
};

export default UploadImage;