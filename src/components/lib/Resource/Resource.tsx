import React from 'react'
import styles from './Resource.module.css'
import axios from 'axios';
import FileSaver from 'file-saver';
import { Resource as resource } from '../../../types';


interface props {
 data: any
}


  const downloadFile = async (Name: string, url: string) => {
    try {
      const response = await axios.get(url, {
        responseType: 'blob', // Ensure response is treated as a binary blob
      });

      // Extract the filename from the URL or use a default name
      const fileName = Name

      // Use the file-saver library to trigger the download
      FileSaver(response.data, fileName);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };



const Resource = ({ name, link, createdAt, courseId, id }: resource) => {
  return (
    <div className={`${styles.ResourceContainer}`} onClick={() => downloadFile(name, link)}>
     <div className={`${styles.ResourceNameDiv}`}>
      <h3 className={`${styles.ResourceName}`}>{name}</h3>
     </div>
    </div>
  )
}

export default Resource