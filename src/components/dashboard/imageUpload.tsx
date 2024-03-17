import React, { ChangeEvent } from 'react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      onImageSelect(selectedFile);
    }
  };

  return (
    <div>
      {/* <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
        Upload Image
      </label> */}
      <input
        id="imageUpload"
        name="image"
        type="file"
        accept="image/*"
        className="mt-1 py-2 px-3 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUpload;
