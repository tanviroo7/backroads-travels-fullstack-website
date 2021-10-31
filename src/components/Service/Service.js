import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Service = () => {
  const [details, setDetails] = useState([]);
  const history = useHistory();

  const { user } = useAuth();
  const { serviceId } = useParams();

  useEffect(() => {
    axios
      .get("https://infinite-springs-03391.herokuapp.com/services")

      .then((res) => setDetails(res.data));
  }, []);

  const newData = details.find((datas) => datas._id === serviceId);
  console.log(newData);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.img = newData?.img;
    data.status = "Pending";
    axios
      .post("https://infinite-springs-03391.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.acknowledged) {
          alert("data Inserted");
          history.push("/myOrders");
          reset();
        }
      });
  };

  if (!newData) {
    return (
      <div>
        <h2 className="text-center">Loading....</h2>
      </div>
    );
  } else {
    return (
      <div className="container mt-5" style={{ marginBottom: "350px" }}>
        <div className="row align-items-center">
          <div className="col-md-7">
            <div>
              <img
                src={newData.img}
                className="img-fluid w-50 ms-4 mb-4"
                alt=""
              />
            </div>
            <div className="text-left w-2/4 ml-8">
              <h3 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {" "}
                {newData.name}
              </h3>
              <p className="font-normal text-gray-700 mb-3">
                {" "}
                {newData?.description}{" "}
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="container ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label forhtml="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    id="exampleInputName"
                    className="form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    defaultValue={user?.displayName}
                    {...register("userName")}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    className="form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="exampleInputEmail1"
                    defaultValue={user?.email}
                    {...register("userEmail")}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleInputTourName" className="form-label">
                    Service Name
                  </label>
                  <input
                    className="form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="exampleInputTourName"
                    defaultValue={newData?.name}
                    {...register("name")}
                  />
                </div>

                <div className="mb-3">
                  <label forhtml="exampleInputDate" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="exampleInputDate"
                    {...register("date")}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleInputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    className="form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="exampleInputAddress"
                    {...register("address")}
                  />
                </div>

                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Confirm"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Service;
