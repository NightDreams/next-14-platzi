
export default function Layout({children}:{children:React.ReactNode}){
  return(
    <main>
      <nav>
        Navigation Categories
      </nav>
      {children}
    </main>
  )
}