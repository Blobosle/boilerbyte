export default function Cs240() {
    const book = "/books/cs240-book.png";

    return (
        <div className="w-full h-250 leading-none">
            <h2 className="pl-10 md:pl-25 pt-10 text-default font-firamonoregular text-[15px]">$ cat cs240.md</h2>
            <h1 className="pl-10 pb-12 md:pl-25 pt-2 text-default font-interbold text-[30px] md:text-[50px] lg:text-[70px] xl:text-[100px]">
                CS 240: Programming in C
            </h1>

            <div className="pl-30 grid grid-cols-2">
                <div className="pl-30 text-default">
                    <h2 className="font-firamonomedium tracking-[0.02em] text-[20px]">&gt;_ Recommended book</h2>

                    <p className="pt-5 font-firamonoregular font-light text-[20px]/[30px] tracking-[0.02em]">
                        “The C Programming Language” by Brian Kernigan<br/>and Dennis Ritchie.
                    </p>

                    <img src={book} className="pt-5 w-90 h-130"/>
                </div>

                <div className="text-default">
                    <h2 className="pb-7 font-firamonomedium tracking-[0.02em] text-[20px]">&gt;_ Official recommended resources</h2>

                    <a href="https://blobosle.com/purdue/cs240/docs/gdb-tutorial.pdf" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">GDB tutorial<br/></a>
                    <a href="https://blobosle.com/purdue/cs240/docs/bgc.pdf" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Beej’s guide to C programming<br/></a>
                    <a href="https://www.youtube.com/watch?v=nfRxGE1Tk0M" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Vim week (by Kian Kasad)<br/></a>

                    <h2 className="pb-7 pt-15 font-firamonomedium tracking-[0.02em] text-[20px]">&gt;_ Our recommended resources</h2>

                    <a href="https://turkeyland.net/projects/overflow/intro.php" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Buffer overflows and you<br/></a>
                    <a href="https://web.archive.org/web/20110604141506/http://www.ualberta.ca/CNS/RESEARCH/LinuxClusters/mem.html" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]" target="_blank">Understanding memory<br/></a>
                    <a href="https://www.youtube.com/watch?v=H4SDPLiUnv4" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Overview on syscalls<br/></a>
                    <a href="https://gcc.gnu.org/onlinedocs/gcc-3.2/gcc/Optimize-Options.html" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">GCC optimization flags<br/></a>
                    <a href="https://valgrind.org/docs/manual/quick-start.html" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Valgrind quick start guide<br/></a>
                </div>
            </div>
        </div>
    );
}
