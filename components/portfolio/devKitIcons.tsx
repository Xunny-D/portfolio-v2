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

interface DevKitIconsProps {
  refProp: React.Ref<HTMLDivElement>;
  inViewProp: boolean;
  outerViewRef: boolean;
}

export default function DevKitIcons({
  refProp,
  inViewProp,
  outerViewRef,
}: DevKitIconsProps) {
  return (
    <>
      <section className="flex flex-col gap-[4vh] md:gap-[10vh] h-fit w-fit mx-auto">
        <div
          ref={refProp}
          className={`${title()} text-[#f6f6f6] h-fit ${inViewProp && "animate-typewriter"} ease-in-out overflow-hidden whitespace-nowrap ${!outerViewRef && "border-r-2 border-slate-300"} max-w-fit mx-auto`}
        >
          {inViewProp && "My Dev Toolkit:"}
        </div>
        <div
          className={`${inViewProp && "animate-transitionFromBottom ease-in-out animate-delay-1s"} opacity-0 mx-auto flex flex-col gap-[3vh] justify-center`}
        >
          <div className="flex justify-center gap-[1vw]">
            {inViewProp && (
              <>
                <JavaScriptIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <TypeScriptIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <NextJSIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <ReactIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <CSharpIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <DotNetIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <GolangIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <GinIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
              </>
            )}
          </div>
          <div className="flex justify-center gap-[1vw]">
            {inViewProp && (
              <>
                <NodeJsIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <ExpressIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <ThreeJsIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <NoSQLIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <SQLServerIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <TailwindIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <TensorFlowIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <PythonIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
              </>
            )}
          </div>
          <div className="flex justify-center gap-[1vw]">
            {inViewProp && (
              <>
                <JavaIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <FlutterIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <GitIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <AWSIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <AzureIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <FreeRtosIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <CIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
                <CPlusPlusIcon className="w-[8vw] h-[16vh] sm:w-[4vw] sm:h-[8vh]" />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
