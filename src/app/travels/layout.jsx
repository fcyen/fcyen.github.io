import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'

export default function TravelLayout({ children }) {
  return (
    <>
      <section className="overflow-hidden bg-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            {children}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}