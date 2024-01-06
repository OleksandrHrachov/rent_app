import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./AddAdsModal.scss";
import { SharedButton } from "../SharedButton";
import { getCoords } from "../../services/getCoords";

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
}

export const AddAdsModal: FC<IProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>();
  const onSubmit: SubmitHandler<IInputs> = (data) => {
    console.log(data);
    getCoords(data.city, data.street);
  };
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

        <form
          className="ads-modal__body-form"
          onSubmit={handleSubmit(onSubmit)}
        >
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

          <SharedButton buttomType={"submit"}>ADD</SharedButton>
        </form>
      </div>
    </div>
  );
};
