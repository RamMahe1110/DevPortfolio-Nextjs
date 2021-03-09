import MainHeader from './main-header'
import MainFooter from './main-footer'

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  )
}
