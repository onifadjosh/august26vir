import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const Formikk = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageBase64, setImageBase64] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Optional: validate it's an image and size limit (e.g., 2MB)
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be less than 2MB");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      // reader.result is a data URL like: "data:image/png;base64,iVBORw0KGgo..."
      setImageBase64(reader.result);
      setImagePreview(reader.result);
    };

    reader.onerror = () => {
      console.error("Error reading file");
      alert("Failed to read image");
    };

    reader.readAsDataURL(file);
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(formik.values);
        let response = await axios.post(
          "http://localhost:5005/api/v1/register",
          { ...values, photo:imageBase64 },
        );
        console.log(response);

        if (response.status == 201) {
          console.log(response.data.data);
          navigate("/makerequest");
        } else {
          alert("Error creating user");
        }
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: yup.object({
      firstname: yup
        .string()
        .required("First name is required")
        .min(3, "Firstname must not be less than 3 characters"),
      lastname: yup
        .string()
        .required("Last name is required")
        .min(3, "Lastname must not be less than 3 characters"),
      email: yup.string().required("Email is required").email("Invalid email"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password too weak",
        ),
    }),
  });

  //   console.log(formik.touched);

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            <div className="card border-0 shadow-sm bg-white">
              <div className="card-body p-4 p-md-5">
                <h2 className="h4 text-center fw-semibold text-dark mb-1">
                  Create account
                </h2>
                <p className="text-center text-secondary small mb-4">
                  All fields are required
                </p>

                {/* <input type="file"  onChange={(e)=>handleImageChange(e)}/> */}

                {/* Profile Image */}
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="form-label small fw-medium text-dark"
                  >
                    Profile Photo
                  </label>
                  <input
                    id="image"
                    type="file"
                    name="image"
                    accept="image/*"
                    className="form-control bg-white text-dark border-secondary-subtle"
                    onChange={handleImageChange}
                  />
                  {imagePreview && (
                    <div className="mt-3 text-center">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="rounded-circle border"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="small text-secondary mt-1">Preview</div>
                    </div>
                  )}
                </div>

                <form onSubmit={formik.handleSubmit} noValidate>
                  {/* First name */}
                  <div className="mb-3">
                    <label
                      htmlFor="firstname"
                      className="form-label small fw-medium text-dark"
                    >
                      First name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Enter first name"
                      className={`form-control bg-white text-dark ${
                        formik.touched.firstname && formik.errors.firstname
                          ? "is-invalid border-dark"
                          : "border-secondary-subtle"
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstname}
                    />
                    {formik.touched.firstname && formik.errors.firstname ? (
                      <div className="invalid-feedback d-block small">
                        {formik.errors.firstname}
                      </div>
                    ) : null}
                  </div>

                  {/* Last name */}
                  <div className="mb-3">
                    <label
                      htmlFor="lastname"
                      className="form-label small fw-medium text-dark"
                    >
                      Last name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      placeholder="Enter last name"
                      className={`form-control bg-white text-dark ${
                        formik.touched.lastname && formik.errors.lastname
                          ? "is-invalid border-dark"
                          : "border-secondary-subtle"
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastname}
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                      <div className="invalid-feedback d-block small">
                        {formik.errors.lastname}
                      </div>
                    ) : null}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label small fw-medium text-dark"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      className={`form-control bg-white text-dark ${
                        formik.touched.email && formik.errors.email
                          ? "is-invalid border-dark"
                          : "border-secondary-subtle"
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="invalid-feedback d-block small">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="form-label small fw-medium text-dark"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      className={`form-control bg-white text-dark ${
                        formik.touched.password && formik.errors.password
                          ? "is-invalid border-dark"
                          : "border-secondary-subtle"
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="invalid-feedback d-block small">
                        {formik.errors.password}
                      </div>
                    ) : null}
                    <div className="form-text text-secondary small mt-1">
                      At least 8 characters, 1 uppercase, 1 lowercase, 1 number,
                      1 symbol.
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-dark w-100 py-2 fw-medium"
                  >
                    {formik.isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>

            <p className="text-center text-secondary small mt-3 opacity-75 mb-0">
              Monochrome · Bootstrap only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formikk;
