// This component represents a form with validation using Formik and Yup libraries.
// It includes form fields for first name, last name, username, city, state, zip, and terms acceptance.
// Form validation is defined using Yup schema validation.
// Feedback on form fields' validity is provided to the user.
// The form utilizes React Bootstrap components for styling and layout.

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

const ValidationNormal = () => {
  const { Formik } = formik;

  // Yup schema for form validation
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    // Formik wrapper for managing form state and validation
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        terms: false,
      }}
    >
      {/* Render function to access Formik state and helpers */}
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        // Bootstrap Form component with noValidate to disable browser validation
        <Form noValidate onSubmit={handleSubmit}>
          {/* Row for form fields */}
          <Row className="mb-3">
            {/* First Name field */}
            <Form.Group as={Col} md="12" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* Last Name field */}
            <Form.Group as={Col} md="12" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* Username field */}
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          {/* Row for additional form fields */}
          <Row className="mb-3">
            {/* City field */}
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            {/* State field */}
            <Form.Group as={Col} md="12" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Zip field */}
            <Form.Group as={Col} md="12" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {/* Checkbox for terms acceptance */}
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          {/* Submit button */}
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ValidationNormal;
