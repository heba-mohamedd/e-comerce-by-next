"use client";

import React, { useState } from "react";

interface Props {
  children: string;
}

function TsxtExpander({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 5).join(" ") + "...";
  return (
    <span>
      {displayText}
      <button className="font-bold" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TsxtExpander;
