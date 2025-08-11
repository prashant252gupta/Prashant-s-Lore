"use client";

import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';

export default function SplineBackground() {
  
  const onLoad = (spline: Application) => {
    // console.log(spline.getAllObjects());
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-30">
      <Spline
        scene="https://prod.spline.design/1zeQtflKZD13UN8W/scene.splinecode" 
        onLoad={onLoad}
      />
    </div>
  );
}
