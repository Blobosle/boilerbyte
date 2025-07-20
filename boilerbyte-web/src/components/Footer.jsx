export default function Footer() {
    return (
        <div className="relative md:grid md:grid-cols-2 text-default bg-black border-1 border-default w-full h-90">
            <div className="pt-20 pl-10 md:pl-30 text-nowrap">
                <h2 className="font-firamonobold">$ cat mission.txt</h2>

                <p className="pt-5 font-firamonoregular">
                    Reduce the load from CS students,<br/>to enjoy Purdue a little bit more.
                </p>

                <p className="hidden sm:block pt-30 font-firamonoregular">
                    $ echo “© 2025 boilerbyte. All rights reserved.”
                </p>

                <p className="sm:hidden pt-30 font-firamonoregular">
                    $ echo “© 2025 boilerbyte.<br/>All rights reserved.”
                </p>
            </div>

            <div className="hidden md:block pt-20 pl-25 lg:pl-0">
                <h2 className="font-firamonobold">$ ls /docs</h2>

                <p className="pt-5 font-firamonoregular">
                    <a href="/" className="hover:underline">README.md<br/></a>
                    <a href="/" className="hover:underline">donate.sh<br/></a>
                    <a href="/" className="hover:underline">collaborate.txt<br/></a>
                    <a href="/" className="hover:underline">contact.sh<br/></a>
                </p>
            </div>

            <a href="/" className="hidden lg:block absolute text-default text-[30px] font-interextrabold top-0 right-0 pt-20 pr-40">boilerbyte_</a>
        </div>
    );
}
