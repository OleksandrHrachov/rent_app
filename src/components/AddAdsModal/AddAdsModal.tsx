import { FC, useState, useEffect, ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { SharedButton } from "../SharedButton";
import { getCoords } from "../../services/getCoords";
import { useAppDispatch } from "../../hooks";
import { addAds } from "../../store/adsSlice";
import "./AddAdsModal.scss";

interface IProps {
  onClose: () => void;
}

interface IInputs {
  city: string;
  street: string;
  name: string;
  phone: string;
  email: string;
  title: string;
  price: number;
  description: string;
  image: FileList;
}

export const AddAdsModal: FC<IProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>();

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showDeleteBtn, setShowDeleteBtn] = useState(false)


  useEffect(() => {
    if (error) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    return () => setError("");
  }, []);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", data.image[0]);

      formData.append("upload_preset", "ngv4em6v");
      const options = {
        method: "POST",
        body: formData,
      };

      let uploadedImageUrl = "";

      await fetch(
        "https://api.Cloudinary.com/v1_1/dakb9rcdn/image/upload",
        options
      )
        .then((res) => res.json())
        .then((res) => {
          uploadedImageUrl = res.url;
        })
        .catch((err) => console.log(err));

      const coords = await getCoords(data.city, data.street);

      if (coords) {
        const adsObj = {
          info: {
            id: uuidv4(),
            city: data.city,
            street: data.street,
            name: data.name,
            phone: data.phone,
            email: data.email,
            title: data.title,
            price: data.price,
            description: data.description,
            imageUrl: uploadedImageUrl,
          },
          coords: {
            lat: coords.lat,
            lon: coords.lon,
          },
        };

        dispatch(addAds(adsObj));

        onClose();
        setLoading(false);
      } else {
        throw new Error(
          "You may have entered an incorrect address, please try again."
        );
      }
    } catch (error) {
      setLoading(false);

      if (error instanceof Error) {
        console.log(error.message);
        setError(error.message);
      } else {
        setError("ERROR");
      }
    }
  };

  const handelPreview = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {

      const fileReader = new FileReader();
      const previewContainer = document.getElementsByClassName(
        "ads-modal__body-form-picture-preview-container"
      )[0];

      const image = document.createElement("img");
      image.classList.add(
        "ads-modal__body-form-picture-preview-container-image"
      );

      previewContainer.appendChild(image);

      fileReader.onload = function (e) {
        if (e.target && e.target.result) {
          image.setAttribute("src", e.target.result as string);
        }
      };

      fileReader.readAsDataURL(file);
      setShowDeleteBtn(true);
    }
  };

  const removeImage = () => {
    const fileInput = document.getElementById("file") as HTMLInputElement;
    
    if (fileInput ) {

      const preview = document.getElementsByClassName("ads-modal__body-form-picture-preview-container-image")[0];
      preview.remove();
    
      fileInput.value = '';
      setShowDeleteBtn(false);
      
    }
  }

  return (
    <div className="ads-modal">
      <div className="ads-modal__body">
        <div className="ads-modal__body-header">
          <h3 className="ads-modal__body-title">Add your offer below</h3>
          <div onClick={onClose} className="ads-modal__body-close-btn">
            <div className="ads-modal__body-close-btn-item"></div>
            <div className="ads-modal__body-close-btn-item"></div>
          </div>
        </div>

        {loading && (
          <div className="ads-modal__body-loading">
            <p>LOADING...</p>
          </div>
        )}

        {error && (
          <div className="ads-modal__body-error">
            <p>{error}</p>
          </div>
        )}

        <form
          className="ads-modal__body-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="ads-modal__body-form-wrapper">
            <div className="ads-modal__body-form-info">
              <div className="ads-modal__body-form-item">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  {...register("city", { required: true })}
                />
                <p className="ads-modal__body-form-item-error">
                  {errors.city && "City is required"}
                </p>
              </div>
              <div className="ads-modal__body-form-item">
                <label htmlFor="street">Street:</label>
                <input type="text" id="street" {...register("street")} />
              </div>
              <div className="ads-modal__body-form-item">
                <label htmlFor="name">Your name:</label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                />
                <p className="ads-modal__body-form-item-error">
                  {errors.name && "Name is required"}
                </p>
              </div>
              <div className="ads-modal__body-form-item">
                <label htmlFor="phone">Phone number:</label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", { required: true })}
                />
                <p className="ads-modal__body-form-item-error">
                  {errors.phone && "Phone is required"}
                </p>
              </div>
              <div className="ads-modal__body-form-item">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" {...register("email")} />
              </div>
              <div className="ads-modal__body-form-item">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: true })}
                />
                <p className="ads-modal__body-form-item-error">
                  {errors.title && "Title is required"}
                </p>
              </div>
              <div className="ads-modal__body-form-item">
                <label htmlFor="price">Price per month:</label>
                <input
                  type="number"
                  id="price"
                  {...register("price", { required: true })}
                />
                <p className="ads-modal__body-form-item-error">
                  {errors.price && "Price is required"}
                </p>
              </div>
              <div className="ads-modal__body-form-item">
                <label htmlFor="description">Description:</label>
                <textarea
                  rows={8}
                  id="description"
                  {...register("description", { required: true })}
                />
                <p className="ads-modal__body-form-item-error">
                  {errors.description && "Description is required"}
                </p>
              </div>
            </div>
            <div className="ads-modal__body-form-picture">
              <p className="ads-modal__body-form-item-error-img">
                {errors.image && "Image is required"}
              </p>
              <input
                type="file"
                id="file"
                {...register("image", { required: true })}
                onChange={handelPreview}
              />
              <div className="ads-modal__body-form-picture-preview-container"></div>
              {showDeleteBtn && <SharedButton handelClick={removeImage}>DELETE</SharedButton>}
            </div>
          </div>

          <SharedButton buttomType={"submit"}>ADD</SharedButton>
        </form>
      </div>
    </div>
  );
};
