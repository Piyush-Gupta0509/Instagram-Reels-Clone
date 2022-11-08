import React from 'react'

function InterObs() {
    const callback = (entries) => {
        entries.forEach((entry) => {
            let ele=entry
            // .target.childNodes[0];
            console.log(ele);
        //   if (entry.isIntersecting) {
        //     let elem = entry.target;
      
        //     if (entry.intersectionRatio >= 0.75) {
        //       intersectionCounter++;
        //     }
        //   }
        });
      }
    let options = {
        // root: document.querySelector('#scrollArea'),
        // rootMargin: '0px',
        threshold: 0.6
      }
    let observer = new IntersectionObserver(callback, options);
  return (
    <div>InterObs</div>
  )
}

export default InterObs