import { useState, useRef, useEffect } from "react";
import {
  AppUploadCover,
  AppCoverUploadItem,
  AppUploadFile,
  AppBtnItems,
  AppItemImage,
} from "./style";
import { Upload } from "../Icons";

export const FileUpload = ({ multiple = true, onUpload }) => {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.url));
    };
  }, [images]);

  const handleFiles = (fileList) => {
    const imageFiles = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/")
    );
    if (imageFiles.length === 0) {
      setMessage("Only image files are allowed.");
      return;
    }

    const previews = imageFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => {
      const newList = multiple ? [...prev, ...previews] : [previews[0]];
      return newList;
    });

    setMessage(
      imageFiles.length === 0
        ? "No images selected."
        : `${imageFiles.length} image(s) remaining.`
    );
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleClickZone = () => inputRef.current?.click();
  const handleInputChange = (e) => handleFiles(e.target.files);

  const handleUpload = () => {
    if (images.length === 0) {
      setMessage("Please select at least one image to upload.");
      return;
    }

    const files = images.map((img) => img.file);
    onUpload?.(files);
    setMessage(
      files.length === 0
        ? "No images selected."
        : `${files.length} image(s) remaining.`
    );
  };

  const removeImage = (index) => {
    setImages((prev) => {
      const removed = prev[index];
      URL.revokeObjectURL(removed.url);
      const updated = [...prev];
      updated.splice(index, 1);
      setMessage(
        updated.length === 0
          ? "No images selected."
          : `${updated.length} image(s) remaining.`
      );
      return updated;
    });
  };

  const clearAll = () => {
    images.forEach((img) => URL.revokeObjectURL(img.url));
    setImages([]);
    setMessage("Images cleared.");
  };

  return (
    <AppUploadCover>
      <AppCoverUploadItem>
        <AppUploadFile
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClickZone}
          $multiple={multiple}
        >
          <p>Click or drag & drop {multiple ? "images" : "an image"} here</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple={multiple}
            onChange={handleInputChange}
            style={{ display: "none" }}
          />
        </AppUploadFile>
        <AppBtnItems>
          <button onClick={handleUpload}>
            <Upload />
          </button>
          {multiple && <button onClick={clearAll}>Clear</button>}
        </AppBtnItems>
      </AppCoverUploadItem>
      {message && <AppItemImage>{message}</AppItemImage>}
      {images.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          {images.map((img, idx) => (
            <div key={idx} style={{ position: "relative" }}>
              <img
                src={img.url}
                alt={`preview-${idx}`}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage(idx);
                }}
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  cursor: "pointer",
                  fontSize: 12,
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </AppUploadCover>
  );
};
