import { useEffect, useRef, useState } from "react";
import ButtonContainer from "../Components/ButtonCOntainer";

const CounterView = () => {
  //   console.log("page rendered");
  const para = useRef();
  const [a, setA] = useState(10);

  const handleProps = (aa) => {
    setA(aa);
  };

  useEffect(() => {
    let interval;
    // console.log(para.current.);
    para.current.style.color = "green";
    if (a < 0) {
      para.current.style.color = "red";
      interval = setTimeout(() => {
        setA(0);
      }, 2000);
    }

    return () => {
      clearTimeout(interval);
    };
  }, [a]);

  return (
    <div className="counterConatiner">
      <p ref={para} className="counterValue">
        {a}
      </p>
      <ButtonContainer handleProps={handleProps} a={a} />
    </div>
  );
};

export default CounterView;
