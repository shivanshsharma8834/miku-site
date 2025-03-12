export const MainContent = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="bg-[url(/main_bg.png)] bg-center bg-repeat w-full h-[5000px] no-scrollbar">
                <img src="/expo-logo.svg" className="w-[750px] absolute right-40 top-30"/>
            </div>
            <div className="w-full h-[250px]">
                Footer
            </div>
        </div>
    )
}