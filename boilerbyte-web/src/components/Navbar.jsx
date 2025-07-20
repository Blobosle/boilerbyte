export default function Navbar() {
    return (
        <div className="pt-5 flex justify-between">
            <a href="/" className="pt-4 pl-10 sm:pl-25 text-default font-interextrabold text-[20px]">boilerbyte_</a>

            <div className="pt-5 pr-10 sm:pr-25 tracking-[.02em] text-default flex justify-center gap-5 font-firamonoregular">
                <a href="/man/">./about</a>
                <a>./courses</a>
            </div>
        </div>
    );
}
