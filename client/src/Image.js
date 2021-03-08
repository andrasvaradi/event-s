import tempImage from './assets/1.jpg'
import React, { useState } from 'react';
import {Box} from '@chakra-ui/react';
import  ImageApiService  from './services/ImageApiService';


const Image =  () => {
  const handleFileUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0], "file");
    await ImageApiService.cloudinaryUpload(uploadData)
  }

  return (
    <Box>
      <div style={{ margin: 10 }}>
        <label style={{ margin: 10 }}>Cloudinary:</label>
        <input
          type="file"
          onChange={(e) => handleFileUpload(e)}
        />
      </div>
    </Box>
  );
};
export default Image;