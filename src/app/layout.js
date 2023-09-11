import MainHeader from './MainHeader'
import MenuBar from './MenuBar'

export default function RootLayout({ children }) {
  return (
    
  <html lang="en">
  

    <body>
      <MainHeader/>
    {children}
      <MenuBar/>
    </body>

  </html>
  )
}
