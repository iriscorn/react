import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3),
  phoneNumber: Yup.number().required().min(10),
  address: Yup.string().required().min(5),
});

const Order = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
      priority: false
    },
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <main className="content order-content">
        <h1 className="order-heading">Ready to order? Let`s go!</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <label className="order-label" htmlFor="name">
            First name
            <input
              className="order-input"
              id="name"
              type="text"
              {...register("name")}
            />
          </label>
          <label className="order-label" htmlFor="phone">
            Phone number
            <input
              className="order-input"
              id="phone"
              type="phone"
              {...register("phoneNumber")}
            />
          </label>
          <label className="order-label" htmlFor="address">
            Address
            <input
              className="order-input"
              id="address"
              type="text"
              {...register("address")}
            />
          </label>
          <label className="order-label order-label--mod" htmlFor="checkbox">
            <input
              className="order-checkbox"
              id="checkbox"
              type="checkbox"
              {...register("priority")}
            />
            Want to yo give your order priority
          </label>
          <button>order now</button>
        </form>
      </main>
    </>
  );
};
export default Order;
