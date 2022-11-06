export default function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      
      <div className="text-md light:text-gray-900 dark:text-gray-400">
        &copy; {new Date().getFullYear()}
        <a
          href="https://myportfoliov2-beta.vercel.app/"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500 light:text-gray-900 dark:text-gray-400"
        >
          Next.js / Grégory MOREL Portfolio.
        </a>
      </div>
    </div>
  );
}


