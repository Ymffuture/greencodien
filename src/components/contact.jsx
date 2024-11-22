import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import {Toaster , toast} from 'react-hot-toast'

// Validation schema using Yup
const schema = yup.object({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
});

export const Contact = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Attach Yup validation schema
  });

  const onSubmit = (data, e) => {
    console.log(data);

    // Send email using EmailJS
    emailjs
      .sendForm("service_kw38oux", "template_etyg50k", e.target, "IolitXztFVvhZg6PX")
      .then(
        (result) => {
          toast.success('Sent successfully');
          console.info(result.text)
          reset(); // Reset form after successful submission
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              {/* Form using React Hook Form */}
              <form name="sentMessage" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        placeholder="Name"
                        {...register("name")}
                      />
                      {errors.name && <p className="text-danger">{errors.name.message}</p>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Email"
                        {...register("email")}
                      />
                      {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    rows="4"
                    placeholder="Message"
                    {...register("message")}
                  ></textarea>
                  {errors.message && <p className="text-danger">{errors.message.message}</p>}
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            Copyright &copy; 2023 - 2024 GreenCodien, All Rights Reserved.{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};
