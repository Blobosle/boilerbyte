export default function Cs251() {
    const book = "/books/cs251-book.png";

    return (
        <div className="w-full h-250 leading-none">
            <h2 className="pl-10 md:pl-25 pt-10 text-default font-firamonoregular text-[15px]">$ cat cs251.md</h2>
            <h1 className="pl-10 pb-12 md:pl-25 pt-2 text-default font-interbold text-[30px] md:text-[50px] lg:text-[70px] xl:text-[100px]">
                CS 251: Data Structures and Algorithms
            </h1>

            <div className="pl-30 grid grid-cols-2">
                <div className="pl-30 text-default">
                    <h2 className="font-firamonomedium tracking-[0.02em] text-[20px]">&gt;_ Recommended book</h2>

                    <p className="pt-5 font-firamonoregular font-light text-[20px]/[30px] tracking-[0.02em]">
                        “Introduction to Algorithms” by Thomas H.<br/>Cormen, Charles E. Leiserson, Ronald L.<br/>Rivest, and Clifford Stein.
                    </p>

                    <img src={book} className="pt-5 w-120 h-130"/>
                </div>

                <div className="text-default">
                    <h2 className="pb-7 font-firamonomedium tracking-[0.02em] text-[20px]">&gt;_ Past PSO logs</h2>

                    <a href="https://justin-zhang.com/teaching/CS251" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Justin Zhang notes<br/></a>
                    <a href="https://github.com/arshmeets/251-PSO" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Past PSO archive<br/></a>

                    <h2 className="pb-7 pt-15 font-firamonomedium tracking-[0.02em] text-[20px]">&gt;_ Prof. Bejarano’s notes</h2>

                    <a href="https://lofitea.github.io/BejanaroNotes/S2025" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Spring 2025 notes<br/></a>
                    <a href="https://bejaranonotes.github.io/cs251/F2024" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Fall 2024 notes<br/></a>

                    <h2 className="pb-7 pt-15 font-firamonomedium tracking-[0.02em] text-[20px]">&gt;_ Our recommended resources</h2>

                    <a href="https://github.com/icefox-saber/CLRS" target="_blank" className="hover:underline font-firamonoregular font-light text-[20px]/[30px]">Solutions to “Introduction to Algorithms”<br/></a>

                </div>
            </div>
        </div>
    );
}
