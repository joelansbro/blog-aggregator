import Link from "next/link";

const Index = () =>{
  console.log("Hello there!");
  return (
    <>
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold underline text-gray-dark">Blog Aggregator</h1>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/result">
            <a>Result</a>
          </Link>
        </li>
        <li>
          <Link href="/design">
            <a>Design</a>
          </Link>
        </li>
      </ul>
    </div>
    </>
  )
} ;

export default Index;