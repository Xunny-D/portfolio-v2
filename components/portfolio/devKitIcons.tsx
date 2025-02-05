import { useInView } from "react-intersection-observer";

import {
  GolangIcon,
  GinIcon,
  DotNetIcon,
  CSharpIcon,
  ReactIcon,
  NextJSIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ExpressIcon,
  TailwindIcon,
  AzureIcon,
  AWSIcon,
  JavaIcon,
  FlutterIcon,
  PythonIcon,
  TensorFlowIcon,
  CIcon,
  CPlusPlusIcon,
  SQLServerIcon,
  GitIcon,
  NoSQLIcon,
  ThreeJsIcon,
  FreeRtosIcon,
  NodeJsIcon,
} from "@/components/icons";
import { title } from "@/components/primitives";

export default function DevKitIcons() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 1,
  });

  return (
    <>
      <div
        ref={ref1}
        className={`${title()} mx-auto text-[#f6f6f6] h-fit ${inView1 && "animate-typewriter"} ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 max-w-fit`}
      >
        {inView1 && "My Dev Toolkit:"}
      </div>
      <div
        className={`${inView1 && "animate-transitionFromBottom ease-in-out animate-delay-2s"} opacity-0 mx-auto flex flex-col gap-[3vh] justify-center`}
      >
        <div className="flex justify-center gap-[1vw]">
          {inView1 && (
            <>
              <JavaScriptIcon className="w-[2vw] h-[4vh]" />
              <TypeScriptIcon className="w-[2vw] h-[4vh]" />
              <NextJSIcon className="w-[2vw] h-[4vh]" />
              <ReactIcon className="w-[2vw] h-[4vh]" />
              <CSharpIcon className="w-[2vw] h-[4vh]" />
              <DotNetIcon className="w-[2vw] h-[4vh]" />
              <GolangIcon className="w-[2vw] h-[4vh]" />
              <GinIcon className="w-[2vw] h-[4vh]" />
            </>
          )}
        </div>
        <div className="flex justify-center gap-[1vw]">
          {inView1 && (
            <>
              <NodeJsIcon className="w-[2vw] h-[4vh]" />
              <ExpressIcon className="w-[2vw] h-[4vh]" />
              <ThreeJsIcon className="w-[2vw] h-[4vh]" />
              <NoSQLIcon className="w-[2vw] h-[4vh]" />
              <SQLServerIcon className="w-[2vw] h-[4vh]" />
              <TailwindIcon className="w-[2vw] h-[4vh]" />
              <TensorFlowIcon className="w-[2vw] h-[4vh]" />
              <PythonIcon className="w-[2vw] h-[4vh]" />
            </>
          )}
        </div>
        <div className="flex justify-center gap-[1vw]">
          {inView1 && (
            <>
              <JavaIcon className="w-[2vw] h-[4vh]" />
              <FlutterIcon className="w-[2vw] h-[4vh]" />
              <GitIcon className="w-[2vw] h-[4vh]" />
              <AWSIcon className="w-[2vw] h-[4vh]" />
              <AzureIcon className="w-[2vw] h-[4vh]" />
              <FreeRtosIcon className="w-[2vw] h-[4vh]" />
              <CIcon className="w-[2vw] h-[4vh]" />
              <CPlusPlusIcon className="w-[2vw] h-[4vh]" />
            </>
          )}
        </div>
      </div>
    </>
  );
}
