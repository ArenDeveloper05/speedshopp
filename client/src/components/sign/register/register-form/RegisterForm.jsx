import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { login, register } from "../../../../api/api";

import "./RegisterForm.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();

  const registerSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(4, t("validations.short"))
      .required(t("validations.required")),
    last_name: Yup.string()
      .min(4, t("validations.short"))
      .required(t("validations.required")),
    email: Yup.string()
      .email(t("validations.email"))
      .required(t("validations.required")),
    phone: Yup.string()
      .min(8, t("validations.short"))
      .required(t("validations.required")),
    password: Yup.string()
      .min(8, t("validations.short"))
      .required(t("validations.required")),
    password_confirmation: Yup.string()
      .min(8, t("validations.short"))
      .required(t("validations.required")),
  });
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    alert(JSON.stringify(errors));
  }, [errors]);

  const registerFunction = async (userData) => {
    try {
      const { data } = await register({
        ...userData,
        role: "user",
        phone: userData.phone.toString(),
      });
      // if (data.status === 200) {
      const loginResponse = await login({
        email: userData.email,
        password: userData.password,
      });
      console.log(loginResponse.data);
      console.log(data);
      // }
      if (data.errors && Object.keys(data.errors) !== 0) {
        setErrors(data.errors);
      }
    } catch (error) {
      console.log(error, "error");
      setErrors(error.response.data);
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
          if (values.password === values.password_confirmation) {
            registerFunction(values);
          }
        }}
      >
        {({ errors, touched, values }) => (
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
              {values.password !== values.password_confirmation && (
                <div>{t("validations.password_confirmation")}</div>
              )}
            </div>
            <button className="register-button" type="submit">
              ԳՐԱՆՑՎԵԼ
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
