import React from "react";
import DynamicText from "../../layouts/dynamic-text";
import ClassCard from "../../cards/class-card";
import { classesData } from "../../../lib/constants";

const OurClasses = () => {
  return (
    <section className="max-width">
      <DynamicText
        heading="Our Classes"
        description="Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus lacus"
      />

      <div className="flex gap-10">
        {classesData.map((item) => {
          return <ClassCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default OurClasses;
