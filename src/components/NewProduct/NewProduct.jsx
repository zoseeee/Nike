import React, { useState } from "react";
import { uploadImage } from "../../api/uploader";
import "../NewProduct/NewProduct.scss";

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then((url) => {
      console.log(url);
      // Firebase에 새로운 product를 추가함
    });
  };

  return (
    <section className="new-product">
      <div className="container">
        <h2 className="title">새로운 제품 등록</h2>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="local file"
            referrerPolicy="no-referrer"
          />
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            name="file"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            value={product.title ?? ""}
            placeholder="제품명"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            value={product.price ?? ""}
            placeholder="가격"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="catecory"
            value={product.catecory ?? ""}
            placeholder="카테고리"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={product.description}
            placeholder="제품 설명"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="options"
            value={product.options ?? ""}
            placeholder="옵션(콤마(,)로 구분)"
            required
            onChange={handleChange}
          />
          <button>제품 등록하기</button>
        </form>
      </div>
    </section>
  );
};

export default NewProduct;
