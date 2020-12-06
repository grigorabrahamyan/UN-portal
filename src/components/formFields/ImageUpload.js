
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import cs from 'classnames';
import Preloader from 'components/Preloader';
import { AvInput } from 'availity-reactstrap-validation';
import { uploadAttachments, unlinkImage } from 'actions/file';

const ImageUpload = ({ name, initialValue, removable, size, disabled, className = '' }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(initialValue || '');

  const handleChange = ({ target: { files } }) => {
    const image = files[0];
    const reader = new FileReader();
    const formData = new FormData();
    console.log('====================================');
    console.log(image);
    console.log('====================================');
    // formData.append('image', image);
    // reader.onload = () => {
    //   setLoading(true);
    //   uploadAttachments(formData)
    //     .then(({ image }) => {
    //       if (image.length) {
    //         setValue(image[0]);
    //       }
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // };
    setValue(image);

    if (image) {
      reader.readAsDataURL(image);
    }
  };

  const handleDelete = () => {
    unlinkImage(value).then(() => {
      setValue('');
    });
  };
console.log('====================================');
console.log(value);
console.log('====================================');
  return (
    <div
      className={cs('image-upload', className, { disabled, empty: !value })}
      style={size ? { width: size + 'px', height: size + 'px' } : {}}
    >
      <p className="image-title">Կամավորի անձը հաստատող փաստաթուղթ</p>
      <AvInput type="hidden" name={name} value={value} />
      <label>
        {!!value && <img src={value} alt="" />}
        <input type="file" onChange={handleChange} disabled={disabled} accept="image/png, image/jpeg" />
        <span className={cs({ 'image-loading': loading, empty: !value })}>
          {loading ? <Preloader /> : <i className="icon icon-camera"></i>}
        </span>
      </label>
      {!disabled && removable && !!value && (
        <Button color="danger" size="sm" onClick={handleDelete} className="delete-image p-1">
          <i className="icon icon-trash-2"></i>
        </Button>
      )}
    </div>
  );
};

export default ImageUpload;
