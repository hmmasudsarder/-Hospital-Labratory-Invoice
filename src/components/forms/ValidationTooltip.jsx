// This component represents a form with validation using Formik and Yup libraries.
// It includes form fields for first name, last name, username, city, state, zip, file upload, and terms acceptance.
// Form validation is defined using Yup schema validation, including support for mixed types (file upload).
// Feedback on form fields' validity is provided to the user via tooltips.
// The form utilizes React Bootstrap components for styling and layout.

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

const ValidationTooltip = () => {
  const { Formik } = formik;

  // Yup schema for form validation
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
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
        file: null,
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
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* Last Name field */}
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* Username field */}
            <Form.Group as={Col} md="12" controlId="validationFormikUsername2">
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
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          {/* Row for additional form fields */}
          <Row className="mb-3">
            {/* City field */}
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            {/* State field */}
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Zip field */}
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          {/* Checkbox for terms acceptance */}
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>

          {/* Submit button */}
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ValidationTooltip;
