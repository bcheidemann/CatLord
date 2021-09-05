import React from "react";
import gsap from 'gsap';

export function useTimeline() {
  const timeline = React.useMemo(() => gsap.timeline(), []);
  return timeline;
}