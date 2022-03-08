import React, { useState } from "react";

export default function Postal({ front, back }: any) {
  const [isPostalSwipped, setIsPostalSwipped] = useState(false);
  const swippe = () => setIsPostalSwipped((pos) => !pos);

  const classNamePostal = isPostalSwipped ? "swipped" : "";

  const Front = () => React.cloneElement(front, { swippe });
  const Back = () => React.cloneElement(back, { swippe });

  return (
      <div className="postal">
        <div className={["postal-inner", classNamePostal].join(" ")}>
          <div className="postal-front"><Front/></div>
          <div className="postal-back"><Back/></div>
        </div>
      </div>
  );
}
