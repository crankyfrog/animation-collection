import LogoCarousel from "@/components/logo-carousel/logoCarousel";

export default function animationCarousel(){
    return(
        <main>
            <LogoCarousel
                photos={[
                    '/logos/logo.png',
                    '/logos/logo.png',
                    '/logos/logo.png',
                    '/logos/logo.png',
                    '/logos/logo.png',
                    '/logos/logo.png',
                    '/logos/logo.png'
                ]}
                speed={30}
                />
        </main>
    )
}