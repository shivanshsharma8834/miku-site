export const Sidebar = () => {
    return (
        <div className="w-[300px] h-screen sticky top-0 left-0 flex flex-col ">
            {/* Links section */}
            <div className="flex-1 py-10 px-16">
                <div>ABOUT</div>
                <div>GALLERY</div>
                <div>SPECIAL</div>
                <div>HISTORY</div>
            </div>
            {/* Social Media links section */}
            <div>
                <div>Twitter</div>
                <div>Facebook</div>
                <div>Instagram</div>
            </div>

        </div>
    )
}