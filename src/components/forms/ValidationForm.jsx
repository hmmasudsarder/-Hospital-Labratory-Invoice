// This component renders a validation form section.
// It imports and renders two sub-components: ValidationNormal and ValidationTooltip.
// The form section includes information about Bootstrap validation techniques - normal and with tooltips.
// It utilizes React Bootstrap components for styling and layout.

import Navbar from "../navbar/Navbar";
import ValidationNormal from "./ValidationNormal";
import ValidationTooltip from "./ValidationTooltip";

const validationForm = () => {
  return (
    <div className="w-[85%] mx-auto">
      {/* Including a navbar component */}
      <Navbar />
      <div className="w-[95%] mx-auto p-4">
        <h5>Validation</h5>
        <div className="flex items-center gap-x-6 mt-4">
          {/* Section for Bootstrap Validation - Normal */}
          <div className="w-[50%] bg-white rounded shadow p-4">
            <h5 className="font-bold">BOOTSTRAP VALIDATION-NORMAL</h5>
            <p>
              Provide valuable, accessible feedback to users with HTML5 form
              validation. Available in all modern browsers, it ensures better
              user experience and error handling.
            </p>
            <div>
              {/* Rendering ValidationNormal component */}
              <ValidationNormal />
            </div>
          </div>
          {/* Section for Bootstrap Validation - Tooltip */}
          <div className="w-[50%] bg-white rounded shadow p-4">
            <h5 className="font-bold">BOOTSTRAP VALIDATION-(TOOLTIP)</h5>
            <p>
              Most common form controls like text, email, password, file, date,
              month, time, week, number, and URL support validation with
              tooltips for enhanced user guidance.
            </p>
            <div>
              {/* Rendering ValidationTooltip component */}
              <ValidationTooltip />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default validationForm;
