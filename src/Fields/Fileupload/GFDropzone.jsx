import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function Accept({ dropzoneText, ...props }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: 'image/*',
    onDrop: event => {
      const { id, formID, field, isRequired, updateForm, setTouched, unsetError } = props;
      setFiles(
        event.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      updateForm(event, field);
      setTouched(id);
      unsetError(id);
    },
  });

  const thumbs = files.map(file => (
    <div key={file.name}>
      <div>
        <img src={file.preview} />
      </div>
    </div>
  ));
  const { id, formID, field, isRequired } = props;

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const text = dropzoneText || "Drag 'n' drop some files here, or click to select files";

  return (
    <div className="container">
      <div
        {...getRootProps({
          className: 'dropzone',
        })}
      >
        <input
          id={`input_${formID}_${id}`}
          name={`input_${id}`}
          type="file"
          required={isRequired}
          {...getInputProps()}
        />
        <p  dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <aside>{thumbs}</aside>
    </div>
  );
}

export default Accept;
