import {Canvas} from "@react-three/fiber"
import { Suspense } from "react"
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "../components/HackerRoom"
import HeroCamera from "../components/HeroCamera"
import CanvasLoader from "../components/CanvasLoader"
import { Leva} from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import Target from "../components/target"
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/Cube"
import Rings from "../components/Rings"
import Button from "../components/Button"

const Hero = () =>{
    const isMobile = useMediaQuery({maxWidth: 768})
    const isSmall = useMediaQuery({maxWidth:440})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth:1024})

    const sizes = calculateSizes(isMobile, isTablet, isSmall)

    return(
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hello, I am Obi Kennedy, <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Your idea is weird, but I can build it
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <Leva hidden />
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom 
                                scale={sizes.deskScale} 
                                position={sizes.deskPosition} 
                                rotation={[0.1, -Math.PI, 0]} 
                            />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Rings position={sizes.ringPosition} />
                            <Cube position={sizes.cubePosition} />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
              <a href="#about" className="w-fit">
                <Button name="Reach out to me !!!!" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
              </a>
            </div>
        </section>
    )
}

export default Hero