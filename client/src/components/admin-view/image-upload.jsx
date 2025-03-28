import React, { useEffect, useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import axios from "axios";

function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  imageLoading,
  setImageLoading,
  isEditMode

}) {
  const inputRef = useRef(null);
  function handleImageChange(e) {
    const selectedFile = e.target.files?.[0];
    setImageFile(selectedFile);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    const dropFile = e.dataTransfer.files?.[0];
    if (dropFile) {
      setImageFile(dropFile);
    }
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImagetoCloudinary() {
    setImageLoading(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      "http://localhost:3000/api/admin/products/upload-image",
      data
    );
    if (response.data.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoading(false);

    }
  }

  useEffect(() => {
    if (imageFile !== null) {
      uploadImagetoCloudinary();
    }
  }, [imageFile]);

  return (
    <div className="w-full max-w-md mx-auto mt-4 px-4 ">
      <Label className="text-normal font-medium mb-2 block px-4">
        Upload Product Image
      </Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-2 ${isEditMode ? 'opacity-25':''}`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageChange}
          disabled={isEditMode}
        />

        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className={`  ${isEditMode ? 'cursor-not-allowed':''}flex flex-col items-center justify-center h-32 cursor-pointer`}
          >
            <UploadCloudIcon className="h-10  w-10 text-muted-foreground mb-2 " />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : (
          imageLoading? <Skeleton className='h-10 bg-gray-300' />

          :
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 h-8 text-primary mr-2" />
              <p className="text-sm font-md ">{imageFile.name}</p>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground cursor-pointer"
                onClick={handleRemoveImage}
              >
                <XIcon className="w-4 h-4 " />
                <span className="sr-only">Remove File</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;
