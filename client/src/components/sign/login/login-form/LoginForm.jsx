import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./LoginForm.scss";
import { useTranslation } from "react-i18next";
import { login } from "../../../../api/api";
import { useState } from "react";

const LorginForm = () => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("validations.email"))
      .required(t("validations.required")),
    password: Yup.string()
      .min(8, t("validations.short"))
      .required(t("validations.required")),
  });

  const loginFunction = async (values) => {
    try {
      console.log(values);
      const { data } = await login(values);
      console.log(data);
    } catch (error) {
      alert(error);
      setErrors(error);
    }
  };

  return (
    <div className="username">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          loginFunction(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form className="log-form">
            <div className="form-row">
              <label htmlFor="log-email">Էլ-Փոստ *</label>
              <Field name="email" type="email" id="log-email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className="form-row">
              <label htmlFor="log-pass">Գաղտնաբառ *</label>
              <Field name="password" type="password" id="log-pass" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>

            <button className="login-button" type="submit">
              ՄՈՒՏՔ
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LorginForm;
