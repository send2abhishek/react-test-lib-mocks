import React, { useState } from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";

const SummaryForm = () => {
  const [isCheckboxChecked, setIsCheckbox] = useState(false);

  const popoverHoverFocus = (
    <Popover id="popover-trigger-hover-focus" title="Popover bottom">
      no ice cream will actually be delivered
    </Popover>
  );

  return (
    <div>
      <button disabled={!isCheckboxChecked}>Confirm Order</button>

      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="bottom"
        overlay={popoverHoverFocus}
      >
        <div>
          <label htmlFor="terms and condition">Terms and condition</label>
          <input
            type="checkbox"
            id="terms and condition"
            onChange={(e) => setIsCheckbox(e.target.checked)}
          />
        </div>
      </OverlayTrigger>
    </div>
  );
};

export default SummaryForm;
