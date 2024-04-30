// This forms includes various form input types like text, email, password, file, date, month, time, week, number, and URL.
// The form is styled using tailwindcss classes for layout and appearance.
import { Form } from "react-bootstrap";
import Navbar from "../navbar/Navbar";

const BasicForm = () => {
  return (
    <div className="w-[85%]">
      {/* Including a navbar component */}
      <Navbar />
      <div className="w-[95%] mx-auto py-6">
        <h3>Basic Elements</h3>
        <div className="bg-white w-[100%] mx-auto my-4 p-4 rounded shadow">
          <h5 className="font-bold">INPUT TYPES</h5>
          <p>
            Most Common form control, text a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content.
          </p>

          <div className="flex gap-x-8 w-[100%]">
            <div className="w-[50%]">
              {/* Form for text inputs */}
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="font-bold">Text</Form.Label>
                  <Form.Control type="text" placeholder="Search Text Value" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="font-bold">E-mail</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="font-bold">Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="font-bold">Placeholder</Form.Label>
                  <Form.Control type="text" placeholder="placeholder" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="font-bold">Text textarea</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="font-bold">Read Only</Form.Label>
                  <Form.Control type="text" placeholder="Read Only" readOnly />
                </Form.Group>
              </Form>
              {/* Submit button */}
              <button className="bg-blue-700 px-6 py-2 rounded-lg text-xl text-white my-2">
                Submit
              </button>
            </div>
            <div className="w-[50%]">
              {/* Form for other input types */}
              <Form>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label className="font-bold">
                    Default file input example
                  </Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="dateField" className="mb-3">
                  <Form.Label className="font-bold">Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group controlId="monthField" className="mb-3">
                  <Form.Label className="font-bold">Month</Form.Label>
                  <Form.Control type="month" />
                </Form.Group>

                <Form.Group controlId="timeField" className="mb-3">
                  <Form.Label className="font-bold">Time</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>

                <Form.Group controlId="weekField" className="mb-3">
                  <Form.Label className="font-bold">Week</Form.Label>
                  <Form.Control type="week" />
                </Form.Group>

                <Form.Group controlId="numberField" className="mb-3">
                  <Form.Label className="font-bold">Number</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Form.Group controlId="urlField" className="mb-3">
                  <Form.Label className="font-bold mt-[8px]">URL</Form.Label>
                  <Form.Control type="url" />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
