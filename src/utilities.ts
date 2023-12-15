import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

export const uploadImageFileToStorage = async (file: File, folderPath: string): Promise<string> => {
    try {
      const fileName = `${file.name}`;
      const storageRef = ref(storage, `${folderPath}/${fileName}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image to storage:', error);
      throw error;
    }
  };