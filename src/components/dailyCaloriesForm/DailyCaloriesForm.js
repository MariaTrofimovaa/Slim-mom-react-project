import React from "react";
import { Formik, Field, Form } from "formik";
import DailyCaloriesFormValidator from "./DailyCaloriesFormValidator";
import styles from "./DailyCaloriesForm.module.css";


const DailyCaloriesForm = ({ onSubmit }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Просчитай свою суточную норму калорий прямо сейчас
    </h1>
    <div className={styles.inputWrapper}>
      <Formik
        initialValues={{
          height: "",
          age: "",
          weight: "",
          desiredWeight: "",
          bloodType: "1",
        }}
        validationSchema={DailyCaloriesFormValidator}
        onSubmit={onSubmit}
        render={({ errors, touched }) => (
          <Form className={styles.formContainer}>
            <div className={styles.formWrapper}>
              <div>
                <label htmlFor="height" className={styles.formInput}>
                  Рост*
                </label>
                <Field name="height" type="text" className={styles.field} />

                {errors.height && touched.height && (
                  <div className={styles.fieldError}>{errors.height}</div>
                )}
                <label htmlFor="age" className={styles.formInput}>
                  Возраст*
                </label>
                <Field name="age" type="text" className={styles.field} />

                {errors.age && touched.age && (
                  <div className={styles.fieldError}>{errors.age}</div>
                )}
                <label htmlFor="weight" className={styles.formInput}>
                  Текущий вес*
                </label>
                <Field name="weight" type="text" className={styles.field} />

                {errors.weight && touched.weight && (
                  <div className={styles.fieldError}>{errors.weight}</div>
                )}
              </div>
              <div className={styles.radioWrapper}>
                <label htmlFor="desiredWeight" className={styles.formInput}>
                  Желаемый вес*
                </label>
                <Field
                  name="desiredWeight"
                  type="text"
                  className={styles.field}
                />

                {errors.desiredWeight && touched.desiredWeight && (
                  <div className={styles.fieldError}>
                    {errors.desiredWeight}
                  </div>
                )}
                <div id="my-radio-group" className={styles.formInput}>
                  Группа крови*
                </div>
                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  className={styles.radio}
                >
                  <label className={styles.formRadio}>
                    <Field
                      type="radio"
                      name="bloodType"
                      value="1"
                      checked="checked"
                      className={styles.customRadio}
                    />
                    <span></span>
                    <small>1</small>
                  </label>
                  <label className={styles.formRadio}>
                    <Field
                      type="radio"
                      name="bloodType"
                      value="2"
                      className={styles.customRadio}
                    />
                    <span></span>
                    <small>2</small>
                  </label>
                  <label className={styles.formRadio}>
                    <Field
                      type="radio"
                      name="bloodType"
                      value="3"
                      className={styles.customRadio}
                    />
                    <span></span>
                    <small>3</small>
                  </label>
                  <label className={styles.formRadio}>
                    <Field
                      type="radio"
                      name="bloodType"
                      value="4"
                      className={styles.customRadio}
                    />
                    <span></span>
                    <small>4</small>
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className={styles.button}>
              Похудеть
            </button>
          </Form>
        )}
      />
    </div>
  </div>
);

export default DailyCaloriesForm;
