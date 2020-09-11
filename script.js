function light(elm){
          const elmDimensions = elm.getBoundingClientRect(),
          elmSize = {
                    x : elmDimensions.right - elmDimensions.left,
                    y : elmDimensions.bottom - elmDimensions.top,           
          };
          console.log(elmDimensions);
          console.log(elmSize);

          var text = new mojs.Burst({
                    left : elmDimensions.left +elmSize.x /2,
                    top : elmDimensions.top +elmSize.y /2,
                    radiusX : elmSize.x,
                    radiusY : elmSize.y,
                    count :6,
                    children :{
                              shape :"line",
                              fill : "none",
                              radius :14,
                              scale :{
                                        0.5 :1
                              },
                              points :7,
                              stroke : "#1dc2f0",
                              strokeDasharray : "100%",
                              strokeDashoffset : {
                                        "-120%": "100%"
                              },
                              duration :400,
                              delay : 80,
                              isShowEnd :false
                    }
          });
          text.play( );
}