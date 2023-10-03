import React, { useEffect, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { v4 } from "uuid";

function Accept({ dropzoneText, ...props }) {
  const { field } = props;
  const { defaultValue } = field || [];
  const [files, setFiles] = useState(defaultValue ? [defaultValue] : []);
  const [cssClass, setcssClass] = useState("dropzone");
  const inputID = useMemo(() => v4(), []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (event) => {
      const {
        id,
        formID,
        field,
        isRequired,
        updateForm,
        setTouched,
        unsetError,
      } = props;
      setFiles(
        event.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      updateForm(event, field);
      setTouched(id);
      unsetError(id);
    },
    onDragOver: (event) => {
      setcssClass("dropzone over");
    },
    onDragLeave: (event) => {
      setcssClass("dropzone");
    },
    onDropAccepted: (event) => {
      setcssClass("dropzone");
    },
  });

  const thumbs =
    files &&
    !!files.length > 0 &&
    files.map((file, i) => (
      <div key={`${inputID}_${id}_${i}`}>
        <div>
          <img src={file.preview} />
        </div>
      </div>
    ));
  const { id, formID, isRequired } = props;

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const text =
    dropzoneText || "Drag 'n' drop some files here, or click to select files";

  return (
    <div className="container">
      <div
        {...getRootProps({
          className: cssClass,
        })}
      >
        <input
          id={`input_${formID}_${id}`}
          name={`input_${id}`}
          type="file"
          required={isRequired}
          {...getInputProps()}
        />
        {thumbs && <div className="preview">{thumbs}</div>}
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default Accept;
