import { Footer } from "../components/layout/Footer"
import { Header } from "../components/layout/Header"
import { HomePage } from "../pages/HomePage"

export function AppShell() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
}
