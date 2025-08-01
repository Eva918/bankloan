

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-3 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
       
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            this is a demo test of powerbi iframe embedding{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            
          </li>
         
        </ol>
  
        <div className="w-full flex justify-center sm:justify-start">
          <iframe
            title="Financial Dashboard"
            width="900"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiZmQwZDdjZGQtZjg1NS00ZWMzLWE4YmQtZDUwNTFkZjYzNDhhIiwidCI6ImJmMzdmMzE1LWJhYzItNDRhOC1hZTZjLTJmMjEzNTFkMjY0YyIsImMiOjEwfQ%3D%3D"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div> 
       
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </footer>
    </div>
  );
}
