import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Button from '../../components/Button/Button';
import './AddProduct.css';

function AddProduct() {
  const [imageURL, setImageURL] = useState(null);
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    const {author, name, price} = data;
    const productData = {
      name,
      author,
      price,
      photo: imageURL,
    }
    axios.post('/product', productData)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }
  const imageUploadHandler = (event) => {
    const imageData = new FormData();
    imageData.set("key", "7db6194a80bbc56753a1b198ccb68f1e");
    imageData.append("image", event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',imageData)
      .then(data => {
        const image = data.data.data.display_url
        setImageURL(image);
      }).catch(err => console.log(err))
  }
  return (
    <section className="addProduct">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="addProduct__form">
        <div className="addProduct__inputGroup">
          <label htmlFor="name" className="addProduct__label">Name
            <input type="text" ref={register} name="name" id="name" className="addProduct__input" placeholder="Enter Name" />
          </label>
          <label htmlFor="author" className="addProduct__label">Author
            <input type="text" ref={register} name="author" id="author" className="addProduct__input" placeholder="Enter Author" />
          </label>
          <label htmlFor="Price" className="addProduct__label">Price
            <input type="text" ref={register} name="price" id="Price" className="addProduct__input" placeholder="Enter Price" />
          </label>
          <label className="addProduct__label">Add a Book Cover Photo
            <input type="file" ref={register} onChange={imageUploadHandler} name="photo" id="coverphoto" className="addProduct__inputFile"/>
          </label>
        </div>
        <div className="addProduct__btn">
          <Button>Save</Button>
        </div>
      </form>
    </section>
  )
}

export default AddProduct;
