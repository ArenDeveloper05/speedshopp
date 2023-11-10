import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { login, register } from "../../../../api/api";

import "./RegisterForm.scss";

const registerSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  last_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too short")
    .max(30, "Too long")
    .required("Required"),
  password_confirmation: Yup.string()
    .min(2, "Too short")
    .max(30, "Too long")
    .required("Required"),
});

const RegisterForm = () => {
  const registerFunction = async (userData) => {
    try {
      const { data } = await register({
        ...userData,
        role: "user",
      });
      const x = await login({
        email: userData.email,
        password: userData.password,
      });
      console.log(x.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-content">
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          phone_code: "+374",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          registerFunction(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="reg-form">
            <div className="form-row">
              <label htmlFor="fname">Անուն *</label>
              <Field name="first_name" id="fname" />
              {errors.first_name && touched.first_name ? (
                <div>{errors.first_name}</div>
              ) : null}
            </div>
            <div className="form-row">
              <label htmlFor="lname">Ազգանուն *</label>
              <Field name="last_name" id="lname" />
              {errors.last_name && touched.last_name ? (
                <div>{errors.last_name}</div>
              ) : null}
            </div>
            <div className="form-row phone-row">
              <label htmlFor="reg-phone">Հեռախոսահամար *</label>
              <div className="form-row-phone">
                <Field as="select" name="phone_code">
                  <option value="+374">+374</option>
                  <option value="+7">+7</option>
                </Field>
                <Field name="phone" type="number" id="reg-phone" />
              </div>
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            </div>
            <div className="form-row">
              <label htmlFor="reg-email">Էլ-Փոստ *</label>
              <Field name="email" type="email" id="reg-email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className="form-row">
              <label htmlFor="reg-pass">Գաղտնաբառ *</label>
              <Field name="password" type="password" id="reg-pass" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <div className="form-row">
              <label htmlFor="reg-pass-confirm">Կրկնել Գաղտնաբառը *</label>
              <Field
                name="password_confirmation"
                type="password"
                id="reg-pass-confirm"
              />
              {errors.password_confirmation && touched.password_confirmation ? (
                <div>{errors.password_confirmation}</div>
              ) : null}
            </div>
            <button className="register-button" type="submit">
              ԳՐԱՆՑՎԵԼ
            </button>
          </Form>
        )}
      </Formik>

      {/* <div className="register">
        <div className="user-data">
          <div className="user-data-register name">
            <label>Անուն *</label>
            <input type="text" />
          </div>
          <div className="user-data-register surname">
            <label>Ազգանուն *</label>
            <input type="text" />
          </div>
          <div className="user-data-register phone-number">
            <label>Հեռախոսահամար *</label>
            <input type="tel" />
          </div>
        </div>
        <div className="online-data">
          <div className="user-data-register email">
            <label>Էլ-Փոստ *</label>
            <input type="email" />
          </div>
          <div className="user-data-register register-password">
            <label>Գաղտնաբառ *</label>
            <input type="password" />
          </div>
          <div className="user-data-register repeat-password">
            <label>Կրկնել Գաղտնաբառը *</label>
            <input type="password" />
          </div>
        </div>
      </div> */}
      {/* <div className="button-register">
        <button className="register-button">ԳՐԱՆՑՎԵԼ</button>
      </div> */}
    </div>
  );
};

export default RegisterForm;
