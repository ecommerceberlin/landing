import React from 'react';

const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full max-w-[95vw]">
      <div className="flex animate-marquee">
        {/* Duplicate the content for a continuous loop */}
        <div className="mr-8">{children}</div>
        <div className="mr-8">{children}</div>
        <div className="mr-8">{children}</div>
        <div className="mr-8">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;